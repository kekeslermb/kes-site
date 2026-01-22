import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kesler Bonheur | MES & Digital Manufacturing",
  description: "Personal site and portfolio for MES and digital manufacturing systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <header className="sticky top-0 z-50 border-b border-gray-900 bg-black/80 backdrop-blur">
          <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight">
              Kesler
            </Link>

            <div className="flex gap-4 text-sm text-gray-300">
              <Link className="hover:text-white transition" href="/about">
                About
              </Link>
              <Link className="hover:text-white transition" href="/skills">
                Skills
              </Link>
              <Link className="hover:text-white transition" href="/projects">
                Projects
              </Link>
              <Link className="hover:text-white transition" href="/resume">
                Resume
              </Link>
              <Link className="hover:text-white transition" href="/contact">
                Contact
              </Link>
            </div>
          </nav>
        </header>

        {children}

        <footer className="border-t border-gray-900 py-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Kesler Bonheur
        </footer>
      </body>
    </html>
  );
}
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* Vercel Analytics */}
        <Analytics />

        {/* Vercel Speed Insights */}
        <SpeedInsights />
      </body>
    </html>
  );
}
