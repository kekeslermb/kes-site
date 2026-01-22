import Link from "next/link";

export default function Artifact2() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-12">

        <section className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Artifact 2 — MES / IT-OT Integration Map
          </h1>
          <p className="text-gray-300 leading-relaxed">
            A systems map that clarifies boundaries and interfaces: where data originates, where it transforms,
            and where integrity risk is introduced if controls are weak.
          </p>
          <div className="flex flex-wrap gap-3 pt-2 text-sm text-gray-400">
            <span className="rounded-full border border-gray-800 px-4 py-1">ISA-95</span>
            <span className="rounded-full border border-gray-800 px-4 py-1">Integration</span>
            <span className="rounded-full border border-gray-800 px-4 py-1">Data Integrity</span>
          </div>
        </section>

        {/* PLACEHOLDER SLOT */}
        <section className="rounded-xl border border-gray-800 p-8 space-y-3">
          <h2 className="text-2xl font-medium">Illustrative Artifact</h2>
          <p className="text-gray-400">
            Drop your integration diagram image here later (PNG/JPG). We’ll replace this box with the visual.
          </p>
          <div className="h-64 rounded-lg border border-gray-900 bg-black/40" />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-medium">What This Signals</h2>
          <ul className="list-disc pl-5 text-gray-400 space-y-2">
            <li>You understand MES as the orchestration layer between ERP and equipment/control systems.</li>
            <li>You can speak in interfaces, handoffs, and data ownership — not just “features.”</li>
            <li>You design with audit trails, traceability, and supportability in mind.</li>
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
