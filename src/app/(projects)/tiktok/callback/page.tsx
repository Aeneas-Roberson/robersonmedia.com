"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function TikTokCallbackContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const handleCallback = async () => {
      const code = searchParams.get('code');
      const error = searchParams.get('error');
      const errorDescription = searchParams.get('error_description');
      const state = searchParams.get('state');

      // Verify state parameter for security (web app - no PKCE)
      const storedState = sessionStorage.getItem('tiktok_oauth_state');
      if (state !== storedState) {
        console.error('Invalid state parameter');
        router.push('/tiktok/login?error=invalid_state');
        return;
      }

      // Clean up stored state
      sessionStorage.removeItem('tiktok_oauth_state');

      if (error) {
        console.error('TikTok OAuth error:', error, errorDescription);
        router.push(`/tiktok/login?error=${encodeURIComponent(errorDescription || error)}`);
        return;
      }

      if (!code) {
        console.error('No authorization code received');
        router.push('/tiktok/login?error=no_authorization_code');
        return;
      }

      try {
        // Exchange code for token (no code_verifier needed for web apps)
        const response = await fetch('/api/tiktok/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            code: code
            // Note: No code_verifier for web apps
          }),
        });

        const data = await response.json();

        if (response.ok && data.user) {
          // Success - redirect to login page with user data
          const userData = encodeURIComponent(JSON.stringify(data.user));
          router.push(`/tiktok/login?success=true&user=${userData}`);
        } else {
          console.error('Token exchange failed:', data);
          router.push(`/tiktok/login?error=${encodeURIComponent(data.error || 'Token exchange failed')}`);
        }
      } catch (err) {
        console.error('Network error during token exchange:', err);
        router.push('/tiktok/login?error=network_error');
      }
    };

    handleCallback();
  }, [searchParams, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-pink-900 to-red-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-pink-400 mx-auto mb-4"></div>
        <h1 className="text-2xl font-bold text-white mb-2">
          <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
            Processing TikTok Authorization
          </span>
        </h1>
        <p className="text-gray-300">
          Please wait while we complete your login...
        </p>
      </div>
    </div>
  );
}

export default function TikTokCallback() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-pink-900 to-red-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-pink-400"></div>
      </div>
    }>
      <TikTokCallbackContent />
    </Suspense>
  );
} 