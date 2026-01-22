import Link from "next/link";

const SHOW_PRIVATE_NOTES = process.env.SHOW_PRIVATE_NOTES === "true";

export default function Artifact3Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <header className="mb-10">
        <p className="text-sm text-gray-400">
          <Link href="/projects/consulting-artifacts" className="underline hover:text-white">
            ← Back to Consulting Artifacts
          </Link>
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          Artifact 3 — Execution Plan and Adoption
        </h1>
        <p className="mt-3 text-gray-400 leading-relaxed">
          A rollout-ready approach: stakeholders, training, change control, and measurable KPIs to ensure
          improvements stick.
        </p>

        <div className="mt-5 flex flex-wrap gap-2 text-sm text-gray-400">
          {["Delivery", "Change Control", "KPIs"].map((tag) => (
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
            <li>How to break delivery into phases (so the team always knows what’s next)</li>
            <li>How to manage adoption (training + support + feedback loops)</li>
            <li>How to control changes in regulated environments (documentation + approvals)</li>
            <li>How to define KPIs that prove impact (not just activity)</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-black/30 p-6">
          <h2 className="text-2xl font-medium">Illustrative visual slot</h2>
          <p className="mt-2 text-gray-400">
            Add a phased rollout plan image here later (PNG/JPG). Public-facing only.
          </p>
          <div className="mt-4 h-64 rounded-xl border border-gray-900 bg-black/40" />
        </div>

        <div className="rounded-2xl border border-gray-800 bg-black/30 p-6">
          <h2 className="text-2xl font-medium">Outcome focus</h2>
          <p className="mt-2 text-gray-400 leading-relaxed">
            Execution is the difference between “a good idea” and real results. This is how you protect
            delivery quality while moving fast.
          </p>
        </div>
      </section>

      {/* Private notes (LOCAL ONLY) */}
      {SHOW_PRIVATE_NOTES && (
        <section className="mt-10 space-y-6">
          <div className="rounded-2xl border border-yellow-900/40 bg-yellow-950/20 p-6">
            <h2 className="text-2xl font-medium">How to Talk Through It (Private)</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-300">
              <li>Define phases: pilot → stabilize → expand → optimize.</li>
              <li>Define roles: operator, supervisor, QA, system owner, support.</li>
              <li>Define evidence: what “working” looks like (KPIs + feedback + exceptions trending).</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-yellow-900/40 bg-yellow-950/20 p-6">
            <h2 className="text-2xl font-medium">How to Present It (Private)</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-300">
              <li>Lead with outcomes and constraints, then show your plan.</li>
              <li>Call out change control explicitly (what changes, who approves, how you document).</li>
              <li>Close with a KPI dashboard and a stabilization plan (hypercare → steady state).</li>
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}
