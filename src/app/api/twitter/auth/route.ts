import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { code, code_verifier } = await request.json();

    if (!code) {
      return NextResponse.json(
        { error: 'Authorization code is required' },
        { status: 400 }
      );
    }

    if (!code_verifier) {
      return NextResponse.json(
        { error: 'Code verifier is required for PKCE' },
        { status: 400 }
      );
    }

    const clientId = process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID;
    const clientSecret = process.env.TWITTER_CLIENT_SECRET;
    const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://robersonmedia.com'}/twitter/callback`;

    if (!clientId || clientId === 'your_twitter_client_id_here') {
      console.error('Twitter Client ID not configured in environment variables.');
      return NextResponse.json(
        { error: 'Twitter Client ID not configured.' },
        { status: 500 }
      );
    }
    if (!clientSecret) {
      console.error('Twitter Client Secret not configured in environment variables.');
      return NextResponse.json(
        { error: 'Twitter Client Secret not configured.' },
        { status: 500 }
      );
    }

    // Create Basic Auth header
    const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    // Exchange authorization code for access token
    const tokenParams = new URLSearchParams({
      code: code,
      grant_type: 'authorization_code',
      client_id: clientId,
      redirect_uri: redirectUri,
      code_verifier: code_verifier,
    });

    console.log('Token exchange - Redirect URI:', redirectUri);
    console.log('Token exchange - Authorization code:', code);

    const tokenResponse = await fetch('https://api.twitter.com/2/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${credentials}`,
      },
      body: tokenParams.toString(),
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      console.error('Twitter token exchange error:', tokenData);
      return NextResponse.json(
        { error: tokenData.error_description || tokenData.error || 'Failed to exchange code for token' },
        { status: 400 }
      );
    }

    const { access_token, refresh_token, expires_in } = tokenData;

    // Fetch user information using the access token
    const userResponse = await fetch('https://api.twitter.com/2/users/me?user.fields=id,username,name,profile_image_url,public_metrics,description,verified', {
      headers: {
        'Authorization': `Bearer ${access_token}`,
      },
    });

    const userData = await userResponse.json();

    if (!userResponse.ok) {
      console.error('Twitter user data error:', userData);
      return NextResponse.json(
        { error: userData.title || userData.detail || 'Failed to fetch user data' },
        { status: 400 }
      );
    }

    const user = userData.data;

    // TODO: Store user data and tokens in your database
    // Example:
    // await prisma.twitterUser.upsert({
    //   where: { twitterId: user.id },
    //   create: {
    //     twitterId: user.id,
    //     username: user.username,
    //     name: user.name,
    //     profileImageUrl: user.profile_image_url,
    //     accessToken: access_token,
    //     refreshToken: refresh_token,
    //     tokenExpiresAt: new Date(Date.now() + (expires_in * 1000))
    //   },
    //   update: {
    //     username: user.username,
    //     name: user.name,
    //     profileImageUrl: user.profile_image_url,
    //     accessToken: access_token,
    //     refreshToken: refresh_token,
    //     tokenExpiresAt: new Date(Date.now() + (expires_in * 1000))
    //   }
    // });

    console.log('Twitter user authenticated:', user.username);

    return NextResponse.json({
      user: user,
      access_token: access_token,
      refresh_token: refresh_token,
      expires_in: expires_in,
    });

  } catch (error: any) {
    console.error('Twitter auth error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}

// Handle GET requests (for testing or simple checks)
export async function GET() {
  return NextResponse.json({
    message: 'Twitter Authentication Endpoint',
    status: 'active',
    timestamp: new Date().toISOString(),
    instructions: "This endpoint is for POST requests to exchange an auth code for an access token.",
    redirectUri: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://robersonmedia.com'}/twitter/callback`,
    flow: 'OAuth 2.0 with PKCE'
  });
} 