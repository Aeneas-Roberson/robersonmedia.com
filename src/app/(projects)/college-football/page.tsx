import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "College Football Analytics | robersonmedia.com",
  description: "Dynamic PostgreSQL-powered analytics platform for College Football data",
};

export default function CollegeFootballPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-yellow-900">
      {/* Simple background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <Image
              src="/logos/college-football-logo.png"
              alt="College Football"
              width={80}
              height={80}
              className="mr-4"
            />
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                College Football
              </span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Dynamic PostgreSQL-powered analytics platform for College Football data
            with flexible visualizations and predictive modeling.
          </p>
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Analytics Dashboard */}
            <div className="group block p-8 bg-black/30 backdrop-blur-sm rounded-xl border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300 transform hover:scale-105 hover:bg-black/40">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center group-hover:from-orange-400 group-hover:to-yellow-400 transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                  Analytics Dashboard
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                  Real-time statistics, team performance metrics, and game analysis
                  with interactive visualizations.
                </p>
              </div>
            </div>

            {/* Predictive Modeling */}
            <div className="group block p-8 bg-black/30 backdrop-blur-sm rounded-xl border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300 transform hover:scale-105 hover:bg-black/40">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center group-hover:from-orange-400 group-hover:to-yellow-400 transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                  Predictive Models
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                  Machine learning algorithms for game outcome predictions and
                  player performance forecasting.
                </p>
              </div>
            </div>

            {/* Data Visualization */}
            <div className="group block p-8 bg-black/30 backdrop-blur-sm rounded-xl border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300 transform hover:scale-105 hover:bg-black/40">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center group-hover:from-orange-400 group-hover:to-yellow-400 transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                  Data Visualization
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                  Interactive charts, graphs, and heat maps for comprehensive
                  data analysis and insights.
                </p>
              </div>
            </div>
          </div>

          {/* Status Section */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-orange-500/30 p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Coming Soon
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              This comprehensive College Football analytics platform is currently in development.
              It will feature advanced PostgreSQL database integration, real-time data processing,
              and machine learning capabilities for predictive analysis.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-800/50 border border-orange-500/30 rounded-lg p-4">
                <h4 className="text-orange-400 font-semibold mb-2">Database Features:</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• PostgreSQL data warehouse</li>
                  <li>• Real-time game statistics</li>
                  <li>• Historical performance data</li>
                  <li>• Player and team metrics</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 border border-yellow-500/30 rounded-lg p-4">
                <h4 className="text-yellow-400 font-semibold mb-2">Analytics Features:</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Predictive modeling</li>
                  <li>• Performance trends</li>
                  <li>• Interactive dashboards</li>
                  <li>• Custom visualizations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-16">
          <a
            href="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold text-lg rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105"
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