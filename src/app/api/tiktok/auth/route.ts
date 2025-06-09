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

    const clientKey = process.env.NEXT_PUBLIC_TIKTOK_CLIENT_ID;
    const clientSecret = process.env.TIKTOK_CLIENT_SECRET;
    const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://robersonmedia.com'}/tiktok/callback/`;

    if (!clientKey || clientKey === 'your_tiktok_client_id_here') {
      console.error('TikTok Client Key not configured in environment variables.');
      return NextResponse.json(
        { error: 'TikTok Client Key not configured.' },
        { status: 500 }
      );
    }
    if (!clientSecret) {
      console.error('TikTok Client Secret not configured in environment variables.');
      return NextResponse.json(
        { error: 'TikTok Client Secret not configured.' },
        { status: 500 }
      );
    }

    console.log('Token exchange - Redirect URI:', redirectUri);
    console.log('Token exchange - Authorization code:', code);

    // Web app token exchange (no PKCE required)
    const tokenParams = new URLSearchParams({
      client_key: clientKey,
      client_secret: clientSecret,
      code: code,
      grant_type: 'authorization_code',
      redirect_uri: redirectUri,
    });

    const tokenResponse = await fetch('https://open.tiktokapis.com/v2/oauth/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: tokenParams.toString(),
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      console.error('TikTok token exchange error:', tokenData);
      return NextResponse.json(
        { error: tokenData.error_description || 'Failed to exchange code for token', details: tokenData },
        { status: tokenResponse.status }
      );
    }

    const { access_token, refresh_token, open_id, scope, expires_in, refresh_expires_in } = tokenData;

    // Fetch user info with the access token
    const userInfoResponse = await fetch(`https://open.tiktokapis.com/v2/user/info/?fields=open_id,union_id,avatar_url,display_name,username`, {
      headers: {
        'Authorization': `Bearer ${access_token}`,
      },
    });

    let userData = { open_id, username: 'TikTok User' }; // Default username
    if (userInfoResponse.ok) {
      const userInfoData = await userInfoResponse.json();
      if (userInfoData.data && userInfoData.data.user) {
        userData = { ...userData, ...userInfoData.data.user };
        console.log('TikTok user info retrieved successfully:', userData);
      } else {
         console.warn("User info came back in an unexpected format or was empty:", userInfoData);
      }
    } else {
      console.warn('Failed to fetch TikTok user info:', await userInfoResponse.text());
      // Proceed without detailed user info if this call fails
    }
    
    // TODO: Store access_token, refresh_token, and user details securely in your database
    // Associate them with your internal user ID.
    // Consider encrypting tokens at rest.

    console.log('TikTok user authenticated successfully:', open_id);

    return NextResponse.json({
      user: userData, // contains open_id, and potentially avatar_url, display_name if scope allows and call succeeds
      accessToken: access_token,
      refreshToken: refresh_token,
      openId: open_id,
      scope: scope,
      expiresIn: expires_in,
      refreshExpiresIn: refresh_expires_in,
    });

  } catch (error: any) {
    console.error('TikTok auth callback internal error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}

// Handle GET requests (for testing or simple checks)
export async function GET() {
  return NextResponse.json({
    message: 'TikTok Authentication Callback Endpoint',
    status: 'active',
    timestamp: new Date().toISOString(),
    instructions: "This endpoint is for POST requests from the TikTok callback page to exchange an auth code for an access token.",
    redirectUri: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://robersonmedia.com'}/tiktok/callback/`,
    appType: 'Web App (No PKCE required)'
  });
} 