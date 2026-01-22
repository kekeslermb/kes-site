import type { Metadata } from "next";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Kes — Portfolio",
  description:
    "Systems-focused portfolio showcasing digital manufacturing, MES, and consulting artifacts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
