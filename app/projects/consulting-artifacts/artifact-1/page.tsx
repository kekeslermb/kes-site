import Link from "next/link";

const SHOW_PRIVATE_NOTES = process.env.SHOW_PRIVATE_NOTES === "true";

export default function Artifact1Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <header className="mb-10">
        <p className="text-sm text-gray-400">
          <Link href="/projects/consulting-artifacts" className="underline hover:text-white">
            ← Back to Consulting Artifacts
          </Link>
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          Artifact 1 — Current State → Target State
        </h1>
        <p className="mt-3 text-gray-400 leading-relaxed">
          A structured view of how work happens today, where the friction lives, and what the target
          operating model should look like after improvement.
        </p>

        <div className="mt-5 flex flex-wrap gap-2 text-sm text-gray-400">
          {["Operating Model", "Process Clarity", "Value Stream"].map((tag) => (
            <span key={tag} className="rounded-full border border-gray-800 px-3 py-1">
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Public content */}
      <section className="space-y-6">
        <div className="rounded-2xl border border-gray-800 bg-black/30 p-6">
          <h2 className="text-2xl font-medium">What this artifact demonstrates</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-400">
            <li>Systems thinking: inputs → process → outputs (and where constraints occur)</li>
            <li>Clear separation of “current state” vs “target state”</li>
            <li>Practical improvement focus: reduce handoffs, rework, ambiguity, and exceptions</li>
            <li>Digital manufacturing readiness: where structure, data, and controls improve execution</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-black/30 p-6">
          <h2 className="text-2xl font-medium">Illustrative visual slot</h2>
          <p className="mt-2 text-gray-400">
            Drop your image here later (PNG/JPG). This section is intentionally public-facing.
          </p>
          <div className="mt-4 h-64 rounded-xl border border-gray-900 bg-black/40" />
        </div>

        <div className="rounded-2xl border border-gray-800 bg-black/30 p-6">
          <h2 className="text-2xl font-medium">Outcome focus</h2>
          <p className="mt-2 text-gray-400 leading-relaxed">
            The point is not “pretty diagrams.” The point is improved execution: fewer surprises,
            faster throughput, clearer ownership, and tighter alignment between how work is done and
            how it’s controlled.
          </p>
        </div>
      </section>

      {/* Private notes (LOCAL ONLY) */}
      {SHOW_PRIVATE_NOTES && (
        <section className="mt-10 space-y-6">
          <div className="rounded-2xl border border-yellow-900/40 bg-yellow-950/20 p-6">
            <h2 className="text-2xl font-medium">How to Talk Through It (Private)</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-300">
              <li>“First I clarify the execution reality — who does what, when, and where it breaks.”</li>
              <li>“Then I define a target state that reduces handoffs and makes compliance easier.”</li>
              <li>“Finally, I map gaps into concrete changes: roles, workflows, controls, and system updates.”</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-yellow-900/40 bg-yellow-950/20 p-6">
            <h2 className="text-2xl font-medium">How to Present It (Private)</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-300">
              <li>“I structure delivery into phases so stakeholders always know what’s done and what’s next.”</li>
              <li>“I align deliverables to validation expectations early (URS/FRS/IQ/OQ/PQ).”</li>
              <li>“Governance is lightweight but real: change control, documentation standards, decision ownership.”</li>
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}
