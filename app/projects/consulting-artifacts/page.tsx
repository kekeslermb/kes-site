import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting Artifacts",
  description:
    "Consulting-style artifacts demonstrating systems thinking, execution models, and measurable digital manufacturing impact.",
};

const artifacts = [
  {
    title: "Artifact 1 — Current State → Target State",
    desc: "A structured view of how work happens today, where friction lives, and what the target operating model should look like after improvement.",
    href: "/projects/consulting-artifacts/artifact-1",
    tags: ["Operating Model", "Process Clarity", "Value Stream"],
  },
  {
    title: "Artifact 2 — Risk, Controls, and Compliance Impact",
    desc: "A practical lens for identifying failure modes, defining controls, and aligning improvements to regulated manufacturing expectations.",
    href: "/projects/consulting-artifacts/artifact-2",
    tags: ["Risk", "Controls", "Compliance"],
  },
  {
    title: "Artifact 3 — Execution Plan and Adoption",
    desc: "A rollout-ready approach: stakeholders, training, change control, and measurable KPIs to ensure improvements stick.",
    href: "/projects/consulting-artifacts/artifact-3",
    tags: ["Delivery", "Change Control", "KPIs"],
  },
];

export default function ConsultingArtifactsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Consulting Artifacts
        </h1>
        <p className="text-gray-300 max-w-2xl">
          A small set of consulting-style artifacts showing how I structure problems, map systems,
          and drive measurable improvements in regulated manufacturing.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {artifacts.map((a) => (
          <article
            key={a.href}
            className="rounded-2xl border border-gray-800 bg-black/30 p-6 space-y-4"
          >
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">{a.title}</h2>
              <p className="text-gray-400">{a.desc}</p>
            </div>

            <div className="flex flex-wrap gap-2 text-sm text-gray-300">
              {a.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-800 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div>
              <Link
                href={a.href}
                className="inline-block text-sm underline text-gray-300 hover:text-white transition"
              >
                Open artifact →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
