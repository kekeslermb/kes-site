import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Kesler Aristide-Bonheur - MES, digital manufacturing systems, shop-floor execution, GMP/CSV thinking, and manufacturing systems integration.",
};

const profileCards = [
  {
    label: "Current",
    title: "PAS-X MES + DeltaV",
    body: "Working in a regulated GMP manufacturing environment where execution quality, systems reliability, and production realities matter.",
  },
  {
    label: "Building",
    title: "MES authoring",
    body: "Actively developing toward recipe, workflow, exception, and configuration ownership in modern MES environments.",
  },
  {
    label: "Pursuing",
    title: "PMP certification",
    body: "Strengthening delivery discipline, stakeholder communication, and structured execution for manufacturing systems work.",
  },
  {
    label: "Pursuing",
    title: "AWS Solutions Architect Associate",
    body: "Building cloud architecture fluency to support digital manufacturing, integration, and scalable systems thinking.",
  },
  {
    label: "Focus",
    title: "Shop-floor MES leadership",
    body: "Focused on systems integration, GMP/CSV thinking, and translating operational friction into clearer digital execution.",
  },
];

export default function AboutPage() {
  return (
    <main className="cinematic-shell px-6 py-24 text-white">
      <div className="blueprint-grid" />
      <div className="light-sweep" />

      <div className="relative mx-auto max-w-7xl space-y-20">
        <header className="animate-fade-up grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <div className="section-label">Professional Profile</div>
            <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
              A systems-minded operator for digital manufacturing execution.
            </h1>
          </div>

          <div className="glow-card luxury-border rounded-[2rem] p-7 md:p-9">
            <p className="text-xl leading-9 text-slate-300">
              I am a MES & Digital Manufacturing Professional currently working
              with PAS-X MES and DeltaV in a regulated GMP manufacturing
              environment. My direction is clear: build toward MES authoring,
              lead with shop-floor context, and help manufacturing systems
              become more reliable, usable, and audit-ready.
            </p>
          </div>
        </header>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {profileCards.map((card, index) => (
            <article
              key={`${card.label}-${card.title}`}
              className="luxury-border metal-card animate-fade-up rounded-[1.5rem] p-6 transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_90px_rgba(34,211,238,0.12)]"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">
                {card.label}
              </p>
              <h2 className="mt-5 text-2xl font-semibold leading-tight">
                {card.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{card.body}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glow-card luxury-border shimmer-line rounded-[2rem] p-8 md:p-10">
            <div className="section-label">Operating Philosophy</div>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight">
              Make the system match the work.
            </h2>
            <p className="mt-6 text-lg leading-9 text-slate-300">
              Strong digital manufacturing work starts with the floor: how
              batches move, how exceptions surface, how operators interact with
              EBR workflows, and how quality expectations shape every change.
              I focus on bridging those realities with MES, automation, data,
              and compliance-minded execution.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-black/25 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
              Focus Stack
            </p>
            <div className="mt-6 space-y-4">
              {[
                "Digital manufacturing systems",
                "Shop-floor MES leadership",
                "GMP/CSV thinking",
                "Manufacturing systems integration",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 text-slate-200 transition duration-300 hover:border-emerald-300/35 hover:bg-emerald-300/[0.07]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
