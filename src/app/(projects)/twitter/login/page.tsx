"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function TwitterLoginContent() {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const [clientInfo, setClientInfo] = useState({
    redirectUri: '',
    currentUrl: ''
  });
  const searchParams = useSearchParams();

  // Handle client-side values to avoid hydration mismatch
  useEffect(() => {
    setClientInfo({
      redirectUri: `${window.location.origin}/twitter/callback`,
      currentUrl: window.location.href
    });
  }, []);

  // Handle callback results from the callback page
  useEffect(() => {
    const success = searchParams.get('success');
    const error = searchParams.get('error');
    const userData = searchParams.get('user');
    const accessToken = searchParams.get('token');

    if (success === 'true' && userData) {
      try {
        const user = JSON.parse(decodeURIComponent(userData));
        setUserInfo(user);
        if (accessToken) {
          localStorage.setItem('twitter_access_token', decodeURIComponent(accessToken));
        }
        setError("");
        // Clean the URL
        window.history.replaceState({}, document.title, "/twitter/login");
      } catch (err) {
        console.error('Error parsing user data:', err);
        setError('Failed to process login data');
      }
    } else if (error) {
      const errorMessage = decodeURIComponent(error);
      setError(errorMessage === 'network_error' 
        ? 'Network error occurred during authentication'
        : errorMessage === 'invalid_state'
        ? 'Invalid authentication state - please try again'
        : errorMessage === 'no_authorization_code'
        ? 'No authorization code received from Twitter'
        : errorMessage
      );
      // Clean the URL
      window.history.replaceState({}, document.title, "/twitter/login");
    }
  }, [searchParams]);

  // Generate PKCE values for OAuth 2.0
  const generateCodeChallenge = async (codeVerifier: string) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode(...new Uint8Array(digest)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '');
  };

  const generateCodeVerifier = () => {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return btoa(String.fromCharCode(...array))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '');
  };

  const generateState = () => {
    return Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
  };

  const handleLogin = async () => {
    const clientId = process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID;
    const redirectUri = encodeURIComponent(`${window.location.origin}/twitter/callback`);
    const scope = encodeURIComponent('tweet.read tweet.write users.read offline.access');
    
    if (!clientId || clientId === 'your_twitter_client_id_here') {
      setError('Twitter Client ID is not configured. Please check your environment variables.');
      return;
    }

    setIsLoading(true);

    try {
      // Generate PKCE values
      const codeVerifier = generateCodeVerifier();
      const codeChallenge = await generateCodeChallenge(codeVerifier);
      const state = generateState();
      
      // Store values for callback
      sessionStorage.setItem('twitter_code_verifier', codeVerifier);
      sessionStorage.setItem('twitter_oauth_state', state);
      
      // Fix: Use the correct Twitter OAuth 2.0 authorization endpoint
      const authUrl = `https://x.com/i/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}&code_challenge=${codeChallenge}&code_challenge_method=S256`;
      
      console.log('Generated auth URL:', authUrl);
      console.log('Client ID:', clientId);
      console.log('Redirect URI:', decodeURIComponent(redirectUri));
      console.log('Scope:', decodeURIComponent(scope));
      
      // Add a small delay before redirect to ensure storage is set
      setTimeout(() => {
        window.location.href = authUrl;
      }, 100);
      
    } catch (error) {
      console.error('Error generating auth URL:', error);
      setError('Failed to generate authentication URL. Please try again.');
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('twitter_access_token');
    setUserInfo(null);
    setError("");
    // Clear URL parameters
    window.history.replaceState({}, document.title, "/twitter/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900">
      {/* Simple background overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Twitter Login
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Connect your Twitter account for API integration
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-cyan-500/30 p-8">
            
            {/* Loading State */}
            {isLoading && (
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
                <p className="text-gray-300">Processing authentication...</p>
              </div>
            )}

            {/* Error State */}
            {error && !isLoading && (
              <div className="text-center">
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 mb-6">
                  <h3 className="text-red-400 font-semibold text-lg mb-2">Authentication Error</h3>
                  <p className="text-gray-300">{error}</p>
                </div>
                <button
                  onClick={() => setError("")}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Try Again
                </button>
              </div>
            )}

            {/* Success State - User Logged In */}
            {userInfo && !isLoading && (
              <div className="text-center">
                <div className="mb-6">
                  {userInfo.profile_image_url && (
                    <img
                      src={userInfo.profile_image_url}
                      alt={userInfo.username || 'User'}
                      className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-cyan-400"
                    />
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Welcome, @{userInfo.username || 'User'}!
                  </h3>
                  <p className="text-gray-300">
                    Your Twitter account is connected successfully.
                  </p>
                  {userInfo.name && (
                    <p className="text-gray-400 text-sm mt-2">
                      {userInfo.name}
                    </p>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                    <h4 className="text-green-400 font-semibold mb-2">Connection Successful!</h4>
                    <p className="text-gray-300 text-sm">
                      You can now use Twitter's API features through this integration.
                    </p>
                  </div>

                  {userInfo.public_metrics && (
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                      <h4 className="text-blue-400 font-semibold mb-2">Account Stats:</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                        <div>Followers: {userInfo.public_metrics.followers_count?.toLocaleString()}</div>
                        <div>Following: {userInfo.public_metrics.following_count?.toLocaleString()}</div>
                        <div>Tweets: {userInfo.public_metrics.tweet_count?.toLocaleString()}</div>
                        <div>Listed: {userInfo.public_metrics.listed_count?.toLocaleString()}</div>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={handleLogout}
                    className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    Disconnect Account
                  </button>
                </div>
              </div>
            )}

            {/* Login State - Not Logged In */}
            {!userInfo && !isLoading && !error && (
              <div className="text-center">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Login to Twitter</h3>
                  <p className="text-gray-300 mb-6">
                    Connect your Twitter account to access API features and manage your tweets.
                  </p>
                </div>

                {/* Debug Information */}
                <div className="mb-6 p-4 bg-gray-800/50 rounded-lg border border-gray-600">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Debug Information:</h4>
                  <div className="text-xs text-gray-400 space-y-1">
                    <div>Client ID: {process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID ? 
                      `${process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID.substring(0, 8)}...` : 
                      'Not configured'
                    }</div>
                    <div>Redirect URI: {clientInfo.redirectUri || 'Loading...'}</div>
                    <div>Current URL: {clientInfo.currentUrl || 'Loading...'}</div>
                  </div>
                </div>

                <button
                  onClick={handleLogin}
                  disabled={isLoading}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center mx-auto"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Redirecting to Twitter...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                      Connect with Twitter
                    </>
                  )}
                </button>

                <div className="mt-4 text-sm text-gray-400">
                  <p>By connecting, you agree to our <a href="/twitter/privacy-policy" className="text-cyan-400 hover:underline">Privacy Policy</a> and <a href="/twitter/terms-of-service" className="text-cyan-400 hover:underline">Terms of Service</a></p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Back to Projects Button */}
        <div className="text-center mt-12">
          <a
            href="/"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            ← Back to Projects
          </a>
        </div>
      </div>
    </div>
  );
}

export default function TwitterLogin() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-400"></div>
      </div>
    }>
      <TwitterLoginContent />
    </Suspense>
  );
} 