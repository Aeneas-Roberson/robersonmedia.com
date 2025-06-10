export default function TwitterTermsOfService() {
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
              Twitter Terms of Service
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Terms and conditions for using our Twitter integration
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-cyan-500/30 p-8">
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg mb-8">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">1. Acceptance of Terms</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    By accessing and using our Twitter integration service, you accept and agree to be bound by the terms 
                    and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">2. Service Description</h2>
                <div className="text-gray-300 space-y-4">
                  <p>Our Twitter integration service provides:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>OAuth 2.0 authentication with Twitter</li>
                    <li>Secure access to your Twitter account data</li>
                    <li>API integration for posting and managing content</li>
                    <li>Analytics and insights dashboard</li>
                    <li>Automated content management tools</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">3. User Obligations</h2>
                <div className="text-gray-300 space-y-4">
                  <p>You agree to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide accurate and complete information when creating an account</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Comply with Twitter's Terms of Service and Developer Agreement</li>
                    <li>Not use the service for any unlawful or prohibited activities</li>
                    <li>Not attempt to reverse engineer or compromise our systems</li>
                    <li>Respect rate limits and usage guidelines</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">4. Twitter Integration</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Our service integrates with Twitter's API and is subject to Twitter's terms and policies. 
                    You acknowledge that:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Twitter may change their API or policies at any time</li>
                    <li>Service availability depends on Twitter's platform availability</li>
                    <li>You must comply with Twitter's Developer Agreement</li>
                    <li>Twitter content is subject to Twitter's terms and copyright policies</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">5. Data Usage and Privacy</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Your use of this service is also governed by our Privacy Policy. By using this service, 
                    you consent to the collection and use of your information as described in our Privacy Policy.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">6. Prohibited Uses</h2>
                <div className="text-gray-300 space-y-4">
                  <p>You may not use our service to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Post spam, malicious content, or misinformation</li>
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe on intellectual property rights</li>
                    <li>Harass, abuse, or harm other users</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Distribute malware or harmful code</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">7. Service Availability</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We strive to maintain high service availability, but we do not guarantee uninterrupted service. 
                    We reserve the right to modify, suspend, or discontinue the service at any time with or without notice.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">8. Limitation of Liability</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    To the fullest extent permitted by law, Roberson Media shall not be liable for any indirect, 
                    incidental, special, consequential, or punitive damages, or any loss of profits or revenues, 
                    whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">9. Account Termination</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We reserve the right to terminate or suspend your account at any time for violations of these terms. 
                    You may also terminate your account at any time by disconnecting your Twitter authorization.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">10. Changes to Terms</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon 
                    posting to this page. Your continued use of the service after changes constitutes acceptance of the new terms.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">11. Contact Information</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    If you have any questions about these Terms of Service, please contact us at:
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                    <p><strong>Email:</strong> legal@robersonmedia.com</p>
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