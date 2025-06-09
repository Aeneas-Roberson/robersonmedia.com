import { NextRequest, NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const videoFile = formData.get('video') as File;
    const caption = formData.get('caption') as string;
    const accessToken = formData.get('access_token') as string;

    if (!videoFile || !accessToken) {
      return NextResponse.json(
        { error: 'Video file and access token are required' },
        { status: 400 }
      );
    }

    // Get user's Instagram account ID
    const userResponse = await fetch(
      `https://graph.instagram.com/me?access_token=${accessToken}`
    );
    
    const userData = await userResponse.json();
    
    if (!userResponse.ok) {
      return NextResponse.json(
        { error: userData.error?.message || 'Failed to get user data' },
        { status: 400 }
      );
    }

    const instagramUserId = userData.id;

    // Step 1: Upload video to cloud storage first
    const videoUrl = await uploadVideoToCloudStorage(videoFile);
    
    // Step 2: Create media container for video
    const containerParams = new URLSearchParams({
      media_type: 'VIDEO',
      video_url: videoUrl,
      access_token: accessToken,
    });

    if (caption) {
      containerParams.append('caption', caption);
    }

    const containerResponse = await fetch(
      `https://graph.instagram.com/v18.0/${instagramUserId}/media`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: containerParams,
      }
    );

    const containerData = await containerResponse.json();

    if (!containerResponse.ok) {
      console.error('Instagram container creation error:', containerData);
      return NextResponse.json(
        { error: containerData.error?.message || 'Failed to create media container' },
        { status: 400 }
      );
    }

    const containerId = containerData.id;

    // Step 3: Check container status (required for videos)
    let containerStatus = 'IN_PROGRESS';
    let attempts = 0;
    const maxAttempts = 30; // Max 5 minutes (30 * 10 seconds)

    while (containerStatus === 'IN_PROGRESS' && attempts < maxAttempts) {
      await new Promise(resolve => setTimeout(resolve, 10000)); // Wait 10 seconds
      
      const statusResponse = await fetch(
        `https://graph.instagram.com/v18.0/${containerId}?fields=status_code&access_token=${accessToken}`
      );
      
      const statusData = await statusResponse.json();
      
      if (statusResponse.ok) {
        containerStatus = statusData.status_code;
      }
      
      attempts++;
    }

    if (containerStatus !== 'FINISHED') {
      return NextResponse.json(
        { error: `Video processing failed. Status: ${containerStatus}` },
        { status: 400 }
      );
    }

    // Step 4: Publish the media
    const publishResponse = await fetch(
      `https://graph.instagram.com/v18.0/${instagramUserId}/media_publish`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          creation_id: containerId,
          access_token: accessToken,
        }),
      }
    );

    const publishData = await publishResponse.json();

    if (!publishResponse.ok) {
      console.error('Instagram publish error:', publishData);
      return NextResponse.json(
        { error: publishData.error?.message || 'Failed to publish media' },
        { status: 400 }
      );
    }

    console.log('Instagram video published successfully:', publishData.id);

    return NextResponse.json({
      success: true,
      media_id: publishData.id,
      message: 'Video uploaded successfully to Instagram',
    });

  } catch (error) {
    console.error('Instagram upload error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Cloud storage upload function (Cloudflare R2 / AWS S3 compatible)
async function uploadVideoToCloudStorage(videoFile: File): Promise<string> {
  try {
    // Check if cloud storage is configured
    const accessKeyId = process.env.CLOUDFLARE_R2_ACCESS_KEY_ID || process.env.AWS_ACCESS_KEY_ID;
    const secretAccessKey = process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY || process.env.AWS_SECRET_ACCESS_KEY;
    const bucketName = process.env.CLOUDFLARE_R2_BUCKET_NAME || process.env.AWS_BUCKET_NAME;
    const endpoint = process.env.CLOUDFLARE_R2_ENDPOINT;
    const region = process.env.AWS_REGION || 'auto';

    if (!accessKeyId || !secretAccessKey || !bucketName) {
      throw new Error('Cloud storage credentials not configured. Please set up Cloudflare R2 or AWS S3 environment variables.');
    }

    // Configure S3 client (works with both AWS S3 and Cloudflare R2)
    const s3Client = new S3Client({
      region: region,
      endpoint: endpoint, // For Cloudflare R2, this is required
      credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
      },
      // For Cloudflare R2, force path style
      forcePathStyle: !!endpoint,
    });

    // Generate unique filename
    const timestamp = Date.now();
    const fileExtension = videoFile.name.split('.').pop() || 'mp4';
    const fileName = `instagram-videos/${timestamp}-${Math.random().toString(36).substring(2)}.${fileExtension}`;

    // Convert File to Buffer
    const videoBuffer = Buffer.from(await videoFile.arrayBuffer());

    // Upload to cloud storage
    const uploadCommand = new PutObjectCommand({
      Bucket: bucketName,
      Key: fileName,
      Body: videoBuffer,
      ContentType: videoFile.type || 'video/mp4',
      // Make the file publicly accessible
      ACL: 'public-read',
    });

    await s3Client.send(uploadCommand);

    // Construct the public URL
    let publicUrl: string;
    if (endpoint) {
      // Cloudflare R2 public URL
      const baseUrl = endpoint.replace('r2.cloudflarestorage.com', 'pub.r2.dev');
      publicUrl = `${baseUrl}/${fileName}`;
    } else {
      // AWS S3 public URL
      publicUrl = `https://${bucketName}.s3.${region}.amazonaws.com/${fileName}`;
    }

    console.log(`Video uploaded successfully: ${publicUrl}`);
    return publicUrl;

  } catch (error) {
    console.error('Cloud storage upload error:', error);
    throw new Error(`Failed to upload video to cloud storage: ${error}`);
  }
}

// Handle GET requests (for testing)
export async function GET() {
  return NextResponse.json({
    message: 'Instagram Video Upload Endpoint',
    status: 'active',
    timestamp: new Date().toISOString(),
    requirements: [
      'Video file (MP4 format recommended)',
      'Instagram Business access token',
      'Optional caption text',
      'Cloud storage configured (Cloudflare R2 or AWS S3)'
    ],
    cloudStorage: {
      configured: !!(
        (process.env.CLOUDFLARE_R2_ACCESS_KEY_ID && process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY && process.env.CLOUDFLARE_R2_BUCKET_NAME) ||
        (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY && process.env.AWS_BUCKET_NAME)
      ),
      type: process.env.CLOUDFLARE_R2_ENDPOINT ? 'Cloudflare R2' : 'AWS S3'
    }
  });
} 