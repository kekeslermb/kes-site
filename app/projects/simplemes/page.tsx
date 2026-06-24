import type { Metadata } from "next";
import Link from "next/link";

const LIVE_DEMO_URL = "https://simplemes-manufacturing-os.vercel.app";

export const metadata: Metadata = {
  title: "SimpleMES Manufacturing OS",
  description:
    "SimpleMES Manufacturing OS is a pharma/biotech MES portfolio simulation demonstrating EBR execution, GMP auditability, QC/LIMS visibility, and operator-friendly digital manufacturing workflows.",
};

const tags = [
  "MES",
  "Digital Manufacturing",
  "GMP",
  "EBR",
  "QA",
  "QC/LIMS",
  "Next.js",
  "TypeScript",
  "Prisma",
];

const whyBuilt = [
  "Legacy MES systems are powerful but often feel clunky, fragmented, and hard to navigate.",
  "Operators often struggle to find the correct SOP or reference document at the point of execution.",
  "Simple corrections can become stressful because systems do not always provide clear, GMP-safe correction paths.",
  "QC/LIMS sample results are often disconnected from the batch record.",
  "Scheduling, shift handoff, SOP revisions, and training readiness are often not visible where operators and supervisors need them.",
  "SimpleMES explores a cleaner, more human-centered MES experience while preserving auditability, role-based access, electronic signatures, controlled corrections, QA review, and batch release readiness.",
];

const keyFeatures = [
  "Modern manufacturing dashboard",
  "Role-based demo experience",
  "Product and recipe management",
  "Recipe versioning",
  "SOP/reference document visibility",
  "Batch lifecycle tracking",
  "Electronic batch record execution",
  "Operator confirmations and signatures",
  "Second-person verification",
  "Equipment and material lot verification",
  "Guided operator correction decision trees",
  "Deviations and CAPA",
  "QA review and release readiness",
  "QC/LIMS sample visibility",
  "Simulated process data visibility",
  "Manufacturing schedule",
  "Shift handoff log",
  "Change control / recipe change requests",
  "SOP revision and training acknowledgment readiness",
  "Audit trail",
  "Global search",
  "Reports",
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Prisma",
  "PostgreSQL-ready data model",
  "Vercel deployment",
];

export default function SimpleMESPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl space-y-14">
        <section className="space-y-6">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
              Flagship project
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              SimpleMES Manufacturing OS
            </h1>
          </div>

          <p className="max-w-3xl text-lg leading-8 text-gray-300">
            SimpleMES Manufacturing OS is a non-proprietary pharma/biotech MES
            portfolio simulation designed to demonstrate how regulated
            manufacturing workflows can be modernized without losing GMP
            control. It brings together electronic batch record execution,
            controlled recipe versioning, SOP visibility, operator confirmations,
            equipment/material verification, guided correction decision trees,
            deviations/CAPA, QA review, QC/LIMS sample visibility, simulated
            process data, manufacturing scheduling, shift handoff, change
            control, and SOP/training readiness in one clean workspace.
          </p>

          <div className="flex flex-wrap gap-3 text-sm text-gray-300">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-cyan-200/20 bg-cyan-200/[0.06] px-4 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <a
              href={LIVE_DEMO_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-cyan-200 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-slate-950 transition hover:bg-white"
            >
              View Live Demo →
            </a>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full border border-gray-700 px-6 py-3 text-sm font-semibold text-gray-300 transition hover:border-gray-500 hover:text-white"
            >
              Back to Projects
            </Link>
          </div>

          <p className="text-sm text-gray-500">
            Source code private; available upon request for hiring/review
            purposes.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.035] p-6">
          <h2 className="text-2xl font-medium">Why I built this</h2>
          <ul className="mt-5 space-y-3 text-gray-400">
            {whyBuilt.map((item) => (
              <li key={item} className="flex gap-3 leading-7">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-medium">Key Features</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {keyFeatures.map((feature) => (
              <div
                key={feature}
                className="rounded-xl border border-gray-800 bg-white/[0.025] px-4 py-3 text-sm text-gray-300"
              >
                {feature}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-2xl border border-gray-800 bg-black/30 p-6">
            <h2 className="text-2xl font-medium">Tech Stack</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {techStack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-gray-800 px-3 py-1 text-sm text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-black/30 p-6">
            <h2 className="text-2xl font-medium">Screenshot support</h2>
            <p className="mt-3 leading-7 text-gray-400">
              Add SimpleMES screenshots to this portfolio repo under
              <code className="mx-1 rounded bg-white/10 px-1.5 py-0.5 text-gray-200">
                public/projects/simplemes/
              </code>
              if you want this page to show visual previews. Suggested images:
              dashboard, EBR execution, QA review, QC/LIMS, shift handoff, and
              audit trail.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200/20 bg-amber-200/[0.055] p-6">
          <h2 className="text-2xl font-medium">Disclaimer</h2>
          <p className="mt-3 leading-7 text-gray-300">
            SimpleMES is a portfolio demonstration only. It uses fictional
            products, batches, recipes, SOPs, materials, equipment, QC samples,
            users, and process data. It is not validated GMP production software
            and does not use proprietary employer data.
          </p>
        </section>
      </div>
    </main>
  );
}
