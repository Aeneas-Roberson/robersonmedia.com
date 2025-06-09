import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// POST endpoint for deauthorization callback
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
        console.error('Invalid Instagram deauth signature');
        return NextResponse.json(
          { error: 'Invalid signature' },
          { status: 401 }
        );
      }
    }

    const userId = data.user_id;
    
    // TODO: When you add your database, revoke user tokens here
    // Example:
    // await prisma.instagramUser.update({
    //   where: { instagramId: userId },
    //   data: { accessToken: null, isActive: false }
    // });
    
    console.log(`Instagram deauthorization for user: ${userId}`);

    return NextResponse.json({
      status: 'success',
      message: 'User deauthorized successfully'
    });

  } catch (error) {
    console.error('Instagram deauth callback error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle GET requests (for testing)
export async function GET() {
  return NextResponse.json({
    message: 'Instagram Deauthorization Callback Endpoint',
    status: 'active',
    timestamp: new Date().toISOString()
  });
} 