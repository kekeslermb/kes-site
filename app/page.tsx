import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kesler Bonheur | Digital Manufacturing & MES",
  description:
    "Systems-focused digital manufacturing portfolio. MES, integration, execution models, and consulting artifacts.",
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="grid gap-10 md:grid-cols-[220px_1fr] items-center">
        {/* Headshot */}
        <div className="flex justify-center md:justify-start">
          <div className="relative h-[200px] w-[200px] overflow-hidden rounded-2xl border border-gray-800 bg-black/30">
            <Image
              src="/headshot.png"
              alt="Kesler Bonheur"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Intro */}
        <div className="space-y-5">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Kesler Bonheur
          </h1>

          <p className="text-gray-300 max-w-2xl">
            Digital manufacturing and systems-focused professional working at the
            intersection of MES, automation, data integrity, and regulated execution.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-xl border border-gray-800 px-4 py-2 text-sm hover:bg-white/5 transition"
            >
              Projects →
            </Link>

            <Link
              href="/projects/consulting-artifacts"
              className="rounded-xl border border-gray-800 px-4 py-2 text-sm hover:bg-white/5 transition"
            >
              Consulting Artifacts →
            </Link>

            <Link
              href="/resume"
              className="rounded-xl border border-gray-800 px-4 py-2 text-sm hover:bg-white/5 transition"
            >
              Resume →
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-gray-800 px-4 py-2 text-sm hover:bg-white/5 transition"
            >
              Contact →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
