import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Kesler Aristide-Bonheur — Digital Manufacturing, MES, and Systems Thinking. I design, diagnose, and improve manufacturing execution systems in regulated environments.",
  openGraph: {
    title: "Kesler Aristide-Bonheur",
    description:
      "Digital Manufacturing, MES, and Systems Thinking. I design, diagnose, and improve manufacturing execution systems in regulated environments.",
    url: "https://kes-site.vercel.app",
    siteName: "Kesler Aristide-Bonheur",
    images: [{ url: "/opengraph-image" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kesler Aristide-Bonheur",
    description:
      "Digital Manufacturing, MES, and Systems Thinking. I design, diagnose, and improve manufacturing execution systems in regulated environments.",
    images: ["/twitter-image"],
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-2xl space-y-6">
        <Image
          src="/headshot.png"
          alt="Kesler Aristide-Bonheur"
          width={220}
          height={220}
          className="rounded-full mx-auto"
          priority
        />

        <h1 className="text-4xl font-bold tracking-tight">
          Kesler Aristide-Bonheur
        </h1>

        <p className="text-lg text-gray-400">
          Digital Manufacturing · MES · Systems Thinking
        </p>

        <p className="text-gray-400">
          I design, diagnose, and improve manufacturing execution systems in
          regulated environments.
        </p>

        <div className="flex gap-4 justify-center pt-4">
          <Link
            href="/projects/consulting-artifacts"
            className="rounded-lg border border-gray-700 px-4 py-2 hover:bg-white/5"
          >
            View Consulting Artifacts →
          </Link>

          <a
            href="/Kesler_Aristide_Bonheur_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-gray-700 px-4 py-2 hover:bg-white/5"
          >
            Resume
          </a>
        </div>
      </div>
    </main>
  );
}
