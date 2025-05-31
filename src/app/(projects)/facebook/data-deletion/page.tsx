// src/app/(projects)/facebook/data-deletion/page.tsx
"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function DataDeletionContent() {
  const searchParams = useSearchParams();
  const status = searchParams.get('status');
  const deletionId = searchParams.get('id');

  // If there's a success status, show confirmation
  if (status === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Data Deletion Confirmed
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Facebook & Instagram Integration Services
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-green-500/30 p-8 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-4">
                Data Deletion Request Processed
              </h2>
              
              <p className="text-gray-300 mb-6">
                Your Facebook data deletion request has been successfully processed. 
                All associated data has been removed from our systems.
              </p>
              
              {deletionId && (
                <div className="bg-gray-800/50 border border-gray-600/30 rounded-lg p-4 mb-6">
                  <p className="text-gray-400 text-sm">
                    <strong>Confirmation ID:</strong> {deletionId}
                  </p>
                </div>
              )}
              
              <p className="text-gray-400 text-sm">
                If you have any questions about this process, please contact our support team at{' '}
                <a
                  href="mailto:aivideos@email.com"
                  className="text-cyan-400 hover:text-cyan-300 underline"
                >
                  aivideos@email.com
                </a>
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="/facebook"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Facebook Project
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Otherwise show the instructions page
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
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Data Deletion Instructions
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Facebook & Instagram Integration Services
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-cyan-500/30 p-8 space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-gray-300 text-lg leading-relaxed">
                Roberson Media respects your privacy and provides clear instructions for requesting the deletion of your data associated with our Facebook and Instagram integration services.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                If you have previously authorized our application to access your Facebook or Instagram account and you wish to revoke that access or request deletion of any related data, please follow the steps below:
              </p>
            </section>

            {/* Step 1 */}
            <section>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                <span className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</span>
                Revoke App Access via Facebook Settings
              </h2>
              <p className="text-gray-300 mb-4">
                You may remove this application's access to your Facebook account at any time by:
              </p>
              <ol className="space-y-3 ml-6">
                <li className="text-gray-300 flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1 font-bold">1.</span>
                  Going to Facebook Settings → Apps and Websites
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1 font-bold">2.</span>
                  Locating the application "automated api"
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1 font-bold">3.</span>
                  Selecting Remove to revoke the app's access
                </li>
              </ol>
              <div className="mt-4 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                <p className="text-blue-400">
                  Once removed, we will no longer be able to access your account, and all associated access tokens will become invalid.
                </p>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-600 my-8"></div>

            {/* Step 2 */}
            <section>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                <span className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</span>
                Request Data Deletion from Roberson Media
              </h2>
              <p className="text-gray-300 mb-4">
                If you would like to request deletion of any personal data that may have been collected or stored by Roberson Media, please contact us directly at:
              </p>
              <div className="bg-gray-800/50 border border-cyan-500/30 rounded-lg p-6 mb-4">
                <p className="text-cyan-400 font-semibold text-lg mb-2">Email:</p>
                <a
                  href="mailto:aivideos@email.com"
                  className="text-cyan-300 hover:text-cyan-200 underline text-lg transition-colors"
                >
                  aivideos@email.com
                </a>
              </div>
              <p className="text-gray-300 mb-4 font-semibold">Please include:</p>
              <ul className="space-y-3 ml-6">
                <li className="text-gray-300 flex items-start">
                  <span className="text-cyan-400 mr-3 mt-2">•</span>
                  The Facebook or Instagram account username used with our service
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-cyan-400 mr-3 mt-2">•</span>
                  A clear request to delete your data
                </li>
              </ul>
              <div className="mt-4 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                <p className="text-green-400">
                  We will process your request and confirm once the deletion is complete.
                </p>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-600 my-8"></div>

            {/* Step 3 - Automatic Deletion */}
            <section>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                <span className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</span>
                Automatic Data Deletion
              </h2>
              <p className="text-gray-300 mb-4">
                Facebook may also automatically request data deletion on your behalf through their GDPR compliance system. When this happens:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-gray-300 flex items-start">
                  <span className="text-cyan-400 mr-3 mt-2">•</span>
                  We receive an automated deletion request from Facebook
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-cyan-400 mr-3 mt-2">•</span>
                  Your data is immediately purged from our systems
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-cyan-400 mr-3 mt-2">•</span>
                  You will be redirected to a confirmation page with a deletion ID
                </li>
              </ul>
              <div className="mt-4 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
                <p className="text-purple-400">
                  This process is handled automatically and requires no action from you.
                </p>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-600 my-8"></div>

            {/* Notes */}
            <section>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Notes
              </h2>
              <ul className="space-y-3 ml-6">
                <li className="text-gray-300 flex items-start">
                  <span className="text-cyan-400 mr-3 mt-2">•</span>
                  We do not store your Instagram password or personal content
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-cyan-400 mr-3 mt-2">•</span>
                  We only store temporary access tokens and minimal account metadata required to perform the services
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-cyan-400 mr-3 mt-2">•</span>
                  Data is retained only as long as needed to provide services and is deleted upon revocation or request
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-cyan-400 mr-3 mt-2">•</span>
                  All deletion requests are processed within 30 days as required by GDPR
                </li>
              </ul>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-600 my-8"></div>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Contact
              </h2>
              <div className="bg-gray-800/50 border border-cyan-500/30 rounded-lg p-6">
                <p className="text-gray-300 mb-2">
                  For any questions about data deletion or privacy concerns:
                </p>
                <a
                  href="mailto:aivideos@email.com"
                  className="text-cyan-300 hover:text-cyan-200 underline text-lg transition-colors"
                >
                  aivideos@email.com
                </a>
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

export default function FacebookDataDeletion() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
      </div>
    }>
      <DataDeletionContent />
    </Suspense>
  );
}