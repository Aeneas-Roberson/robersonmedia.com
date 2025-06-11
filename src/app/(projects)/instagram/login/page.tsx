"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function InstagramLoginContent() {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const searchParams = useSearchParams();

  // Handle results passed from the callback page
  useEffect(() => {
    const success = searchParams.get('success');
    const errorParam = searchParams.get('error');
    const userData = searchParams.get('user');
    const accessToken = searchParams.get('token');

    // Clear loading state if we came from callback, regardless of outcome
    setIsLoading(false);

    if (success === 'true' && userData) {
      try {
        const user = JSON.parse(decodeURIComponent(userData));
        setUserInfo(user);
        if (accessToken) {
          localStorage.setItem('instagram_access_token', decodeURIComponent(accessToken));
        }
        setError("");
        // Clean the URL
        window.history.replaceState({}, document.title, "/instagram/login");
      } catch (err) {
        console.error('Error parsing user data from callback:', err);
        setError('Failed to process login data from callback');
      }
    } else if (errorParam) {
      const errorMessage = decodeURIComponent(errorParam);
      setError(errorMessage);
      // Clean the URL
      window.history.replaceState({}, document.title, "/instagram/login");
    }
  }, [searchParams]);

  const handleLogin = () => {
    const clientId = process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID;
    const redirectUri = encodeURIComponent(`${window.location.origin}/instagram/callback`);
    const scope = encodeURIComponent('instagram_basic,pages_show_list,instagram_content_publish,business_management,instagram_manage_messages,instagram_manage_comments,instagram_manage_insights,pages_read_engagement');
    
    // Debug logging
    console.log('Client ID from env:', clientId);
    console.log('All env vars:', process.env);
    
    if (!clientId || clientId === 'your_instagram_client_id_here') {
      setError('Instagram Client ID is not configured. Please check your environment variables.');
      return;
    }
    
    const authUrl = `https://www.facebook.com/v23.0/dialog/oauth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;
    
    console.log('Generated auth URL:', authUrl);
    window.location.href = authUrl;
  };

  const handleLogout = () => {
    localStorage.removeItem('instagram_access_token');
    setUserInfo(null);
    setError("");
    // Clear URL parameters
    window.history.replaceState({}, document.title, "/instagram/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
      {/* Simple background overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Instagram Business Login
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Connect your Instagram Business account for video posting
          </p>
        </div>

        {/* Login Content */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-purple-500/30 p-8">
            
            {/* Loading State */}
            {isLoading && (
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
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
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Try Again
                </button>
              </div>
            )}

            {/* Success State - User Logged In */}
            {userInfo && !isLoading && (
              <div className="text-center">
                <div className="mb-6">
                  {userInfo.profile_picture_url && (
                    <img
                      src={userInfo.profile_picture_url}
                      alt={userInfo.username || 'User'}
                      className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-purple-400"
                    />
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Welcome, @{userInfo.username || 'User'}!
                  </h3>
                  <p className="text-gray-300">
                    Your Instagram Business account is connected successfully.
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Account ID: {userInfo.id}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                    <p className="text-green-400 font-semibold">
                      ✓ Business Account Connected
                    </p>
                    <p className="text-gray-300 text-sm mt-1">
                      You can now upload videos and manage your Instagram content.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                      onClick={() => window.location.href = '/instagram/upload'}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Upload Video
                    </button>
                    
                    <button
                      onClick={handleLogout}
                      className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                    >
                      Disconnect Account
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Login State */}
            {!userInfo && !isLoading && !error && (
              <div className="text-center">
                <p className="text-gray-300 text-lg mb-8">
                  Connect your Instagram Business account to start uploading videos and managing your content automatically.
                </p>

                <div className="space-y-6">
                  <div className="bg-gray-800/50 border border-purple-500/30 rounded-lg p-6">
                    <h3 className="text-purple-400 font-semibold text-lg mb-4">
                      Instagram Business Login
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      You'll be redirected to Instagram to authorize our application.
                    </p>
                    <button
                      onClick={handleLogin}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    >
                      <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      Connect Instagram Business Account
                    </button>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                    <h4 className="text-blue-400 font-semibold mb-2">Requirements:</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Instagram Business or Creator account</li>
                      <li>• Account must be connected to a Facebook Page</li>
                      <li>• Valid permissions for content publishing</li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mt-8">
                  By connecting your account, you agree to our{" "}
                  <a href="/instagram/privacy-policy" className="text-purple-400 hover:text-purple-300 underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="/instagram/terms-of-service" className="text-purple-400 hover:text-purple-300 underline">
                    Terms of Service
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Back to Instagram Project Button */}
        <div className="text-center mt-8">
          <a
            href="/instagram"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
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
            Back to Instagram Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default function InstagramLogin() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400"></div>
      </div>
    }>
      <InstagramLoginContent />
    </Suspense>
  );
} 