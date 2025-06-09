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
        {children}
      </body>
    </html>
  );
}
