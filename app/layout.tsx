import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const SITE_NAME = "Kesler Bonheur";
const SITE_DESCRIPTION =
  "Digital manufacturing and systems portfolio. MES, integration, execution models, and consulting-style artifacts for regulated manufacturing.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kes-site-kz6thmox1-kesler-s-projects.vercel.app"),
  title: {
    default: `${SITE_NAME} — Digital Manufacturing & Systems`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Digital Manufacturing",
    "MES",
    "Systems",
    "PAS-X",
    "Syncade",
    "DeltaV",
    "GMP",
    "CSV",
    "21 CFR Part 11",
    "ISA-95",
    "Integration",
    "Manufacturing Execution",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    url: "/",
    title: `${SITE_NAME} — Digital Manufacturing & Systems`,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [{ url: "/og", width: 1200, height: 630, alt: `${SITE_NAME} portfolio` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Digital Manufacturing & Systems`,
    description: SITE_DESCRIPTION,
    images: ["/og"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
