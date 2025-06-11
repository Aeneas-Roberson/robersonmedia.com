"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function InstagramCallbackContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const code = searchParams.get('code');
    const error = searchParams.get('error');
    const errorDescription = searchParams.get('error_description');

    if (error) {
      console.error('Instagram OAuth error on callback:', error, errorDescription);
      router.push(`/instagram/login?error=${encodeURIComponent(errorDescription || error)}`);
    } else if (code) {
      // The /instagram/login page now handles exchanging the code.
      // We just need to forward the code to it.
      // Or, ideally, this callback calls the /api/instagram/auth directly.
      // For now, let's keep it simple and redirect to login, which has the exchange logic.
      // This is slightly different from Twitter, let's adjust if needed.
      // Actually, let's make this page call the API directly for consistency.
      exchangeCode(code);
    } else {
      // No code and no error, redirect to login
      router.push('/instagram/login?error=unknown_callback_issue');
    }
  }, [searchParams, router]);

  const exchangeCode = async (code: string) => {
    try {
      const response = await fetch('/api/instagram/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();
      
      if (response.ok && data.user) {
        const userData = encodeURIComponent(JSON.stringify(data.user));
        const accessToken = encodeURIComponent(data.access_token);
        // Redirect to login page with success state
        router.push(`/instagram/login?success=true&user=${userData}&token=${accessToken}`);
      } else {
        console.error('Instagram token exchange failed from callback page:', data);
        router.push(`/instagram/login?error=${encodeURIComponent(data.error || 'Token exchange failed')}`);
      }
    } catch (err) {
      console.error('Network error during token exchange from callback:', err);
      router.push('/instagram/login?error=network_error_callback');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-400 mx-auto mb-4"></div>
        <h1 className="text-2xl font-bold text-white mb-2">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Processing Instagram Authorization
          </span>
        </h1>
        <p className="text-gray-300">
          Please wait while we complete your login...
        </p>
      </div>
    </div>
  );
}

export default function InstagramCallback() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400"></div>
      </div>
    }>
      <InstagramCallbackContent />
    </Suspense>
  );
} 