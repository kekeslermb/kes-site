import Image from "next/image";
import Link from "next/link";
import type { ConsultingArtifact } from "./artifacts-data";
import { disclaimer } from "./artifacts-data";

type ArtifactDetailProps = {
  artifact: ConsultingArtifact;
};

export default function ArtifactDetail({ artifact }: ArtifactDetailProps) {
  return (
    <main className="cinematic-shell px-6 py-24 text-white">
      <div className="blueprint-grid" />
      <div className="light-sweep" />

      <div className="relative mx-auto max-w-7xl space-y-12">
        <header className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="animate-fade-up space-y-5">
            <p className="text-sm text-slate-400">
              <Link
                href="/projects/consulting-artifacts"
                className="underline decoration-cyan-200/40 underline-offset-4 hover:text-white"
              >
                Consulting Artifacts
              </Link>{" "}
              / Artifact {artifact.id}
            </p>
            <div className="section-label">{artifact.eyebrow}</div>
            <h1 className="text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              {artifact.title}
            </h1>
          </div>

          <div className="glow-card luxury-border animate-fade-up rounded-[2rem] p-7 md:p-9 [animation-delay:100ms]">
            <p className="text-xl leading-9 text-slate-300">
              {artifact.summary}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={artifact.filePdf}
                target="_blank"
                rel="noreferrer"
                className="luxury-border rounded-full bg-cyan-200 px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-slate-950 transition hover:bg-white"
              >
                View PDF
              </a>
              <a
                href={artifact.filePdf}
                download
                className="luxury-border rounded-full bg-white/[0.055] px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/10"
              >
                Download PDF
              </a>
              <a
                href={artifact.filePng}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/[0.045] px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-slate-200 transition hover:border-cyan-200/40"
              >
                View image
              </a>
            </div>
          </div>
        </header>

        <section className="glow-card luxury-border rounded-[2rem] p-4 md:p-6">
          <div className="mb-5 flex flex-col justify-between gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-200">
                Deliverable preview
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                {artifact.shortTitle}
              </h2>
            </div>
            <span className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-slate-400">
              {artifact.filePdf}
            </span>
          </div>

          <a href={artifact.filePng} target="_blank" rel="noreferrer">
            <Image
              src={artifact.filePng}
              alt={`${artifact.title} preview`}
              width={1400}
              height={1000}
              className="w-full rounded-[1.5rem] border border-white/10 bg-white shadow-2xl shadow-black/40"
            />
          </a>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <ContentCard title="Executive summary" body={artifact.summary} />
          <ContentCard title="Problem statement" body={artifact.problem} />
        </section>

        <section className="grid gap-5 lg:grid-cols-3">
          <ListCard
            title="Current-state observations"
            items={artifact.observations}
          />
          <ContentCard
            title="Target-state recommendation"
            body={artifact.recommendation}
          />
          <ListCard title="Key deliverables" items={artifact.deliverables} />
        </section>

        <section className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <ListCard title="Risks and dependencies" items={artifact.risks} />

          <div className="luxury-border metal-card rounded-[1.5rem] p-6">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">
              KPIs / success measures
            </p>
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-white/[0.06] text-slate-200">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Measure</th>
                    <th className="px-4 py-3 font-semibold">Baseline</th>
                    <th className="px-4 py-3 font-semibold">Target signal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-slate-300">
                  {artifact.metrics.map((metric) => (
                    <tr key={metric.label}>
                      <td className="px-4 py-4 font-medium text-white">
                        {metric.label}
                      </td>
                      <td className="px-4 py-4">{metric.baseline}</td>
                      <td className="px-4 py-4">{metric.target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          {artifact.sections.map((section) => (
            <ListCard
              key={section.title}
              title={section.title}
              items={section.items}
            />
          ))}
        </section>

        <section className="rounded-[2rem] border border-amber-200/20 bg-amber-200/[0.055] p-6 text-sm leading-7 text-amber-50/85">
          {disclaimer}
        </section>
      </div>
    </main>
  );
}

function ContentCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="luxury-border metal-card rounded-[1.5rem] p-6">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">
        {title}
      </p>
      <p className="mt-5 leading-8 text-slate-300">{body}</p>
    </article>
  );
}

function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="luxury-border metal-card rounded-[1.5rem] p-6">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">
        {title}
      </p>
      <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
