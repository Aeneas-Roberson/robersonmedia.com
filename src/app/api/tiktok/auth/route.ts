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

    const clientKey = process.env.NEXT_PUBLIC_TIKTOK_CLIENT_ID;
    const clientSecret = process.env.TIKTOK_CLIENT_SECRET;
    const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://robersonmedia.com'}/tiktok/login`;

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

    const tokenParams = new URLSearchParams({
      client_key: clientKey,
      client_secret: clientSecret,
      code: code,
      grant_type: 'authorization_code',
      redirect_uri: redirectUri,
    });
    
    // If you were using PKCE, you would include the code_verifier
    // if (code_verifier) {
    //   tokenParams.append('code_verifier', code_verifier);
    // }

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

    // Optionally, fetch user info
    // Note: The user.info.basic scope should grant access to this.
    // If you request user.info.profile, you can get more details like avatar, display_name etc.
    // Ensure your app has requested and been granted the necessary scopes.
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

    console.log('TikTok user authenticated:', open_id);

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
    instructions: "This endpoint is for POST requests from the TikTok login page to exchange an auth code for an access token."
  });
} 