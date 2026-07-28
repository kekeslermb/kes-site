import type { Metadata } from "next";
import Link from "next/link";

const DECK_URL = "/consulting-artifacts/tulip-solar-panel-digital-traveler.pptx";

export const metadata: Metadata = {
  title: "Tulip Solar Panel Digital Traveler",
  description:
    "Composable MES prototype for guided assembly, defect logging, quality review, and production visibility.",
};

const tags = [
  "Tulip",
  "Composable MES",
  "Digital Traveler",
  "Low-Code",
  "Guided Assembly",
  "Defect Logging",
  "Quality Review",
  "Production Visibility",
];

const solutionItems = [
  "Operator start screen",
  "Work order capture",
  "Panel serial number capture",
  "Station and operator context",
  "Guided assembly steps",
  "Required step confirmations",
  "Pass/fail inspection logic",
  "Defect type, severity, and notes capture",
  "Supervisor or quality review",
  "Production visibility metrics",
];

const dataCaptured = [
  "Work order",
  "Panel serial number",
  "Station",
  "Operator",
  "Step completion context",
  "Inspection result",
  "Assembly notes",
  "Timestamps",
  "Defect type",
  "Severity",
  "Defect notes",
  "Disposition status",
];

const businessValue = [
  "Reduced manual paper review",
  "Improved data completeness",
  "Faster defect visibility",
  "Better traceability by work order, serial number, station, and operator",
  "Improved supervisor and quality review readiness",
  "Better production visibility around units completed, open defects, rework required, first-pass yield, and average response time",
];

export default function TulipDigitalTravelerPage() {
  return (
    <main className="cinematic-shell px-6 py-24 text-white">
      <div className="blueprint-grid" />
      <div className="light-sweep" />

      <div className="relative mx-auto max-w-6xl space-y-12">
        <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="animate-fade-up space-y-6">
            <p className="text-sm text-slate-400">
              <Link
                href="/projects"
                className="underline decoration-cyan-200/40 underline-offset-4 hover:text-white"
              >
                Projects
              </Link>{" "}
              / Tulip Digital Traveler
            </p>
            <div className="section-label">Composable MES Prototype</div>
            <h1 className="text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Tulip Solar Panel Digital Traveler
            </h1>
            <p className="max-w-3xl text-xl leading-9 text-slate-300">
              Composable MES prototype for guided assembly, defect logging,
              quality review, and production visibility.
            </p>
          </div>

          <div className="glow-card luxury-border animate-fade-up rounded-[2rem] p-7 md:p-9 [animation-delay:100ms]">
            <p className="text-lg leading-8 text-slate-300">
              A Tulip-based digital traveler prototype built to replace
              paper-based solar panel assembly instructions with guided
              operator steps, defect logging, quality review, and production
              visibility.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={DECK_URL}
                target="_blank"
                rel="noreferrer"
                className="luxury-border rounded-full bg-cyan-200 px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-slate-950 transition hover:bg-white"
              >
                View Deck
              </a>
              <Link
                href="/projects"
                className="luxury-border rounded-full bg-white/[0.055] px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/10"
              >
                Back to Projects
              </Link>
            </div>
          </div>
        </section>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-cyan-200/15 bg-cyan-200/[0.055] px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-cyan-50"
            >
              {tag}
            </span>
          ))}
        </div>

        <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <ContentCard
            title="Project Overview"
            body="This project was a Tulip-based digital traveler prototype for a discrete solar panel manufacturing workflow. The goal was to digitize paper-based work instructions, improve data accuracy, create traceability by work order and panel serial number, and provide better real-time visibility into defects and production status."
          />
          <ContentCard
            title="Problem"
            body="The current-state process relied on paper work instructions, handwritten checks, manual defect reporting, and delayed supervisor/quality review. This created risks around version control, incomplete records, delayed defect response, transcription errors, and limited production visibility."
          />
        </section>

        <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <ListCard title="Proposed Tulip Solution" items={solutionItems} />
          <ListCard title="Data Captured" items={dataCaptured} columns />
        </section>

        <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <ListCard title="Business Value" items={businessValue} />
          <ContentCard
            title="Why It Matters"
            body="This project demonstrates the ability to translate manufacturing requirements into a usable digital workflow, think like an operator, and rapidly build with Tulip's composable MES approach."
          />
        </section>

        <section className="rounded-[2rem] border border-amber-200/20 bg-amber-200/[0.055] p-6">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-100">
            Disclaimer
          </p>
          <p className="mt-4 leading-7 text-amber-50/85">
            This is a non-proprietary portfolio/take-home style project using
            fictional manufacturing context and representative values. It does
            not use confidential employer data and is not validated production
            software.
          </p>
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

function ListCard({
  title,
  items,
  columns = false,
}: {
  title: string;
  items: string[];
  columns?: boolean;
}) {
  return (
    <article className="luxury-border metal-card rounded-[1.5rem] p-6">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">
        {title}
      </p>
      <ul
        className={`mt-5 gap-3 text-sm leading-7 text-slate-300 ${
          columns ? "grid sm:grid-cols-2" : "space-y-3"
        }`}
      >
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
