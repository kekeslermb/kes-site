import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "PMP-certified Digital Manufacturing & MES skills across PAS-X, Syncade, GMP, EBR workflows, CSV, pharma manufacturing systems, and manufacturing systems integration.",
};

const groups = [
  {
    code: "01",
    title: "MES & Digital Manufacturing",
    signal: "Execution systems",
    items: [
      "PAS-X MES",
      "Syncade exposure",
      "MES authoring concepts",
      "EBR workflows",
      "Recipe logic and exception handling",
      "Digital manufacturing operations",
    ],
  },
  {
    code: "02",
    title: "Manufacturing & GMP",
    signal: "Regulated operations",
    items: [
      "Regulated GMP manufacturing",
      "Shop-floor execution",
      "Batch execution mindset",
      "Deviations and exceptions",
      "ALCOA+ data integrity",
      "Operator-centered workflow thinking",
    ],
  },
  {
    code: "03",
    title: "Systems, Data & Integration",
    signal: "Connected plant",
    items: [
      "DeltaV context",
      "ERP / MES / SCADA concepts",
      "SQL for troubleshooting",
      "APIs and data flows",
      "ISA-95 language",
      "Systems thinking",
    ],
  },
  {
    code: "04",
    title: "Validation, Quality & Compliance",
    signal: "Audit ready",
    items: [
      "GMP/CSV thinking",
      "Change control mindset",
      "Audit-ready documentation habits",
      "URS/FRS/IQ/OQ/PQ lifecycle basics",
      "Quality-first execution",
    ],
  },
  {
    code: "05",
    title: "Leadership & Shop-Floor Execution",
    signal: "Operational clarity",
    items: [
      "Cross-functional communication",
      "Manufacturing systems troubleshooting",
      "Issue framing and escalation",
      "Operations-to-systems translation",
      "Practical execution leadership",
    ],
  },
  {
    code: "06",
    title: "Professional Development",
    signal: "Forward path",
    items: [
      "Building toward MES authoring",
      "Project Management Professional (PMP)® certified",
      "Pursuing AWS Solutions Architect Associate",
      "Security+ foundation",
      "Lean Six Sigma / process improvement",
      "Cloud-enabled manufacturing systems",
    ],
  },
];

export default function SkillsPage() {
  return (
    <main className="cinematic-shell px-6 py-24 text-white">
      <div className="blueprint-grid" />
      <div className="light-sweep" />

      <div className="relative mx-auto max-w-7xl space-y-14">
        <header className="animate-fade-up max-w-4xl space-y-5">
          <div className="section-label">Capability Matrix</div>
          <h1 className="text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
            Skills built for the manufacturing systems layer.
          </h1>
          <p className="max-w-3xl text-xl leading-9 text-slate-300">
            A practical mix of PMP-certified project delivery, MES, GMP
            operations, systems integration, validation thinking, and
            shop-floor leadership.
          </p>
        </header>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {groups.map((group, index) => (
            <article
              key={group.title}
              className="luxury-border metal-card shimmer-line group animate-fade-up rounded-[1.65rem] p-6 transition duration-500 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_32px_100px_rgba(34,211,238,0.14)]"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">
                    {group.signal}
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold leading-tight">
                    {group.title}
                  </h2>
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-2 text-xs font-bold text-slate-300">
                  {group.code}
                </span>
              </div>

              <div className="my-6 h-px bg-gradient-to-r from-cyan-200/50 via-white/10 to-transparent" />

              <ul className="space-y-3 text-sm leading-6 text-slate-300">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-cyan-200 to-amber-100" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
