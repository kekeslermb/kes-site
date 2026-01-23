import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Kesler Aristide-Bonheur — Manufacturing and MES-focused professional with experience across GMP operations, digital manufacturing systems, and IT/OT integration.",
};

const resumePdfPath =
  "/consulting-artifacts/Kesler_Aristide-Bonheur_Resume.pdf";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* HEADER */}
        <section className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Resume
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl">
            Manufacturing and MES-focused professional with experience across
            GMP operations, digital manufacturing systems, and IT/OT integration.
          </p>
        </section>

        {/* DOWNLOAD */}
        <section className="rounded-xl border border-gray-800 p-8 space-y-4">
          <h2 className="text-2xl font-medium">Download</h2>

          <p className="text-gray-400">PDF version of my resume:</p>

          <div className="flex flex-wrap gap-3">
            <a
              href={resumePdfPath}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
            >
              Open / Download Resume (PDF)
            </a>

            <a
              href={resumePdfPath}
              download
              className="inline-block px-6 py-3 rounded-lg border border-gray-700 text-white font-medium hover:bg-white/5 transition"
            >
              Download (direct)
            </a>
          </div>
        </section>

        {/* PREVIEW */}
        <section className="rounded-xl border border-gray-800 p-6 space-y-4 bg-black/30">
          <h2 className="text-2xl font-medium">Preview</h2>
          <p className="text-gray-400">
            If the preview doesn’t load on your device, use the download buttons above.
          </p>

          <div className="w-full overflow-hidden rounded-xl border border-gray-800 bg-black">
            <iframe
              title="Kesler Aristide-Bonheur Resume PDF"
              src={resumePdfPath}
              className="w-full"
              style={{ height: "900px", border: "0" }}
            />
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="space-y-6">
          <h2 className="text-2xl font-medium">Professional Focus</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-800 p-6 space-y-3">
              <h3 className="font-medium">Manufacturing & GMP</h3>
              <ul className="list-disc pl-5 text-gray-400 space-y-1">
                <li>Batch execution & eBR/eDHR workflows</li>
                <li>Deviation & exception handling</li>
                <li>ALCOA+ data integrity mindset</li>
                <li>Regulated manufacturing environments</li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-800 p-6 space-y-3">
              <h3 className="font-medium">MES & Digital Systems</h3>
              <ul className="list-disc pl-5 text-gray-400 space-y-1">
                <li>PAS-X MES (current)</li>
                <li>Syncade exposure</li>
                <li>MES authoring concepts</li>
                <li>System integration thinking</li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-800 p-6 space-y-3">
              <h3 className="font-medium">Systems & Integration</h3>
              <ul className="list-disc pl-5 text-gray-400 space-y-1">
                <li>ERP ↔ MES ↔ SCADA concepts</li>
                <li>SQL for manufacturing traceability</li>
                <li>IT/OT boundary awareness</li>
                <li>ISA-95 aligned thinking</li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-800 p-6 space-y-3">
              <h3 className="font-medium">Validation & Delivery</h3>
              <ul className="list-disc pl-5 text-gray-400 space-y-1">
                <li>CSV lifecycle (URS → PQ)</li>
                <li>Change control awareness</li>
                <li>Dev / Test / Prod environments</li>
                <li>Consulting-style documentation</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
