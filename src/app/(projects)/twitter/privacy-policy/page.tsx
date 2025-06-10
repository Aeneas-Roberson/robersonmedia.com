export default function TwitterPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Twitter Privacy Policy
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            How we handle your Twitter data and privacy
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-cyan-500/30 p-8">
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg mb-8">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">1. Information We Collect</h2>
                <div className="text-gray-300 space-y-4">
                  <p>When you connect your Twitter account to our service, we collect:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Your Twitter user ID, username, and display name</li>
                    <li>Your profile picture and bio information</li>
                    <li>Public metrics (follower count, following count, etc.)</li>
                    <li>Authorization tokens to access Twitter on your behalf</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">2. How We Use Your Information</h2>
                <div className="text-gray-300 space-y-4">
                  <p>We use your Twitter data to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Authenticate and authorize your account</li>
                    <li>Display your profile information in our application</li>
                    <li>Post content to Twitter on your behalf (when authorized)</li>
                    <li>Provide analytics and insights about your Twitter activity</li>
                    <li>Improve our service and user experience</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">3. Data Storage and Security</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We implement industry-standard security measures to protect your data:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Encrypted storage of access tokens</li>
                    <li>Secure transmission using HTTPS</li>
                    <li>Limited access to authorized personnel only</li>
                    <li>Regular security audits and updates</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">4. Data Sharing</h2>
                <div className="text-gray-300 space-y-4">
                  <p>We do not sell, trade, or share your Twitter data with third parties except:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>When required by law or legal process</li>
                    <li>To protect our rights, property, or safety</li>
                    <li>With your explicit consent</li>
                    <li>With service providers who assist in our operations (under strict confidentiality)</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">5. Your Rights and Choices</h2>
                <div className="text-gray-300 space-y-4">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Revoke access to your Twitter account at any time</li>
                    <li>Request deletion of your data from our systems</li>
                    <li>Access and review the data we have about you</li>
                    <li>Update or correct your information</li>
                    <li>Opt out of non-essential data collection</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">6. Data Retention</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We retain your Twitter data only as long as necessary to provide our services or as required by law. 
                    When you disconnect your account, we will delete your access tokens and remove your data according 
                    to our retention schedule.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">7. Twitter's Privacy Policy</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    This policy is in addition to Twitter's own Privacy Policy. Please also review Twitter's privacy 
                    practices at <a href="https://twitter.com/privacy" className="text-cyan-400 hover:text-cyan-300 underline">
                    https://twitter.com/privacy</a>
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">8. Changes to This Policy</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We may update this privacy policy from time to time. We will notify you of any material changes 
                    by posting the new policy on this page and updating the "Last Updated" date.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">9. Contact Us</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    If you have any questions about this Privacy Policy or our data practices, please contact us at:
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                    <p><strong>Email:</strong> privacy@robersonmedia.com</p>
                    <p><strong>Website:</strong> https://robersonmedia.com</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <a
            href="/twitter/login"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            ← Back to Twitter Login
          </a>
        </div>
      </div>
    </div>
  );
} 