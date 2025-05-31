// src/app/(projects)/facebook/terms-of-service/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Facebook Integration | robersonmedia.com",
  description: "Terms of Service for Roberson Media Facebook and Instagram integration services",
};

export default function FacebookTermsOfService() {
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
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Terms of Service
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Facebook & Instagram Integration Services
          </p>
          <p className="text-gray-400 mt-2">
            Effective Date: Friday, May 30th, 2025
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-cyan-500/30 p-8 space-y-8">
            
            {/* Introduction */}
            <section>
              <p className="text-gray-300 text-lg leading-relaxed">
                Welcome to Roberson Media. By using our application ("Service"), you agree to the following Terms of Service ("Terms"). Please read them carefully.
              </p>
            </section>

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                <span className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</span>
                Description of Service
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Roberson Media provides an Instagram automation service that allows users to upload and publish content to their Instagram account through the Facebook/Instagram Graph API.
                </p>
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-blue-400 font-semibold">
                    Our service is independent and not affiliated with, endorsed by, or sponsored by Meta Platforms, Inc., Instagram, or Facebook.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                <span className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</span>
                Eligibility
              </h2>
              <div className="text-gray-300">
                <p className="mb-4">You must:</p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-2">•</span>
                    Be at least 13 years old
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-2">•</span>
                    Have a valid Instagram Business or Creator account connected to a Facebook Page
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-2">•</span>
                    Have the necessary rights to the content you upload using our Service
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                <span className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</span>
                User Responsibilities
              </h2>
              <div className="text-gray-300">
                <p className="mb-4">By using our Service, you agree:</p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-2">•</span>
                    To comply with all Facebook, Instagram, and Meta platform policies
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-2">•</span>
                    To provide accurate and lawful content
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-2">•</span>
                    To not use our Service for unlawful, harmful, or abusive purposes
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-2">•</span>
                    To maintain the security of your access tokens and account
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                <span className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</span>
                Data Usage
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We collect and use data as described in our{' '}
                  <a 
                    href="/facebook/privacy-policy" 
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    Privacy Policy
                  </a>.
                </p>
                <div className="bg-gray-800/50 border border-gray-600/30 rounded-lg p-4 space-y-2">
                  <p className="text-green-400">
                    ✓ We do not store your Instagram password.
                  </p>
                  <p className="text-blue-400">
                    ✓ We only store data required to perform the service (such as access tokens and minimal account metadata).
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                <span className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">5</span>
                Content Ownership
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  You retain all ownership rights to any content you upload through our Service.
                </p>
                <p>
                  By using the Service, you grant us permission to transmit, process, and publish that content to your connected Instagram account.
                </p>
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <p className="text-green-400 font-semibold">
                    We do not claim ownership of your content.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                <span className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">6</span>
                Termination
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  You may stop using the Service at any time.
                </p>
                <p>We reserve the right to suspend or terminate access if:</p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-2">•</span>
                    You violate these Terms
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-2">•</span>
                    Your use violates Facebook or Instagram's policies
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-2">•</span>
                    Required permissions are revoked
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                <span className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">7</span>
                Limitation of Liability
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Our Service is provided "as is" without warranties of any kind.
                </p>
                <p>We are not responsible for:</p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-2">•</span>
                    Loss of data
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-2">•</span>
                    Service interruptions
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-2">•</span>
                    Actions taken by Facebook, Instagram, or Meta related to your account
                  </li>
                </ul>
                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                  <p className="text-yellow-400 font-semibold">
                    Use of the Service is at your own risk.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                <span className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">8</span>
                Changes to the Terms
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We may update these Terms occasionally. Changes will be posted on this page.
                </p>
                <p>
                  By continuing to use the Service after changes are posted, you agree to the revised Terms.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                <span className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">9</span>
                Contact
              </h2>
              <div className="text-gray-300">
                <p className="mb-4">
                  If you have questions about these Terms, please contact:
                </p>
                <div className="bg-gray-800/50 border border-cyan-500/30 rounded-lg p-6">
                  <p className="text-cyan-400 font-semibold text-lg mb-2">Email:</p>
                  <a
                    href="mailto:aivideos@email.com"
                    className="text-cyan-300 hover:text-cyan-200 underline text-lg transition-colors"
                  >
                    aivideos@email.com
                  </a>
                </div>
              </div>
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