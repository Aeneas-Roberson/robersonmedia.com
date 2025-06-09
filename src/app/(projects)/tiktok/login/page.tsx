"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function TikTokLoginContent() {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const searchParams = useSearchParams();

  // Handle callback results from the callback page
  useEffect(() => {
    const success = searchParams.get('success');
    const error = searchParams.get('error');
    const userData = searchParams.get('user');

    if (success === 'true' && userData) {
      try {
        const user = JSON.parse(decodeURIComponent(userData));
        setUserInfo(user);
        setError("");
        // Clean the URL
        window.history.replaceState({}, document.title, "/tiktok/login");
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
        ? 'No authorization code received from TikTok'
        : errorMessage
      );
      // Clean the URL
      window.history.replaceState({}, document.title, "/tiktok/login");
    }
  }, [searchParams]);

  const handleLogin = () => {
    const clientId = process.env.NEXT_PUBLIC_TIKTOK_CLIENT_ID;
    const redirectUri = encodeURIComponent(`${window.location.origin}/tiktok/callback`);
    const scope = encodeURIComponent('user.info.basic,user.info.profile');
    const state = 'tiktok_login';
    
    if (!clientId || clientId === 'your_tiktok_client_id_here') {
      setError('TikTok Client ID is not configured. Please check your environment variables.');
      return;
    }
    
    const authUrl = `https://www.tiktok.com/v2/auth/authorize/?client_key=${clientId}&scope=${scope}&response_type=code&redirect_uri=${redirectUri}&state=${state}`;
    
    console.log('Redirect URI:', redirectUri);
    console.log('Generated auth URL:', authUrl);
    
    window.location.href = authUrl;
  };

  const handleLogout = () => {
    setUserInfo(null);
    setError("");
    // Clear URL parameters
    window.history.replaceState({}, document.title, "/tiktok/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-pink-900 to-red-900">
      {/* Simple background overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-red-500/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
              TikTok Business Login
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Connect your TikTok account for content management
          </p>
        </div>

        {/* Login Content */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-pink-500/30 p-8">
            
            {/* Loading State */}
            {isLoading && (
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-400 mx-auto mb-4"></div>
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
                  className="bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Try Again
                </button>
              </div>
            )}

            {/* Success State - User Logged In */}
            {userInfo && !isLoading && (
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Welcome, {userInfo.display_name || userInfo.username || 'User'}!
                  </h3>
                  <p className="text-gray-300">
                    Your TikTok account is connected successfully.
                  </p>
                  {userInfo.avatar_url && (
                     <img 
                        src={userInfo.avatar_url} 
                        alt={userInfo.display_name || userInfo.username || 'User'} 
                        className="w-20 h-20 rounded-full mx-auto mb-4 mt-4 border-2 border-pink-400" 
                     />
                  )}
                  <p className="text-gray-400 text-sm mt-2">
                    Open ID: {userInfo.open_id || userInfo.id} 
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                    <p className="text-green-400 font-semibold">
                      ✓ TikTok Account Connected
                    </p>
                    <p className="text-gray-300 text-sm mt-1">
                      You can now manage your TikTok content and analytics.
                    </p>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    Disconnect Account
                  </button>
                </div>
              </div>
            )}

            {/* Login State */}
            {!userInfo && !isLoading && !error && (
              <div className="text-center">
                <p className="text-gray-300 text-lg mb-8">
                  Connect your TikTok account to start managing your content and analyzing performance metrics.
                </p>

                <div className="space-y-6">
                  <div className="bg-gray-800/50 border border-pink-500/30 rounded-lg p-6">
                    <h3 className="text-pink-400 font-semibold text-lg mb-4">
                      TikTok Business Login
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      You'll be redirected to TikTok to authorize our application.
                    </p>
                    <button
                      onClick={handleLogin}
                      className="w-full bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    >
                      <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      </svg>
                      Connect TikTok Account
                    </button>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                    <h4 className="text-blue-400 font-semibold mb-2">Features:</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Content management and analytics</li>
                      <li>• Performance insights and metrics</li>
                      <li>• Professional dashboard access</li>
                      <li>• Business integration tools</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                    <h4 className="text-yellow-400 font-semibold mb-2">Callback URL:</h4>
                    <p className="text-gray-400 text-sm font-mono">
                      {`${window.location.origin}/tiktok/callback`}
                    </p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mt-8">
                  By connecting your account, you agree to our{" "}
                  <a href="/tiktok/privacy-policy" className="text-pink-400 hover:text-pink-300 underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="/tiktok/terms-of-service" className="text-pink-400 hover:text-pink-300 underline">
                    Terms of Service
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Back to TikTok Project Button */}
        <div className="text-center mt-8">
          <a
            href="/tiktok"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to TikTok Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default function TikTokLogin() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-pink-900 to-red-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-400"></div>
      </div>
    }>
      <TikTokLoginContent />
    </Suspense>
  );
} 