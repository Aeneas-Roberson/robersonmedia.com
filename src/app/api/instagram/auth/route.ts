import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();

    if (!code) {
      return NextResponse.json(
        { error: 'Authorization code is required' },
        { status: 400 }
      );
    }

    const serverSideRedirectUri = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://robersonmedia.com'}/instagram/callback`;
    console.log('[Instagram Auth API] Server-side redirect_uri for token exchange:', serverSideRedirectUri);

    // Exchange authorization code for access token
    const requestBody = new URLSearchParams({
      client_id: process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID!,
      client_secret: process.env.INSTAGRAM_CLIENT_SECRET!,
      grant_type: 'authorization_code',
      redirect_uri: serverSideRedirectUri,
      code: code,
    });
    console.log('[Instagram Auth API] Token exchange request body:', requestBody.toString());

    const tokenResponse = await fetch('https://api.instagram.com/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: requestBody,
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      console.error('Instagram token exchange error:', tokenData);
      return NextResponse.json(
        { error: tokenData.error_message || 'Failed to exchange code for token' },
        { status: 400 }
      );
    }

    const { access_token, user_id } = tokenData;

    // Get long-lived access token
    const longLivedTokenResponse = await fetch(
      `https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${process.env.INSTAGRAM_CLIENT_SECRET}&access_token=${access_token}`,
      { method: 'GET' }
    );

    const longLivedTokenData = await longLivedTokenResponse.json();

    if (!longLivedTokenResponse.ok) {
      console.error('Instagram long-lived token error:', longLivedTokenData);
      // Continue with short-lived token if long-lived fails
    }

    const finalAccessToken = longLivedTokenData.access_token || access_token;

    // Fetch user information using Instagram User ID and token
    const userResponse = await fetch(
      `https://graph.instagram.com/${user_id}?fields=id,username,account_type,media_count&access_token=${finalAccessToken}`,
      { method: 'GET' }
    );

    const userData = await userResponse.json();

    if (!userResponse.ok) {
      console.error('Instagram user data error:', userData);
      return NextResponse.json(
        { error: userData.error?.message || 'Failed to fetch user data' },
        { status: 400 }
      );
    }

    // TODO: Store user data and access token in your database
    // Example:
    // await prisma.instagramUser.upsert({
    //   where: { instagramId: userData.id },
    //   create: {
    //     instagramId: userData.id,
    //     username: userData.username,
    //     accountType: userData.account_type,
    //     accessToken: finalAccessToken,
    //     tokenExpiresAt: new Date(Date.now() + (longLivedTokenData.expires_in * 1000))
    //   },
    //   update: {
    //     username: userData.username,
    //     accountType: userData.account_type,
    //     accessToken: finalAccessToken,
    //     tokenExpiresAt: new Date(Date.now() + (longLivedTokenData.expires_in * 1000))
    //   }
    // });

    console.log('Instagram user authenticated:', userData.username);

    return NextResponse.json({
      user: userData,
      access_token: finalAccessToken,
      expires_in: longLivedTokenData.expires_in || 3600,
    });

  } catch (error) {
    console.error('Instagram auth error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle GET requests (for testing)
export async function GET() {
  return NextResponse.json({
    message: 'Instagram Authentication Endpoint',
    status: 'active',
    timestamp: new Date().toISOString()
  });
} 