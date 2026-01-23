import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Artifact 1 — Digital Manufacturing Blueprint",
  description:
    "Current state to target state blueprint for MES-enabled digital manufacturing execution.",
};

const pdf = "/consulting-artifacts/digital-manufacturing-blueprint.pdf";
const img = "/consulting-artifacts/digital-manufacturing-blueprint.png";

export default function Artifact1Page() {
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
          / Artifact 1
        </p>

        <h1 className="text-4xl font-semibold tracking-tight">
          Artifact 1 — Digital Manufacturing Blueprint
        </h1>

        <p className="text-gray-300 max-w-3xl">
          A portfolio-style blueprint showing scope, current-state reality, and
          execution goals for MES-enabled operations in regulated manufacturing.
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
        <h2 className="text-xl font-medium">Blueprint visual</h2>
        <p className="text-gray-400">Click image to open full-size.</p>

        <a href={img} target="_blank" rel="noreferrer">
          <img
            src={img}
            alt="Digital Manufacturing Blueprint"
            className="rounded-xl border border-gray-800"
          />
        </a>
      </section>

      {/* WHAT IT SHOWS */}
      <section className="rounded-2xl border border-gray-800 bg-black/30 p-6 space-y-3">
        <h2 className="text-xl font-medium">What this demonstrates</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-400">
          <li>Clear separation of enterprise, execution, control, and data layers</li>
          <li>MES capabilities tied directly to execution outcomes</li>
          <li>Consulting-style framing from current state to target state</li>
        </ul>
      </section>
    </main>
  );
}
