import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Digital manufacturing and systems portfolio: MES, integration thinking, and consulting-style artifacts built for regulated manufacturing.",
};

const artifacts = [
  {
    title: "Artifact 1 — Current State → Target State",
    desc: "A structured view of how work happens today, where friction lives, and what the improved operating model should look like.",
    href: "/projects/consulting-artifacts/artifact-1",
    tags: ["Operating Model", "Process Clarity", "Value Stream"],
  },
  {
    title: "Artifact 2 — Risk, Controls, and Compliance Impact",
    desc: "A practical lens for identifying failure modes, defining controls, and aligning improvements with regulated manufacturing expectations.",
    href: "/projects/consulting-artifacts/artifact-2",
    tags: ["Risk", "Controls", "Compliance"],
  },
  {
    title: "Artifact 3 — Execution Plan and Adoption",
    desc: "A rollout-ready approach: stakeholders, training, change control, and measurable KPIs to ensure the target state sticks.",
    href: "/projects/consulting-artifacts/artifact-3",
    tags: ["Delivery", "Change Control", "KPIs"],
  },
];

export default function ConsultingArtifactsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">Consulting Artifacts</h1>
        <p className="mt-2 text-gray-400">
          These artifacts show how I think about systems: diagnosing current state, designing a target state,
          and advising on execution improvements for digital manufacturing.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {artifacts.map((a) => (
          <article key={a.href} className="rounded-2xl border border-gray-800 bg-black/30 p-6">
            <h2 className="text-xl font-semibold">{a.title}</h2>
            <p className="mt-2 text-gray-400">{a.desc}</p>

            <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-400">
              {a.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-gray-800 px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <Link
                href={a.href}
                className="inline-block text-sm underline text-gray-300 hover:text-white"
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
