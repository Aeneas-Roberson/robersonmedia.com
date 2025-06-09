import { NextResponse } from 'next/server';

export async function GET() {
  // Return the TikTok verification content
  const verificationContent = 'tiktok-developers-site-verification=hGviuFwE3bJQc6cfDwLmK7EDtKyfFUkV';
  
  return new NextResponse(verificationContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
} 