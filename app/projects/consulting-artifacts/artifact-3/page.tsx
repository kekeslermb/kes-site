import Link from "next/link";

export default function Artifact3() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-12">

        <section className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Artifact 3 — Delivery Plan & Controls
          </h1>
          <p className="text-gray-300 leading-relaxed">
            A consulting-style delivery view: phases, milestones, and controls that keep execution predictable
            — especially in regulated environments where validation and change control matter.
          </p>
          <div className="flex flex-wrap gap-3 pt-2 text-sm text-gray-400">
            <span className="rounded-full border border-gray-800 px-4 py-1">Roadmap</span>
            <span className="rounded-full border border-gray-800 px-4 py-1">CSV</span>
            <span className="rounded-full border border-gray-800 px-4 py-1">Governance</span>
          </div>
        </section>

        {/* PLACEHOLDER SLOT */}
        <section className="rounded-xl border border-gray-800 p-8 space-y-3">
          <h2 className="text-2xl font-medium">Illustrative Artifact</h2>
          <p className="text-gray-400">
            Drop your roadmap / controls artifact image here later (PNG/JPG). We’ll replace this box with the visual.
          </p>
          <div className="h-64 rounded-lg border border-gray-900 bg-black/40" />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-medium">How to Present It</h2>
          <ul className="list-disc pl-5 text-gray-400 space-y-2">
            <li>“I structure delivery into phases so stakeholders always know what’s done, what’s next, and what risks remain.”</li>
            <li>“I align deliverables to validation expectations early (URS/FRS/IQ/OQ/PQ), not at the end.”</li>
            <li>“Governance is lightweight but real: change control, documentation standards, and decision ownership.”</li>
          </ul>
        </section>

        <section>
          <Link
            href="/projects/consulting-artifacts"
            className="text-sm text-gray-400 underline hover:text-white transition"
          >
            ← Back to Consulting Artifacts
          </Link>
        </section>

      </div>
    </main>
  );
}
