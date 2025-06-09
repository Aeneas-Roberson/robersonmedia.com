import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// POST endpoint for data deletion callback
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { signed_request } = body;

    if (!signed_request) {
      return NextResponse.json(
        { error: 'Missing signed_request' },
        { status: 400 }
      );
    }

    // Parse the signed request
    const [encodedSig, payload] = signed_request.split('.');
    const data = JSON.parse(
      Buffer.from(payload, 'base64url').toString('utf-8')
    );

    // Verify signature (recommended for production)
    if (process.env.INSTAGRAM_APP_SECRET) {
      const expectedSig = crypto
        .createHmac('sha256', process.env.INSTAGRAM_APP_SECRET)
        .update(payload)
        .digest('base64url');

      if (encodedSig !== expectedSig) {
        console.error('Invalid Instagram data deletion signature');
        return NextResponse.json(
          { error: 'Invalid signature' },
          { status: 401 }
        );
      }
    }

    const userId = data.user_id;
    const deletionId = `DEL_IG_${userId}_${Date.now()}`;
    
    // TODO: When you add your database, delete user data here
    // Example:
    // await prisma.instagramUser.delete({ where: { instagramId: userId } });
    // await prisma.upload.deleteMany({ where: { user: { instagramId: userId } } });
    
    console.log(`Instagram data deletion requested for user: ${userId}`);
    console.log(`Deletion confirmation ID: ${deletionId}`);

    // Return confirmation URL (pointing to your page) and deletion ID
    return NextResponse.json({
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://robersonmedia.com'}/instagram/data-deletion?status=success&id=${deletionId}`,
      confirmation_code: deletionId
    });

  } catch (error) {
    console.error('Instagram data deletion callback error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle GET requests (for testing)
export async function GET() {
  return NextResponse.json({
    message: 'Instagram Data Deletion Callback Endpoint',
    status: 'active',
    timestamp: new Date().toISOString()
  });
} 