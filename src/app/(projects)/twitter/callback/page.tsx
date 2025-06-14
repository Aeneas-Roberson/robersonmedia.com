"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function TwitterCallbackContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const handleCallback = async () => {
      const code = searchParams.get('code');
      const error = searchParams.get('error');
      const errorDescription = searchParams.get('error_description');
      const state = searchParams.get('state');

      console.log('Callback received:', { code: !!code, error, errorDescription, state });

      // Verify state parameter for security
      const storedState = sessionStorage.getItem('twitter_oauth_state');
      console.log('State verification:', { received: state, stored: storedState, match: state === storedState });
      
      if (state !== storedState) {
        console.error('Invalid state parameter - possible CSRF attack');
        router.push('/twitter/login?error=invalid_state');
        return;
      }

      // Clean up stored state
      sessionStorage.removeItem('twitter_oauth_state');

      if (error) {
        console.error('Twitter OAuth error:', error, errorDescription);
        const errorMsg = errorDescription || error;
        router.push(`/twitter/login?error=${encodeURIComponent(errorMsg)}`);
        return;
      }

      if (!code) {
        console.error('No authorization code received from Twitter');
        router.push('/twitter/login?error=no_authorization_code');
        return;
      }

      try {
        const codeVerifier = sessionStorage.getItem('twitter_code_verifier');
        console.log('Code verifier retrieved:', !!codeVerifier);
        
        if (!codeVerifier) {
          console.error('No code verifier found in session storage');
          router.push('/twitter/login?error=missing_code_verifier');
          return;
        }
        
        console.log('Exchanging code for token...');
        
        // Exchange code for token
        const response = await fetch('/api/twitter/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            code: code,
            code_verifier: codeVerifier
          }),
        });

        const data = await response.json();
        console.log('Token exchange response:', { 
          ok: response.ok, 
          status: response.status,
          hasUser: !!data.user,
          hasToken: !!data.access_token,
          error: data.error 
        });

        if (response.ok && data.user) {
          // Success - redirect to login page with user data
          const userData = encodeURIComponent(JSON.stringify(data.user));
          const accessToken = encodeURIComponent(data.access_token);
          router.push(`/twitter/login?success=true&user=${userData}&token=${accessToken}`);
        } else {
          console.error('Token exchange failed:', data);
          const errorMsg = data.error || `Token exchange failed with status ${response.status}`;
          router.push(`/twitter/login?error=${encodeURIComponent(errorMsg)}`);
        }
      } catch (err) {
        console.error('Network error during token exchange:', err);
        router.push('/twitter/login?error=network_error');
      } finally {
        // Clean up code verifier
        sessionStorage.removeItem('twitter_code_verifier');
      }
    };

    handleCallback();
  }, [searchParams, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-400 mx-auto mb-4"></div>
        <h1 className="text-2xl font-bold text-white mb-2">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Processing Twitter Authorization
          </span>
        </h1>
        <p className="text-gray-300">
          Please wait while we complete your login...
        </p>
      </div>
    </div>
  );
}

export default function TwitterCallback() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-400"></div>
      </div>
    }>
      <TwitterCallbackContent />
    </Suspense>
  );
} 