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

      // Verify state parameter for security
      if (state !== 'tiktok_login') {
        console.error('Invalid state parameter');
        router.push('/tiktok/login?error=invalid_state');
        return;
      }

      if (error) {
        console.error('TikTok OAuth error:', error, errorDescription);
        router.push(`/tiktok/login?error=${encodeURIComponent(errorDescription || error)}`);
        return;
      }

      if (code) {
        try {
          const response = await fetch('/api/tiktok/auth', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code }),
          });

          const data = await response.json();

          if (response.ok) {
            // Success - redirect to login page with success data
            const userData = encodeURIComponent(JSON.stringify(data.user));
            router.push(`/tiktok/login?success=true&user=${userData}`);
          } else {
            // Error - redirect to login page with error
            router.push(`/tiktok/login?error=${encodeURIComponent(data.error || 'Authentication failed')}`);
          }
        } catch (err) {
          console.error('Network error during token exchange:', err);
          router.push('/tiktok/login?error=network_error');
        }
      } else {
        // No code parameter - redirect to login
        router.push('/tiktok/login?error=no_authorization_code');
      }
    };

    handleCallback();
  }, [searchParams, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-pink-900 to-red-900 flex items-center justify-center">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-red-500/20"></div>
      </div>

      <div className="relative z-10 text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-pink-400 mx-auto mb-6"></div>
        <h1 className="text-2xl font-bold text-white mb-2">
          Processing TikTok Authentication
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
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-pink-400"></div>
      </div>
    }>
      <TikTokCallbackContent />
    </Suspense>
  );
} 