import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Instagram Integration | robersonmedia.com",
  description: "Terms of Service for Roberson Media Instagram integration and video posting services",
};

export default function InstagramTermsOfService() {
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
              Terms of Service
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Instagram Integration & Video Posting Services
          </p>
          <p className="text-gray-400 mt-2">
            Effective Date: Friday, May 30th, 2025
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-purple-500/30 p-8 space-y-8">
            
            {/* Introduction */}
            <section>
              <p className="text-gray-300 text-lg leading-relaxed">
                Welcome to Roberson Media's Instagram integration services. By using our application ("Service"), you agree to the following Terms of Service ("Terms"). Please read them carefully.
              </p>
            </section>

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</span>
                Description of Service
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Roberson Media provides Instagram video posting and content management services that allow users to upload and publish videos to their Instagram Business accounts through the Instagram Graph API.
                </p>
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                  <p className="text-purple-400 font-semibold">
                    Our service is independent and not affiliated with, endorsed by, or sponsored by Meta Platforms, Inc. or Instagram.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</span>
                Eligibility and Requirements
              </h2>
              <div className="text-gray-300">
                <p className="mb-4">To use our service, you must:</p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-2">•</span>
                    Be at least 13 years old (or the minimum age in your jurisdiction)
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-2">•</span>
                    Have a valid Instagram Business or Creator account
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-2">•</span>
                    Comply with Instagram's Terms of Service and Community Guidelines
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-2">•</span>
                    Have the necessary rights to all content you upload
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-2">•</span>
                    Provide accurate account information
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</span>
                Acceptable Use
              </h2>
              <div className="text-gray-300">
                <p className="mb-4">You agree to use our Service responsibly and:</p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-2">•</span>
                    Only upload content you own or have permission to use
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-2">•</span>
                    Not upload content that violates Instagram's Community Guidelines
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-2">•</span>
                    Not use the service for spam, harassment, or illegal activities
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-2">•</span>
                    Respect intellectual property rights
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-2">•</span>
                    Not attempt to circumvent service limitations or security measures
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</span>
                Content and Intellectual Property
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  You retain full ownership of all content you upload through our Service.
                </p>
                <p>
                  By using the Service, you grant us a limited license to process, transmit, and publish your content to your connected Instagram account as requested by you.
                </p>
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <p className="text-green-400 font-semibold">
                    We do not claim ownership of your content and will not use it for any purpose other than providing the Service.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">5</span>
                Privacy and Data Protection
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Your privacy is important to us. Our data collection and usage practices are described in our{' '}
                  <a 
                    href="/instagram/privacy-policy" 
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Privacy Policy
                  </a>.
                </p>
                <div className="bg-gray-800/50 border border-gray-600/30 rounded-lg p-4 space-y-2">
                  <p className="text-green-400">
                    ✓ We do not store your Instagram password
                  </p>
                  <p className="text-blue-400">
                    ✓ Video files are processed temporarily and not permanently stored
                  </p>
                  <p className="text-purple-400">
                    ✓ Access tokens are encrypted and securely stored
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">6</span>
                Service Availability and Limitations
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>Our Service is subject to:</p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-2">•</span>
                    Instagram API rate limits and restrictions
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-2">•</span>
                    Video file size and format limitations
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-2">•</span>
                    Periodic maintenance and updates
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-2">•</span>
                    Changes to Instagram's API or policies
                  </li>
                </ul>
                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                  <p className="text-yellow-400 font-semibold">
                    We strive for 99% uptime but cannot guarantee uninterrupted service availability.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">7</span>
                Account Termination
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>You may discontinue using the Service at any time by:</p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-2">•</span>
                    Disconnecting your Instagram account from our platform
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-2">•</span>
                    Revoking app permissions in your Instagram settings
                  </li>
                </ul>
                <p>We may suspend or terminate access if:</p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-2">•</span>
                    You violate these Terms or Instagram's policies
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-2">•</span>
                    Your account is suspended by Instagram
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-2">•</span>
                    We detect fraudulent or abusive activity
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">8</span>
                Disclaimers and Limitation of Liability
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Our Service is provided "as is" without warranties of any kind, express or implied.
                </p>
                <p>We are not responsible for:</p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-2">•</span>
                    Loss of data or content
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-2">•</span>
                    Actions taken by Instagram regarding your account
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-2">•</span>
                    Changes to Instagram's API or policies
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-2">•</span>
                    Service interruptions or downtime
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-2">•</span>
                    Third-party integrations or services
                  </li>
                </ul>
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                  <p className="text-red-400 font-semibold">
                    Use of the Service is at your own risk. We recommend backing up important content.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">9</span>
                Changes to Terms
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We may update these Terms occasionally to reflect changes in our Service or legal requirements.
                </p>
                <p>
                  Material changes will be communicated through our platform or via email. Continued use of the Service after changes constitutes acceptance of the revised Terms.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">10</span>
                Contact Information
              </h2>
              <div className="text-gray-300">
                <p className="mb-4">
                  If you have questions about these Terms or our Service, please contact:
                </p>
                <div className="bg-gray-800/50 border border-purple-500/30 rounded-lg p-6">
                  <p className="text-purple-400 font-semibold text-lg mb-2">Email:</p>
                  <a
                    href="mailto:aivideos@email.com"
                    className="text-purple-300 hover:text-purple-200 underline text-lg transition-colors"
                  >
                    aivideos@email.com
                  </a>
                </div>
              </div>
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