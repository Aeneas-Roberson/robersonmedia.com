import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roberson Media | Social Media Integration Platform",
  description: "Professional Instagram, Facebook, and TikTok API integration services. Automated video posting, content management, and analytics for businesses.",
  keywords: "Instagram API, Facebook API, TikTok API, social media automation, video posting, content management, Instagram Business, social media integration",
  authors: [{ name: "Roberson Media" }],
  creator: "Roberson Media",
  publisher: "Roberson Media",
  metadataBase: new URL('https://robersonmedia.com'),
  openGraph: {
    title: "Roberson Media | Social Media Integration Platform",
    description: "Professional Instagram, Facebook, and TikTok API integration services for businesses.",
    url: "https://robersonmedia.com",
    siteName: "Roberson Media",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roberson Media | Social Media Integration Platform",
    description: "Professional social media API integration services for businesses.",
    creator: "@robersonmedia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

function Navigation() {
  return (
    <nav className="h-[16.67vh] min-h-[120px] bg-gray-900/95 backdrop-blur-sm border-b border-cyan-500/30 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            robersonmedia.com
          </span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="/"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
          >
            Home
          </a>
          <div className="relative group">
            <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium flex items-center">
              Projects
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800/95 backdrop-blur-sm rounded-lg border border-cyan-500/30 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-2">
                <a
                  href="/instagram"
                  className="block px-4 py-2 text-gray-300 hover:text-purple-400 hover:bg-gray-700/50 transition-colors duration-200"
                >
                  Instagram
                </a>
                <a
                  href="/facebook"
                  className="block px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 transition-colors duration-200"
                >
                  Facebook
                </a>
                <a
                  href="/twitter"
                  className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 transition-colors duration-200"
                >
                  Twitter
                </a>
                <a
                  href="/tiktok"
                  className="block px-4 py-2 text-gray-300 hover:text-pink-400 hover:bg-gray-700/50 transition-colors duration-200"
                >
                  TikTok
                </a>
                <a
                  href="/college-football"
                  className="block px-4 py-2 text-gray-300 hover:text-orange-400 hover:bg-gray-700/50 transition-colors duration-200"
                >
                  College Football
                </a>
              </div>
            </div>
          </div>
          <a
            href="/#projects"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
          >
            Services
          </a>
          <a
            href="/#about"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
          >
            About
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* CTA Button */}
        <div className="hidden lg:flex">
          <a
            href="/#projects"
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
