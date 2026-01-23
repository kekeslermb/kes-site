import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Artifact 2 — Roadmap & Execution Plan",
  description:
    "A delivery-focused roadmap outlining sequencing, ownership, and execution checkpoints.",
};

const pdf = "/consulting-artifacts/roadmap-blueprint.pdf";
const img = "/consulting-artifacts/roadmap-blueprint.png";

export default function Artifact2Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-gray-400">
          <Link
            href="/projects/consulting-artifacts"
            className="underline hover:text-white"
          >
            Consulting Artifacts
          </Link>{" "}
          / Artifact 2
        </p>

        <h1 className="text-4xl font-semibold tracking-tight">
          Artifact 2 — Roadmap & Execution Plan
        </h1>

        <p className="text-gray-300 max-w-3xl">
          A rollout-ready execution plan covering sequencing, ownership,
          dependencies, and KPIs for MES-enabled manufacturing improvements.
        </p>
      </header>

      {/* ACTIONS */}
      <section className="flex flex-wrap gap-3">
        <a
          href={pdf}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-gray-700 px-4 py-2 hover:bg-white/5"
        >
          View PDF →
        </a>

        <a
          href={pdf}
          download
          className="rounded-lg border border-gray-700 px-4 py-2 hover:bg-white/5"
        >
          Download PDF
        </a>
      </section>

      {/* VISUAL */}
      <section className="rounded-2xl border border-gray-800 bg-black/30 p-6 space-y-4">
        <h2 className="text-xl font-medium">Roadmap visual</h2>

        <a href={img} target="_blank" rel="noreferrer">
          <img
            src={img}
            alt="MES Execution Roadmap"
            className="rounded-xl border border-gray-800"
          />
        </a>
      </section>

      {/* WHAT IT SHOWS */}
      <section className="rounded-2xl border border-gray-800 bg-black/30 p-6 space-y-3">
        <h2 className="text-xl font-medium">What this demonstrates</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-400">
          <li>Delivery sequencing aligned to regulated environments</li>
          <li>Ownership and adoption baked into execution</li>
          <li>Consulting-style roadmap clarity (not just tech tasks)</li>
        </ul>
      </section>
    </main>
  );
}
