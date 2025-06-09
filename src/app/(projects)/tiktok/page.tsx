import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "TikTok Integration | robersonmedia.com",
  description: "TikTok API integration and compliance pages",
};

export default function TikTokPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-pink-900 to-red-900">
      {/* Simple background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-red-500/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <Image
              src="/logos/TikTok_Icon_Black_Square.png"
              alt="TikTok"
              width={80}
              height={80}
              className="mr-4"
            />
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                TikTok
              </span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            TikTok API integration platform with comprehensive compliance pages.
            Access login functionality, privacy policies, and terms of service.
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Login Page Card */}
            <a
              href="/tiktok/login"
              className="group block p-8 bg-black/30 backdrop-blur-sm rounded-xl border border-pink-500/30 hover:border-pink-400/60 transition-all duration-300 transform hover:scale-105 hover:bg-black/40"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center group-hover:from-pink-400 group-hover:to-red-400 transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">
                  Login
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                  Access TikTok authentication and login functionality for API
                  integration services.
                </p>
              </div>
            </a>

            {/* Privacy Policy Card */}
            <a
              href="/tiktok/privacy-policy"
              className="group block p-8 bg-black/30 backdrop-blur-sm rounded-xl border border-pink-500/30 hover:border-pink-400/60 transition-all duration-300 transform hover:scale-105 hover:bg-black/40"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center group-hover:from-pink-400 group-hover:to-red-400 transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">
                  Privacy Policy
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                  Learn how we collect, use, and protect your information when
                  using our TikTok integration services.
                </p>
              </div>
            </a>

            {/* Terms of Service Card */}
            <a
              href="/tiktok/terms-of-service"
              className="group block p-8 bg-black/30 backdrop-blur-sm rounded-xl border border-pink-500/30 hover:border-pink-400/60 transition-all duration-300 transform hover:scale-105 hover:bg-black/40"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center group-hover:from-pink-400 group-hover:to-red-400 transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">
                  Terms of Service
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                  Review our terms and conditions for TikTok integration
                  services and API usage.
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-16">
          <a
            href="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold text-lg rounded-lg hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
          >
            <svg
              className="w-6 h-6 mr-3"
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
            Back to All Projects
          </a>
        </div>
      </div>
    </div>
  );
} 