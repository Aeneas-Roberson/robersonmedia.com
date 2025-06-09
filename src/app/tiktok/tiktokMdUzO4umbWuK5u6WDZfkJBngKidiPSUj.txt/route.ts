import { NextResponse } from 'next/server';

export async function GET() {
  // Return the TikTok verification content
  const verificationContent = 'tiktok-developers-site-verification=MdUzO4umbWuK5u6WDZfkJBngKidiPSUj';
  
  return new NextResponse(verificationContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
} 