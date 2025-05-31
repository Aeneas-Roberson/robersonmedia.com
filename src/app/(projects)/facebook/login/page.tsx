// src/app/(projects)/facebook/login/page.tsx
"use client";

import Script from "next/script";
import { useState, useEffect } from "react";

export default function FacebookLogin() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [loginStatus, setLoginStatus] = useState<string>('checking');
  const [userInfo, setUserInfo] = useState<FacebookApiResponse | null>(null);

  useEffect(() => {
    // Check login status when SDK loads
    if (isSDKLoaded && window.FB) {
      checkLoginState();
    }
  }, [isSDKLoaded]);

  // Facebook's recommended callback function
  const checkLoginState = () => {
    if (window.FB) {
      window.FB.getLoginStatus((response: FacebookLoginResponse) => {
        statusChangeCallback(response);
      });
    }
  };

  // Process the login status response
  const statusChangeCallback = (response: FacebookLoginResponse) => {
    setLoginStatus(response.status);
    
    if (response.status === 'connected') {
      // User is logged into Facebook and your app
      fetchUserInfo();
    } else if (response.status === 'not_authorized') {
      // User is logged into Facebook but not your app
      console.log('User is logged into Facebook but not authorized for the app');
    } else {
      // User is not logged into Facebook
      console.log('User is not logged into Facebook');
      setUserInfo(null);
    }
  };

  const fetchUserInfo = () => {
    if (window.FB) {
      window.FB.api('/me', { fields: 'name,email,picture' }, (response: FacebookApiResponse) => {
        if (response.error) {
          console.error('Facebook API Error:', response.error);
        } else {
          setUserInfo(response);
        }
      });
    }
  };

  const handleCustomLogin = () => {
    if (window.FB) {
      window.FB.login((response: FacebookLoginResponse) => {
        statusChangeCallback(response);
      }, { scope: 'email,public_profile' });
    }
  };

  const handleLogout = () => {
    if (window.FB) {
      window.FB.logout((response: any) => {
        statusChangeCallback(response);
        setUserInfo(null);
        console.log('Logout successful:', response);
      });
    }
  };

  // Make checkLoginState available globally for the Facebook button
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).checkLoginState = checkLoginState;
    }
  }, []);

  return (
    <>
      {/* Facebook SDK Script */}
      <Script
        id="facebook-sdk"
        strategy="afterInteractive"
        onLoad={() => setIsSDKLoaded(true)}
        dangerouslySetInnerHTML={{
          __html: `
            window.fbAsyncInit = function() {
              FB.init({
                appId      : '${process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}',
                cookie     : true,
                xfbml      : true,
                version    : 'v18.0'
              });
              
              FB.AppEvents.logPageView();
              
              // Make checkLoginState available globally
              window.checkLoginState = function() {
                FB.getLoginStatus(function(response) {
                  // Trigger React state update
                  window.dispatchEvent(new CustomEvent('fbStatusChange', { detail: response }));
                });
              };
            };

            (function(d, s, id){
               var js, fjs = d.getElementsByTagName(s)[0];
               if (d.getElementById(id)) {return;}
               js = d.createElement(s); js.id = id;
               js.src = "https://connect.facebook.net/en_US/sdk.js";
               fjs.parentNode.insertBefore(js, fjs);
             }(document, 'script', 'facebook-jssdk'));
          `,
        }}
      />

      {/* Listen for Facebook status changes */}
      <Script
        id="fb-status-listener"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('fbStatusChange', function(event) {
              // This will be handled by React
            });
          `,
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Simple background overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Facebook Login
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Connect your Facebook account for API integration
            </p>
          </div>

          {/* Login Content */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-cyan-500/30 p-8">
              
              {/* Loading State */}
              {!isSDKLoaded && (
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
                  <p className="text-gray-300">Loading Facebook SDK...</p>
                </div>
              )}

              {/* SDK Loaded - Show Login/User Info */}
              {isSDKLoaded && (
                <>
                  {loginStatus === 'connected' && userInfo ? (
                    // User is logged in
                    <div className="text-center">
                      <div className="mb-6">
                        {userInfo.picture?.data?.url && (
                          <img
                            src={userInfo.picture.data.url}
                            alt={userInfo.name || 'User'}
                            className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-cyan-400"
                          />
                        )}
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Welcome, {userInfo.name || 'User'}!
                        </h3>
                        <p className="text-gray-300">
                          Your Facebook account is connected successfully.
                        </p>
                        {userInfo.email && (
                          <p className="text-gray-400 text-sm mt-2">
                            {userInfo.email}
                          </p>
                        )}
                      </div>

                      <div className="space-y-4">
                        <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                          <p className="text-green-400 font-semibold">
                            ✓ Account Connected
                          </p>
                          <p className="text-gray-300 text-sm mt-1">
                            You can now use our Facebook integration services.
                          </p>
                        </div>

                        <button
                          onClick={handleLogout}
                          className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                        >
                          Disconnect Facebook Account
                        </button>
                      </div>
                    </div>
                  ) : (
                    // User is not logged in
                    <div className="text-center">
                      <p className="text-gray-300 text-lg mb-8">
                        Authorize our application to access your Facebook account for automated posting and content management.
                      </p>

                      <div className="space-y-6">
                        {/* Facebook's Official Login Button */}
                        <div className="bg-gray-800/50 border border-blue-500/30 rounded-lg p-6">
                          <p className="text-blue-400 font-semibold mb-4">Facebook's Official Login Button:</p>
                          <div className="flex justify-center">
                            <div
                              className="fb-login-button"
                              data-width=""
                              data-size="large"
                              data-button-type="login_with"
                              data-layout="default"
                              data-auto-logout-link="false"
                              data-use-continue-as="false"
                              data-scope="email,public_profile"
                              data-onlogin="checkLoginState"
                            ></div>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="flex items-center">
                          <div className="flex-1 border-t border-gray-600"></div>
                          <span className="px-4 text-gray-400 text-sm">OR</span>
                          <div className="flex-1 border-t border-gray-600"></div>
                        </div>

                        {/* Custom Login Button */}
                        <div className="bg-gray-800/50 border border-cyan-500/30 rounded-lg p-6">
                          <p className="text-cyan-400 font-semibold mb-4">Custom Styled Button:</p>
                          <button
                            onClick={handleCustomLogin}
                            disabled={!isSDKLoaded}
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 flex items-center justify-center"
                          >
                            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            Continue with Facebook
                          </button>
                        </div>

                        {/* Status Info */}
                        {loginStatus !== 'checking' && (
                          <div className="bg-gray-800/30 border border-gray-600/30 rounded-lg p-4">
                            <p className="text-gray-400 text-sm">
                              <strong>Current Status:</strong> {
                                loginStatus === 'not_authorized' 
                                  ? 'Logged into Facebook, but not authorized for this app'
                                  : loginStatus === 'unknown'
                                  ? 'Not logged into Facebook'
                                  : loginStatus
                              }
                            </p>
                          </div>
                        )}
                      </div>

                      <p className="text-gray-400 text-sm mt-8">
                        By connecting your account, you agree to our{" "}
                        <a href="/facebook/privacy-policy" className="text-cyan-400 hover:text-cyan-300 underline">
                          Privacy Policy
                        </a>
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Back to Facebook Project Button */}
          <div className="text-center mt-8">
            <a
              href="/facebook"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
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
              Back to Facebook Project
            </a>
          </div>
        </div>
      </div>
    </>
  );
}