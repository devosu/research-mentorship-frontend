// @app/layout.tsx
//
// Layout definition for the entire application. DO NOT TOUCH.

// NextJS essential imports.
import type { Metadata } from "next";

// Local imports.
import "./globals.css";

export const metadata: Metadata = {
  title: "Research Mentorship",
  description: "OSU Student Government Research Mentorship Program",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
