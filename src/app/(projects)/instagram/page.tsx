import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Instagram Integration | robersonmedia.com",
  description: "Instagram API integration and video posting services",
};

export default function InstagramPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
      {/* Simple background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <Image
              src="/logos/Instagram_Glyph_Gradient.png"
              alt="Instagram"
              width={80}
              height={80}
              className="mr-4"
            />
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Instagram
              </span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional video posting and content management for Instagram Business accounts.
            Automated uploads, scheduling, and analytics integration.
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Login Page Card */}
            <a
              href="/instagram/login"
              className="group block p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 transform hover:scale-105 hover:bg-black/40"
            >
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  <svg
                    className="w-7 h-7 text-white"
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
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  Business Login
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  Connect your Instagram Business account for automated video posting.
                </p>
              </div>
            </a>

            {/* Privacy Policy Card */}
            <a
              href="/instagram/privacy-policy"
              className="group block p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 transform hover:scale-105 hover:bg-black/40"
            >
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  <svg
                    className="w-7 h-7 text-white"
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
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  Privacy Policy
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  Learn how we protect your information and data.
                </p>
              </div>
            </a>

            {/* Terms of Service Card */}
            <a
              href="/instagram/terms-of-service"
              className="group block p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 transform hover:scale-105 hover:bg-black/40"
            >
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  <svg
                    className="w-7 h-7 text-white"
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
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  Terms of Service
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  Review our terms and conditions for services.
                </p>
              </div>
            </a>

            {/* Data Deletion Card */}
            <a
              href="/instagram/data-deletion"
              className="group block p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 transform hover:scale-105 hover:bg-black/40"
            >
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  Data Deletion
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  Request deletion of your data and manage information.
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-purple-500/30 p-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Video Upload</h4>
                    <p className="text-gray-400">Automated video posting to Instagram Feed and Stories</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Content Scheduling</h4>
                    <p className="text-gray-400">Schedule posts for optimal engagement times</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Analytics Integration</h4>
                    <p className="text-gray-400">Track performance and engagement metrics</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Webhook Notifications</h4>
                    <p className="text-gray-400">Real-time updates on comments and mentions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-16">
          <a
            href="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
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