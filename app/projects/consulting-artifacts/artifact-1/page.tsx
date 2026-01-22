import Link from "next/link";

export default function Artifact1() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-12">

        <section className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Artifact 1 — Current State → Target State
          </h1>
          <p className="text-gray-300 leading-relaxed">
            A structured view of how work happens today, where the friction lives, and what the
            target operating model should look like after improvement.
          </p>
          <div className="flex flex-wrap gap-3 pt-2 text-sm text-gray-400">
            <span className="rounded-full border border-gray-800 px-4 py-1">Operating Model</span>
            <span className="rounded-full border border-gray-800 px-4 py-1">Process Clarity</span>
            <span className="rounded-full border border-gray-800 px-4 py-1">Value Stream</span>
          </div>
        </section>

        {/* PLACEHOLDER SLOT */}
        <section className="rounded-xl border border-gray-800 p-8 space-y-3">
          <h2 className="text-2xl font-medium">Illustrative Artifact</h2>
          <p className="text-gray-400">
            Drop your image here later (PNG/JPG). We’ll replace this box with the artifact visual.
          </p>
          <div className="h-64 rounded-lg border border-gray-900 bg-black/40" />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-medium">How to Talk Through It (Interview-ready)</h2>
          <ul className="list-disc pl-5 text-gray-400 space-y-2">
            <li>“I start by clarifying the current execution reality — who does what, when, and where it breaks.”</li>
            <li>“Then I define a target state that reduces handoffs and makes compliance easier, not harder.”</li>
            <li>“Finally, I map the gaps into concrete changes: roles, workflows, controls, and system updates.”</li>
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
