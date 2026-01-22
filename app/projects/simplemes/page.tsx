import Link from "next/link";

export default function SimpleMESPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-14">

        {/* HEADER */}
        <section className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            SimpleMES
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl">
            A lightweight Manufacturing Execution System (MES) portfolio project
            designed to demonstrate GMP-minded execution logic, system structure,
            and IT/OT integration thinking.
          </p>

          <div className="flex flex-wrap gap-3 pt-2 text-sm text-gray-400">
            <span className="rounded-full border border-gray-800 px-4 py-1">
              In Progress
            </span>
            <span className="rounded-full border border-gray-800 px-4 py-1">
              MES Authoring
            </span>
            <span className="rounded-full border border-gray-800 px-4 py-1">
              GMP / CSV
            </span>
            <span className="rounded-full border border-gray-800 px-4 py-1">
              Systems Design
            </span>
          </div>
        </section>

        {/* WHY */}
        <section className="space-y-4">
          <h2 className="text-2xl font-medium">Why SimpleMES Exists</h2>

          <p className="text-gray-400 leading-relaxed">
            Many MES discussions stay abstract. SimpleMES exists to make execution
            concrete — showing how manufacturing workflows, data integrity, and
            system boundaries actually come together in a regulated environment.
          </p>

          <p className="text-gray-400 leading-relaxed">
            This project is intentionally simple. The focus is not UI polish, but
            clear execution logic, traceability, and system thinking that mirrors
            real plant behavior.
          </p>
        </section>

        {/* WHAT IT DEMONSTRATES */}
        <section className="space-y-6">
          <h2 className="text-2xl font-medium">What It Demonstrates</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-800 p-6 space-y-3">
              <h3 className="font-medium">Execution Logic</h3>
              <ul className="list-disc pl-5 text-gray-400 space-y-1">
                <li>Step-based workflow progression</li>
                <li>Operator actions & confirmations</li>
                <li>Exception and deviation paths</li>
                <li>Electronic record mindset</li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-800 p-6 space-y-3">
              <h3 className="font-medium">Data & Compliance</h3>
              <ul className="list-disc pl-5 text-gray-400 space-y-1">
                <li>ALCOA+ data principles</li>
                <li>Traceability & timestamps</li>
                <li>Audit-aware design</li>
                <li>Validation-ready structure</li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-800 p-6 space-y-3">
              <h3 className="font-medium">Systems Thinking</h3>
              <ul className="list-disc pl-5 text-gray-400 space-y-1">
                <li>MES as the orchestration layer</li>
                <li>Clear system boundaries</li>
                <li>ERP / SCADA integration concepts</li>
                <li>Environment separation (Dev/Test/Prod)</li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-800 p-6 space-y-3">
              <h3 className="font-medium">Authoring Mindset</h3>
              <ul className="list-disc pl-5 text-gray-400 space-y-1">
                <li>Reusable workflow patterns</li>
                <li>Readable logic over clever logic</li>
                <li>Change-control awareness</li>
                <li>Supportability over shortcuts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* STATUS */}
        <section className="space-y-4">
          <h2 className="text-2xl font-medium">Current Status</h2>

          <p className="text-gray-400 leading-relaxed">
            SimpleMES is under active development. Future updates will include
            execution diagrams, sample workflows, SQL-based traceability examples,
            and integration mock flows.
          </p>
        </section>

        {/* BACK */}
        <section className="pt-6">
          <Link
            href="/projects"
            className="text-sm text-gray-400 underline hover:text-white transition"
          >
            ← Back to Projects
          </Link>
        </section>

      </div>
    </main>
  );
}
