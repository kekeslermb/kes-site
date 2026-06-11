import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

const siteUrl = "https://kes-site.vercel.app";
const siteTitle =
  "Kesler Aristide-Bonheur, MBA, PMP | Digital Manufacturing & MES Professional";
const siteDescription =
  "PMP-certified Digital Manufacturing & MES professional with experience across PAS-X, Syncade, GMP manufacturing, EBR workflows, pharma manufacturing systems, and manufacturing systems integration.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Kesler Aristide-Bonheur, MBA, PMP",
  },
  description: siteDescription,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Kesler Aristide-Bonheur, MBA, PMP",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Kesler Aristide-Bonheur, MBA, PMP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0F19",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "#0B0F19",
          color: "white",
        }}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
