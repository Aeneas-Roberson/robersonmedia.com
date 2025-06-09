import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - TikTok Integration | robersonmedia.com",
  description: "Privacy Policy for Roberson Media TikTok integration and content management services",
};

export default function TikTokPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-pink-900 to-red-900">
      {/* Simple background overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-red-500/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            TikTok Integration & Content Management Services
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-pink-500/30 p-8 space-y-8">
            {/* Effective Date */}
            <div className="text-center pb-6 border-b border-pink-500/20">
              <p className="text-pink-400 font-semibold text-lg">
                Effective Date: Friday, May 30th, 2025
              </p>
            </div>

            {/* Introduction */}
            <section>
              <p className="text-gray-300 text-lg leading-relaxed">
                Roberson Media ("we", "our", or "us") provides TikTok content management
                and integration services through this application.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                We value your privacy. This Privacy Policy explains how we
                collect, use, and protect your information when using our TikTok integration services.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-pink-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                Information We Collect
              </h2>
              <p className="text-gray-300 mb-4">
                When you use our TikTok integration services, we may collect:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  Your TikTok account information (username, user ID, display name)
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  Access tokens required to interact with your TikTok account
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  Public profile data and video metadata as authorized by you
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  Usage analytics to improve our service quality
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  Device information and IP address for security purposes
                </li>
              </ul>
              <div className="mt-4 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                <p className="text-green-400 font-semibold">
                  We do not collect or store your TikTok password or access your private content without explicit authorization.
                </p>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-bold text-pink-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                How We Use Your Information
              </h2>
              <p className="text-gray-300 mb-4">
                We use the collected information solely to:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  Authenticate your TikTok account and verify your identity
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  Provide content management and analytics services
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  Monitor and analyze your content performance as requested
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  Provide customer support and troubleshooting
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  Comply with TikTok API terms and legal requirements
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  Improve our service functionality and user experience
                </li>
              </ul>
              <div className="mt-4 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                <p className="text-blue-400 font-semibold">
                  We do not sell, rent, or share your information with third parties for marketing purposes.
                </p>
              </div>
            </section>

            {/* Data Storage and Security */}
            <section>
              <h2 className="text-2xl font-bold text-pink-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                Data Storage and Security
              </h2>
              <ul className="space-y-3 ml-6">
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  Access tokens are stored securely and encrypted at rest
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  All communications use HTTPS/TLS encryption
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  Data is processed in secure, SOC 2 compliant environments
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  Regular security audits and monitoring
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  Access controls and authentication requirements for our staff
                </li>
              </ul>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-bold text-pink-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                Data Retention
              </h2>
              <p className="text-gray-300 mb-4">
                We retain your data only as long as necessary to provide our services:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  Access tokens: Until you revoke authorization or deactivate your account
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  Analytics data: Up to 24 months for performance insights
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  Account information: Until you request deletion or deactivate your account
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  Log data: Up to 12 months for security and troubleshooting purposes
                </li>
              </ul>
            </section>

            {/* Your Rights and Controls */}
            <section>
              <h2 className="text-2xl font-bold text-pink-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                Your Rights and Controls
              </h2>
              <p className="text-gray-300 mb-4">You have the right to:</p>
              <ul className="space-y-3 ml-6">
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  Access your stored data and download a copy
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  Request correction of inaccurate information
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  Request deletion of your data (subject to legal requirements)
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  Revoke application permissions at any time through TikTok settings
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  Object to certain data processing activities
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  Receive your data in a portable format
                </li>
              </ul>
            </section>

            {/* Data Subject Requests */}
            <section>
              <h2 className="text-2xl font-bold text-pink-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                Data Subject Requests
              </h2>
              <p className="text-gray-300 mb-4">
                To exercise your rights or request data deletion, please contact us:
              </p>
              <div className="bg-gray-800/50 border border-pink-500/30 rounded-lg p-6 mb-4">
                <p className="text-pink-400 font-semibold text-lg mb-2">Email:</p>
                <a
                  href="mailto:aivideos@email.com"
                  className="text-pink-300 hover:text-pink-200 underline text-lg transition-colors"
                >
                  aivideos@email.com
                </a>
              </div>
              <p className="text-gray-300 mb-4 font-semibold">Please include:</p>
              <ul className="space-y-3 ml-6">
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  Your TikTok username used with our service
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  A clear description of your request
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  Verification of your identity (for security purposes)
                </li>
              </ul>
              <div className="mt-4 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                <p className="text-green-400">
                  We will respond to your request within 30 days as required by applicable privacy laws.
                </p>
              </div>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-bold text-pink-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                Third-Party Services
              </h2>
              <p className="text-gray-300 mb-4">
                Our service integrates with TikTok's APIs and may use third-party services for:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  Analytics and performance monitoring
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  Error tracking and service improvement
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  Cloud hosting and data storage
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-pink-400 mr-3 mt-2">•</span>
                  Customer support and communication
                </li>
              </ul>
              <p className="text-gray-300 mt-4">
                Your use of our service is also subject to TikTok's Privacy Policy and Terms of Service.
                We ensure that all third-party services comply with appropriate data protection standards.
              </p>
            </section>

            {/* International Data Transfers */}
            <section>
              <h2 className="text-2xl font-bold text-pink-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                International Data Transfers
              </h2>
              <p className="text-gray-300">
                Your data may be transferred to and processed in countries other than your own.
                We ensure appropriate safeguards are in place for any international transfers,
                including standard contractual clauses and adequacy decisions where applicable.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-pink-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                Children's Privacy
              </h2>
              <p className="text-gray-300">
                Our service is not directed to children under 13. We do not knowingly collect
                personal information from children under 13. If you become aware that a child
                has provided us with personal information, please contact us so we can take
                appropriate action.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section>
              <h2 className="text-2xl font-bold text-pink-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                Changes to this Privacy Policy
              </h2>
              <p className="text-gray-300">
                We reserve the right to update this Privacy Policy as needed to reflect
                changes in our service, legal requirements, or industry standards.
                Material changes will be communicated through our platform or via email.
                Continued use of our service after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-pink-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                Contact
              </h2>
              <p className="text-gray-300">
                If you have any questions about this Privacy Policy or our data practices, contact us at:{" "}
                <a
                  href="mailto:aivideos@email.com"
                  className="text-pink-400 hover:text-pink-300 underline transition-colors"
                >
                  aivideos@email.com
                </a>
              </p>
              <p className="text-gray-300 mt-4">
                For EU residents: If you have concerns about our data processing that we cannot resolve,
                you have the right to lodge a complaint with your local data protection authority.
              </p>
            </section>
          </div>

          {/* Back to TikTok Project Button */}
          <div className="text-center mt-8">
            <a
              href="/tiktok"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
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
              Back to TikTok Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 