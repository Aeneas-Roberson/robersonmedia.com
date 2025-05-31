// src/app/(projects)/facebook/login/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facebook Login | robersonmedia.com",
  description: "Facebook authentication for API integration services",
};

export default function FacebookLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}