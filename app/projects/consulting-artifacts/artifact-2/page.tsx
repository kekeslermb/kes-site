import Link from "next/link";

const SHOW_PRIVATE_NOTES = process.env.SHOW_PRIVATE_NOTES === "true";

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
          Artifact 2 — Risk, Controls, and Compliance Impact
        </h1>
        <p className="mt-3 text-gray-400 leading-relaxed">
          A practical lens for identifying failure modes, defining controls, and aligning execution
          improvements with regulated manufacturing expectations.
        </p>

        <div className="mt-5 flex flex-wrap gap-2 text-sm text-gray-400">
          {["Risk", "Controls", "Compliance"].map((tag) => (
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
            <li>How to think in failure modes (where execution can drift or break)</li>
            <li>How to define controls that are practical (not “paper compliance”)</li>
            <li>How to link controls to system behavior (data capture, permissions, exceptions)</li>
            <li>How to prioritize by impact + likelihood (focus the team on what matters)</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-black/30 p-6">
          <h2 className="text-2xl font-medium">Illustrative visual slot</h2>
          <p className="mt-2 text-gray-400">
            Add a risk/control matrix image here later (PNG/JPG). Public-facing only.
          </p>
          <div className="mt-4 h-64 rounded-xl border border-gray-900 bg-black/40" />
        </div>

        <div className="rounded-2xl border border-gray-800 bg-black/30 p-6">
          <h2 className="text-2xl font-medium">Outcome focus</h2>
          <p className="mt-2 text-gray-400 leading-relaxed">
            Good controls reduce deviation volume, shorten investigations, and make batch release smoother —
            without slowing operators down.
          </p>
        </div>
      </section>

      {/* Private notes (LOCAL ONLY) */}
      {SHOW_PRIVATE_NOTES && (
        <section className="mt-10 space-y-6">
          <div className="rounded-2xl border border-yellow-900/40 bg-yellow-950/20 p-6">
            <h2 className="text-2xl font-medium">How to Talk Through It (Private)</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-300">
              <li>Start with top 3 risks that hit quality, compliance, or throughput.</li>
              <li>Show how you convert “risk statements” into specific controls + system checks.</li>
              <li>Close with measurable outcomes: fewer exceptions, faster reviews, clearer ownership.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-yellow-900/40 bg-yellow-950/20 p-6">
            <h2 className="text-2xl font-medium">How to Present It (Private)</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-300">
              <li>Bring a simple matrix: risk → control → evidence → owner.</li>
              <li>Call out “operator-friendly” controls vs “reviewer-only” controls.</li>
              <li>Explain how this maps to validation deliverables when required.</li>
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}
