// deploy bump

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-2xl space-y-6">
        <Image
          src="/headshot.png"
          alt="Kesler Bonheur"
          width={220}
          height={220}
          className="rounded-full mx-auto"
          priority
        />

        <h1 className="text-4xl font-bold tracking-tight">
          Kesler Bonheur
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

          <Link
            href="/resume"
            className="rounded-lg border border-gray-700 px-4 py-2 hover:bg-white/5"
          >
            Resume
          </Link>
        </div>
      </div>
    </main>
  );
}
