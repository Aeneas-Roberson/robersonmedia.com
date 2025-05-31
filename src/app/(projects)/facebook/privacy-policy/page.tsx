// src/app/(projects)/facebook/privacy-policy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Facebook Integration | robersonmedia.com",
  description: "Privacy Policy for Facebook API integration services",
};

export default function FacebookPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Simple background overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Facebook API Integration Services
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-cyan-500/30 p-8 space-y-8">
            {/* Effective Date */}
            <div className="text-center pb-6 border-b border-cyan-500/20">
              <p className="text-cyan-400 font-semibold text-lg">
                Effective Date: Friday, May 30th, 2025
              </p>
            </div>

            {/* Introduction */}
            <section>
              <p className="text-gray-300 text-lg leading-relaxed">
                Roberson Media ("we", "our", or "us") provides an Instagram
                automation service through this application.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                We value your privacy. This Privacy Policy explains how we
                collect, use, and protect your information.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Information We Collect
              </h2>
              <p className="text-gray-300 mb-4">
                When you use this application, we may collect:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-gray-300 flex items-start">
                  <span className="text-cyan-400 mr-3 mt-2">•</span>
                  Your public profile information (Instagram username, user ID)
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-cyan-400 mr-3 mt-2">•</span>
                  Access tokens needed to perform actions on your behalf (such
                  as posting content)
                </li>
              </ul>
              <div className="mt-4 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                <p className="text-green-400 font-semibold">
                  We do not collect or store your Instagram password.
                </p>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                How We Use Your Information
              </h2>
              <p className="text-gray-300 mb-4">
                We use the collected information solely to:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-gray-300 flex items-start">
                  <span className="text-cyan-400 mr-3 mt-2">•</span>
                  Authenticate your account
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-cyan-400 mr-3 mt-2">•</span>
                  Upload content to your Instagram account when requested
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-cyan-400 mr-3 mt-2">•</span>
                  Comply with Instagram API terms and policies
                </li>
              </ul>
              <div className="mt-4 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                <p className="text-blue-400 font-semibold">
                  We do not sell, rent, or share your information with any third
                  parties.
                </p>
              </div>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Data Retention
              </h2>
              <p className="text-gray-300">
                We retain access tokens only as long as needed to provide the
                service. You may revoke access at any time via your Instagram
                account settings.
              </p>
            </section>

            {/* Data Deletion */}
            <section>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Data Deletion
              </h2>
              <p className="text-gray-300">
                You may request deletion of your data by visiting our{" "}
                <a
                  href="/facebook/data-deletion"
                  className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
                >
                  Data Deletion Instructions Page
                </a>
                .
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Changes to this Privacy Policy
              </h2>
              <p className="text-gray-300">
                We reserve the right to update this Privacy Policy as needed.
                Changes will be posted on this page.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Contact
              </h2>
              <p className="text-gray-300">
                If you have any questions, contact us at:{" "}
                <a
                  href="mailto:aivideos@email.com"
                  className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
                >
                  aivideos@email.com
                </a>
              </p>
            </section>
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
    </div>
  );
}