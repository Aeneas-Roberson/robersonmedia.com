import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - TikTok Integration | robersonmedia.com",
  description: "Terms of Service for Roberson Media TikTok integration and content management services",
};

export default function TikTokTermsOfService() {
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
              Terms of Service
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            TikTok Integration & Content Management Services
          </p>
          <p className="text-gray-400 mt-2">
            Effective Date: Friday, May 30th, 2025
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-pink-500/30 p-8 space-y-8">
            
            {/* Introduction */}
            <section>
              <p className="text-gray-300 text-lg leading-relaxed">
                Welcome to Roberson Media's TikTok integration services. By using our application ("Service"), you agree to the following Terms of Service ("Terms"). Please read them carefully.
              </p>
            </section>

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-pink-400 mb-4 flex items-center">
                <span className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</span>
                Description of Service
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Roberson Media provides TikTok content management and integration services that allow users to connect their TikTok accounts, analyze content performance, and manage their TikTok presence through our platform.
                </p>
                <div className="bg-pink-900/20 border border-pink-500/30 rounded-lg p-4">
                  <p className="text-pink-400 font-semibold">
                    Our service is independent and not affiliated with, endorsed by, or sponsored by TikTok Pte. Ltd. or ByteDance Ltd.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-pink-400 mb-4 flex items-center">
                <span className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</span>
                Eligibility and Requirements
              </h2>
              <div className="text-gray-300">
                <p className="mb-4">To use our service, you must:</p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3 mt-2">•</span>
                    Be at least 13 years old (or the minimum age in your jurisdiction)
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3 mt-2">•</span>
                    Have a valid TikTok account in good standing
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3 mt-2">•</span>
                    Comply with TikTok's Terms of Service and Community Guidelines
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3 mt-2">•</span>
                    Have the necessary rights to all content you manage through our service
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3 mt-2">•</span>
                    Provide accurate account information
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-pink-400 mb-4 flex items-center">
                <span className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</span>
                Acceptable Use
              </h2>
              <div className="text-gray-300">
                <p className="mb-4">You agree to use our Service responsibly and:</p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3 mt-2">•</span>
                    Only access TikTok accounts you own or have explicit permission to manage
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3 mt-2">•</span>
                    Not use the service to violate TikTok's Community Guidelines or Terms of Service
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3 mt-2">•</span>
                    Not use the service for spam, harassment, or illegal activities
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3 mt-2">•</span>
                    Respect intellectual property rights and content ownership
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3 mt-2">•</span>
                    Not attempt to circumvent service limitations or security measures
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-pink-400 mb-4 flex items-center">
                <span className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</span>
                Data and Privacy
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Your privacy is important to us. Our data collection and usage practices are described in our{' '}
                  <a 
                    href="/tiktok/privacy-policy" 
                    className="text-pink-400 hover:text-pink-300 underline"
                  >
                    Privacy Policy
                  </a>.
                </p>
                <div className="bg-gray-800/50 border border-gray-600/30 rounded-lg p-4 space-y-2">
                  <p className="text-green-400">
                    ✓ We do not store your TikTok password
                  </p>
                  <p className="text-blue-400">
                    ✓ We only access data you explicitly authorize
                  </p>
                  <p className="text-pink-400">
                    ✓ Access tokens are encrypted and securely stored
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-pink-400 mb-4 flex items-center">
                <span className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">5</span>
                Service Availability and Limitations
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>Our Service is subject to:</p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3 mt-2">•</span>
                    TikTok API rate limits and restrictions
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3 mt-2">•</span>
                    Periodic maintenance and updates
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3 mt-2">•</span>
                    Changes to TikTok's API or policies
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3 mt-2">•</span>
                    Content and feature limitations imposed by TikTok
                  </li>
                </ul>
                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                  <p className="text-yellow-400 font-semibold">
                    We strive for reliable service but cannot guarantee uninterrupted availability.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-pink-400 mb-4 flex items-center">
                <span className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">6</span>
                Account Termination
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>You may discontinue using the Service at any time by:</p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3 mt-2">•</span>
                    Disconnecting your TikTok account from our platform
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3 mt-2">•</span>
                    Revoking app permissions in your TikTok settings
                  </li>
                </ul>
                <p>We may suspend or terminate access if:</p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3 mt-2">•</span>
                    You violate these Terms or TikTok's policies
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3 mt-2">•</span>
                    Your TikTok account is suspended or terminated
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3 mt-2">•</span>
                    We detect fraudulent or abusive activity
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-pink-400 mb-4 flex items-center">
                <span className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">7</span>
                Disclaimers and Limitation of Liability
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Our Service is provided "as is" without warranties of any kind, express or implied.
                </p>
                <p>We are not responsible for:</p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3 mt-2">•</span>
                    Actions taken by TikTok regarding your account
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3 mt-2">•</span>
                    Changes to TikTok's API, features, or policies
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3 mt-2">•</span>
                    Service interruptions or downtime
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3 mt-2">•</span>
                    Loss of data or content
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3 mt-2">•</span>
                    Third-party integrations or services
                  </li>
                </ul>
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                  <p className="text-red-400 font-semibold">
                    Use of the Service is at your own risk. TikTok's terms and policies apply to your use of the TikTok platform.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-pink-400 mb-4 flex items-center">
                <span className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">8</span>
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

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-bold text-pink-400 mb-4 flex items-center">
                <span className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">9</span>
                Contact Information
              </h2>
              <div className="text-gray-300">
                <p className="mb-4">
                  If you have questions about these Terms or our Service, please contact:
                </p>
                <div className="bg-gray-800/50 border border-pink-500/30 rounded-lg p-6">
                  <p className="text-pink-400 font-semibold text-lg mb-2">Email:</p>
                  <a
                    href="mailto:aivideos@email.com"
                    className="text-pink-300 hover:text-pink-200 underline text-lg transition-colors"
                  >
                    aivideos@email.com
                  </a>
                </div>
              </div>
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