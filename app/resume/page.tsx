import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Kesler Aristide-Bonheur, MBA, PMP - PMP-certified Digital Manufacturing & MES Professional.",
};

const RESUME_URL = "/consulting-artifacts/resume.pdf";

export default function ResumePage() {
  return (
    <main className="cinematic-shell px-6 py-24 text-white">
      <div className="blueprint-grid" />
      <div className="light-sweep" />

      <div className="relative mx-auto max-w-7xl space-y-12">
        <section className="animate-fade-up grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <div className="section-label">Document Vault</div>
            <h1 className="text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Resume archive for MES and digital manufacturing roles.
            </h1>
          </div>

          <div className="glow-card luxury-border rounded-[2rem] p-7 md:p-9">
            <p className="text-xl leading-9 text-slate-300">
              A concise view of experience across GMP manufacturing, PAS-X,
              Syncade, EBR workflows, MES troubleshooting, PMP-certified project
              delivery, and manufacturing systems integration.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="luxury-border rounded-full bg-cyan-200 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.16em] text-slate-950 shadow-[0_0_50px_rgba(34,211,238,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Open / Download
              </a>

              <a
                href={RESUME_URL}
                download
                className="luxury-border rounded-full bg-white/[0.055] px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.16em] text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                Direct Download
              </a>
            </div>
          </div>
        </section>

        <section className="animate-fade-up luxury-border glow-card rounded-[2rem] p-4 md:p-6">
          <div className="mb-5 flex flex-col justify-between gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-200">
                Live PDF Preview
              </p>
              <h2 className="mt-2 text-2xl font-semibold">Resume</h2>
            </div>
            <span className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-slate-400">
              /consulting-artifacts/resume.pdf
            </span>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black shadow-2xl shadow-black/40">
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
