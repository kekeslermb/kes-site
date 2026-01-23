import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Kesler Aristide-Bonheur — Manufacturing and MES-focused professional.",
};

const RESUME_URL = "/consulting-artifacts/resume.pdf";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Resume
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl">
            Manufacturing and MES-focused professional with experience across
            GMP operations, digital manufacturing systems, and IT/OT integration.
          </p>
        </section>

        <section className="rounded-xl border border-gray-800 p-8 space-y-4">
          <h2 className="text-2xl font-medium">Download</h2>

          <div className="flex gap-3">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200"
            >
              Open / Download Resume (PDF)
            </a>

            <a
              href={RESUME_URL}
              download
              className="px-6 py-3 rounded-lg border border-gray-700 hover:bg-white/5"
            >
              Download (direct)
            </a>
          </div>
        </section>

        <section className="rounded-xl border border-gray-800 p-6 bg-black/30 space-y-4">
          <h2 className="text-2xl font-medium">Preview</h2>

          <div className="w-full overflow-hidden rounded-xl border border-gray-800">
            <iframe
              src={RESUME_URL}
              className="w-full"
              style={{ height: "900px", border: 0 }}
              title="Resume PDF"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
