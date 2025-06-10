"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TwitterMain() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to login page
    router.push('/twitter/login');
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-400 mx-auto mb-4"></div>
        <h1 className="text-2xl font-bold text-white mb-2">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Redirecting to Twitter Login
          </span>
        </h1>
        <p className="text-gray-300">
          Please wait...
        </p>
      </div>
    </div>
  );
} 