import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artifact 2 — Value Case",
  description:
    "Value case mapping current-state pain points to target-state improvements and measurable impact KPIs.",
};

export default function Artifact2Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <header className="mb-10">
        <p className="text-sm text-gray-400">
          <Link href="/projects/consulting-artifacts" className="underline hover:text-white">
            ← Back to Consulting Artifacts
          </Link>
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          Artifact 2 — Digital Manufacturing Value Case
        </h1>
        <p className="mt-3 text-gray-400 leading-relaxed">
          A value-case view connecting current-state pain points to target-state improvements, adoption levers,
          and measurable impact.
        </p>

        <div className="mt-5 flex flex-wrap gap-2 text-sm text-gray-400">
          {["Value Case", "KPIs", "Operational Impact"].map((tag) => (
            <span key={tag} className="rounded-full border border-gray-800 px-3 py-1">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <section className="space-y-6">
        <div className="rounded-2xl border border-gray-800 bg-black/30 p-6">
          <h2 className="text-2xl font-medium">Value-case visual</h2>
          <p className="mt-2 text-gray-400">
            Click to open full-size (tables read better full-size).
          </p>

          <a
            href="/artifacts/artifact-2.png"
            target="_blank"
            rel="noreferrer"
            className="mt-4 block overflow-hidden rounded-xl border border-gray-900 bg-black/40"
          >
            <Image
              src="/artifacts/artifact-2.png"
              alt="Digital manufacturing value case table"
              width={1800}
              height={1000}
              className="h-auto w-full object-contain"
              priority
            />
          </a>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-black/30 p-6">
          <h2 className="text-2xl font-medium">What this demonstrates</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-400">
            <li>Turning process pain into measurable value and priorities</li>
            <li>How to define “impact” beyond features (cycle time, deviations, review readiness)</li>
            <li>How to communicate change in a business-ready way</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
