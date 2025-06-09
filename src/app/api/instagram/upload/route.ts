import { NextRequest, NextResponse } from 'next/server';

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

    // Step 1: Create media container for video
    const videoBuffer = await videoFile.arrayBuffer();
    const videoBase64 = Buffer.from(videoBuffer).toString('base64');
    
    // Note: For large videos, you should upload to a cloud storage first
    // and provide the video_url instead of uploading directly
    
    const containerParams = new URLSearchParams({
      media_type: 'VIDEO',
      access_token: accessToken,
    });

    if (caption) {
      containerParams.append('caption', caption);
    }

    // For this example, we'll assume you have the video uploaded to a publicly accessible URL
    // In production, you should upload to cloud storage (AWS S3, Cloudflare R2, etc.) first
    const videoUrl = await uploadVideoToCloudStorage(videoFile);
    containerParams.append('video_url', videoUrl);

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

    // Step 2: Check container status (required for videos)
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

    // Step 3: Publish the media
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

// Mock function for cloud storage upload
// Replace this with your actual cloud storage implementation
async function uploadVideoToCloudStorage(videoFile: File): Promise<string> {
  // TODO: Implement actual cloud storage upload
  // Example with Cloudflare R2, AWS S3, or similar service
  
  // For now, return a placeholder URL
  // In production, you would:
  // 1. Upload the video to your cloud storage
  // 2. Return the public URL
  
  const fileName = `instagram-video-${Date.now()}.mp4`;
  
  // Mock implementation - replace with actual upload logic
  console.log(`Uploading video: ${fileName}, size: ${videoFile.size} bytes`);
  
  // This should be replaced with actual cloud storage upload
  return `https://your-cloud-storage.com/videos/${fileName}`;
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
      'Optional caption text'
    ]
  });
} 