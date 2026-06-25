import Link from "next/link";
import type { Metadata } from "next";
import { artifacts, disclaimer } from "./artifacts-data";

export const metadata: Metadata = {
  title: "Consulting Artifacts",
  description:
    "Consulting artifacts showing MES assessment, target-state design, implementation planning, and value-case framing for regulated life sciences manufacturing.",
};

export default function ConsultingArtifactsPage() {
  return (
    <main className="cinematic-shell px-6 py-24 text-white">
      <div className="blueprint-grid" />
      <div className="light-sweep" />

      <div className="relative mx-auto max-w-7xl space-y-14">
        <header className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="animate-fade-up space-y-5">
            <div className="section-label">Consulting Artifacts</div>
            <h1 className="text-5xl font-semibold leading-[0.96] tracking-tight md:text-7xl">
              Client-ready thinking for MES and digital manufacturing work.
            </h1>
          </div>

          <div className="glow-card luxury-border animate-fade-up rounded-[2rem] p-7 md:p-9 [animation-delay:100ms]">
            <p className="text-xl leading-9 text-slate-300">
              These artifacts demonstrate consulting-style thinking across MES
              assessment, target-state design, implementation planning, and
              value-case framing for regulated life sciences manufacturing.
            </p>
            <p className="mt-5 text-slate-400">
              Consulting artifacts that show how I assess messy manufacturing
              operations, define a cleaner target state, plan implementation,
              and connect digital manufacturing work to measurable business
              value.
            </p>
          </div>
        </header>

        <section className="grid gap-5 lg:grid-cols-3">
          {artifacts.map((artifact, index) => (
            <article
              key={artifact.id}
              className="luxury-border metal-card shimmer-line group animate-fade-up flex min-h-full flex-col rounded-[1.75rem] p-6 transition duration-500 hover:-translate-y-2 hover:shadow-[0_32px_100px_rgba(34,211,238,0.14)]"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">
                    Artifact {artifact.id}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    {artifact.eyebrow}
                  </p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-2 text-xs font-bold text-slate-300">
                  {artifact.id}
                </span>
              </div>

              <h2 className="mt-6 text-2xl font-semibold leading-tight">
                {artifact.title}
              </h2>
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">
                {artifact.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {artifact.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-cyan-200/15 bg-cyan-200/[0.055] px-3 py-1 text-xs font-medium text-cyan-50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-7 grid gap-3">
                <Link
                  href={artifact.pageHref}
                  className="luxury-border rounded-full bg-cyan-200 px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-white"
                >
                  Open artifact page
                </Link>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <a
                    href={artifact.filePdf}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 bg-white/[0.045] px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.14em] text-slate-200 transition hover:border-cyan-200/40 hover:bg-white/[0.08]"
                  >
                    View PDF
                  </a>

                  <a
                    href={artifact.filePng}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 bg-white/[0.045] px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.14em] text-slate-200 transition hover:border-cyan-200/40 hover:bg-white/[0.08]"
                  >
                    View image
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="rounded-[2rem] border border-amber-200/20 bg-amber-200/[0.055] p-6 text-sm leading-7 text-amber-50/85">
          {disclaimer}
        </section>
      </div>
    </main>
  );
}
