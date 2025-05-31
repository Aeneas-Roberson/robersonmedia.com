// src/app/api/facebook/data-deletion/route.ts
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

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
    if (process.env.FACEBOOK_APP_SECRET) {
      const expectedSig = crypto
        .createHmac('sha256', process.env.FACEBOOK_APP_SECRET)
        .update(payload)
        .digest('base64url');

      if (encodedSig !== expectedSig) {
        console.error('Invalid Facebook signature');
        return NextResponse.json(
          { error: 'Invalid signature' },
          { status: 401 }
        );
      }
    }

    const userId = data.user_id;
    const deletionId = `DEL_${userId}_${Date.now()}`;
    
    // TODO: When you add your database, delete user data here
    // Example:
    // await prisma.user.delete({ where: { facebookId: userId } });
    // await prisma.accessToken.deleteMany({ where: { userId: userId } });
    
    console.log(`Data deletion requested for Facebook user: ${userId}`);
    console.log(`Deletion confirmation ID: ${deletionId}`);

    // Return confirmation URL (pointing to your page) and deletion ID
    return NextResponse.json({
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://robersonmedia.com'}/facebook/data-deletion?status=success&id=${deletionId}`,
      confirmation_code: deletionId
    });

  } catch (error) {
    console.error('Data deletion callback error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle GET requests (for testing)
export async function GET() {
  return NextResponse.json({
    message: 'Facebook Data Deletion Callback Endpoint',
    status: 'active',
    timestamp: new Date().toISOString()
  });
}