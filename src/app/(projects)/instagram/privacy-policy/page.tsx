import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Instagram Integration | robersonmedia.com",
  description: "Privacy Policy for Instagram API integration and video posting services",
};

export default function InstagramPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
      {/* Simple background overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Instagram API Integration & Video Posting Services
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-purple-500/30 p-8 space-y-8">
            {/* Effective Date */}
            <div className="text-center pb-6 border-b border-purple-500/20">
              <p className="text-purple-400 font-semibold text-lg">
                Effective Date: Friday, May 30th, 2025
              </p>
            </div>

            {/* Introduction */}
            <section>
              <p className="text-gray-300 text-lg leading-relaxed">
                Roberson Media ("we", "our", or "us") provides Instagram video posting
                and content management services through this application.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                We value your privacy. This Privacy Policy explains how we
                collect, use, and protect your information when using our Instagram integration services.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Information We Collect
              </h2>
              <p className="text-gray-300 mb-4">
                When you use our Instagram integration services, we may collect:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-gray-300 flex items-start">
                  <span className="text-purple-400 mr-3 mt-2">•</span>
                  Your Instagram Business account information (username, user ID, account type)
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-purple-400 mr-3 mt-2">•</span>
                  Access tokens required to post content on your behalf
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-purple-400 mr-3 mt-2">•</span>
                  Video files and captions you choose to upload
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-purple-400 mr-3 mt-2">•</span>
                  Basic usage analytics (upload times, success rates)
                </li>
              </ul>
              <div className="mt-4 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                <p className="text-green-400 font-semibold">
                  We do not collect or store your Instagram password or personal content beyond what's necessary for the service.
                </p>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                How We Use Your Information
              </h2>
              <p className="text-gray-300 mb-4">
                We use the collected information solely to:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-gray-300 flex items-start">
                  <span className="text-purple-400 mr-3 mt-2">•</span>
                  Authenticate your Instagram Business account
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-purple-400 mr-3 mt-2">•</span>
                  Upload videos and content to your Instagram account when requested
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-purple-400 mr-3 mt-2">•</span>
                  Process and manage your content uploads
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-purple-400 mr-3 mt-2">•</span>
                  Provide customer support and troubleshooting
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-purple-400 mr-3 mt-2">•</span>
                  Comply with Instagram API terms and Meta policies
                </li>
              </ul>
              <div className="mt-4 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                <p className="text-blue-400 font-semibold">
                  We do not sell, rent, or share your information with any third parties for marketing purposes.
                </p>
              </div>
            </section>

            {/* Data Storage and Security */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Data Storage and Security
              </h2>
              <ul className="space-y-3 ml-6">
                <li className="text-gray-300 flex items-start">
                  <span className="text-purple-400 mr-3 mt-2">•</span>
                  Access tokens are stored securely and encrypted
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-purple-400 mr-3 mt-2">•</span>
                  Video files are temporarily processed and not permanently stored
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-purple-400 mr-3 mt-2">•</span>
                  All communications use HTTPS encryption
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-purple-400 mr-3 mt-2">•</span>
                  Regular security audits and monitoring
                </li>
              </ul>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Data Retention
              </h2>
              <p className="text-gray-300">
                We retain access tokens and account information only as long as needed to provide the
                service. You may revoke access at any time through your Instagram account settings
                or by disconnecting your account through our platform.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Your Rights
              </h2>
              <p className="text-gray-300 mb-4">You have the right to:</p>
              <ul className="space-y-3 ml-6">
                <li className="text-gray-300 flex items-start">
                  <span className="text-purple-400 mr-3 mt-2">•</span>
                  Access your stored data
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-purple-400 mr-3 mt-2">•</span>
                  Request deletion of your data
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-purple-400 mr-3 mt-2">•</span>
                  Revoke application permissions at any time
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-purple-400 mr-3 mt-2">•</span>
                  Receive a copy of your data in a portable format
                </li>
              </ul>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Third-Party Services
              </h2>
              <p className="text-gray-300">
                Our service integrates with Instagram and Meta's APIs. Your use of our service
                is also subject to Instagram's Terms of Service and Privacy Policy. We may use
                cloud storage services for temporary file processing.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Changes to this Privacy Policy
              </h2>
              <p className="text-gray-300">
                We reserve the right to update this Privacy Policy as needed.
                Changes will be posted on this page with an updated effective date.
                Continued use of our service after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Contact
              </h2>
              <p className="text-gray-300">
                If you have any questions about this Privacy Policy or our data practices, contact us at:{" "}
                <a
                  href="mailto:aivideos@email.com"
                  className="text-purple-400 hover:text-purple-300 underline transition-colors"
                >
                  aivideos@email.com
                </a>
              </p>
            </section>
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
    </div>
  );
} 