import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

const siteUrl = "https://kes-site.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kesler Aristide-Bonheur",
    template: "%s | Kesler Aristide-Bonheur",
  },
  description:
    "Kesler Aristide-Bonheur — Digital Manufacturing & MES professional focused on systems, compliance, and production execution.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Kesler Aristide-Bonheur",
    title: "Kesler Aristide-Bonheur",
    description:
      "Digital Manufacturing & MES professional focused on systems, compliance, and production execution.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Kesler Aristide-Bonheur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kesler Aristide-Bonheur",
    description:
      "Digital Manufacturing & MES professional focused on systems, compliance, and production execution.",
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
