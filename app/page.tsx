import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Kesler Aristide-Bonheur, MBA, PMP - PMP-certified Digital Manufacturing & MES Professional focused on PAS-X, Syncade, GMP, EBR workflows, CSV, pharma manufacturing systems, and manufacturing systems integration.",
};

const RESUME_URL = "/consulting-artifacts/resume.pdf";

const focusAreas = [
  "PAS-X",
  "Syncade",
  "PMP",
  "DeltaV",
  "GMP manufacturing",
  "EBR workflows",
  "CSV",
  "Shop-floor execution",
  "Pharma Manufacturing Systems",
  "Manufacturing systems integration",
];

const signalCards = [
  {
    id: "01",
    title: "PAS-X / Syncade",
    body: "MES workflow thinking, execution logic, recipe context, and troubleshooting discipline.",
  },
  {
    id: "02",
    title: "GMP / CSV",
    body: "Compliance-minded systems work shaped by data integrity, audit readiness, and clean change.",
  },
  {
    id: "03",
    title: "DeltaV / Automation",
    body: "Plant-floor context across automation touchpoints, handoffs, and execution realities.",
  },
  {
    id: "04",
    title: "MES Authoring Path",
    body: "Actively building toward authoring, configuration, and stronger digital manufacturing ownership.",
  },
];

export default function HomePage() {
  return (
    <main className="cinematic-shell px-6 text-white">
      <div className="blueprint-grid" />
      <div className="light-sweep" />

      <section className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 py-24 lg:grid-cols-[0.98fr_1.02fr]">
        <div className="animate-fade-up space-y-10">
          <div className="section-label">MES + Digital Operations</div>

          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-100/80">
              PMP-Certified Digital Manufacturing & MES Professional
            </p>
            <h1 className="max-w-5xl text-6xl font-semibold leading-[0.92] tracking-tight md:text-8xl xl:text-9xl">
              Kesler{" "}
              <span className="block bg-gradient-to-r from-white via-cyan-100 to-amber-100 bg-clip-text text-transparent">
                Aristide-Bonheur, MBA, PMP
              </span>
            </h1>
            <p className="max-w-2xl text-xl leading-9 text-slate-300 md:text-2xl">
              I work where regulated manufacturing, MES execution, project
              delivery, and digital systems meet: PAS-X, Syncade, DeltaV, GMP
              manufacturing, EBR workflows, shop-floor execution, and
              manufacturing systems integration.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projects/consulting-artifacts"
              className="luxury-border rounded-full bg-cyan-200 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.16em] text-slate-950 shadow-[0_0_50px_rgba(34,211,238,0.26)] transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:bg-white"
            >
              View Artifacts
            </Link>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="luxury-border rounded-full bg-white/[0.055] px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.16em] text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              Open Resume
            </a>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 lg:max-w-3xl lg:grid-cols-4">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-center text-xs font-medium uppercase tracking-[0.14em] text-slate-300"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:120ms] lg:min-h-[700px]">
          <div className="absolute right-0 top-10 hidden h-72 w-72 rounded-[3rem] border border-cyan-200/15 bg-cyan-200/[0.055] blur-sm lg:block" />
          <div className="absolute bottom-14 left-3 hidden h-64 w-64 rounded-[3rem] border border-amber-100/15 bg-amber-100/[0.045] blur-sm lg:block" />

          <div className="animate-float-soft luxury-border glow-card shimmer-line relative z-10 mx-auto w-full max-w-[430px] rounded-[2rem] p-5 sm:max-w-[470px] lg:absolute lg:left-0 lg:top-0 lg:mx-0 lg:w-[68%]">
            <Image
              src="/headshot.png"
              alt="Kesler Aristide-Bonheur"
              width={520}
              height={620}
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover brightness-105 contrast-105"
              priority
            />
            <div className="mt-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  Current Focus
                </p>
                <p className="mt-1 text-xl font-semibold">PAS-X + DeltaV</p>
              </div>
              <div className="rounded-full border border-cyan-200/25 px-4 py-2 text-sm text-cyan-100">
                GMP
              </div>
            </div>
          </div>

          <div className="relative z-20 mt-6 grid gap-4 sm:grid-cols-2 lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:w-[58%] lg:grid-cols-1">
            {signalCards.map((card, index) => (
              <article
                key={card.title}
                className="luxury-border metal-card rounded-2xl p-5 transition duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:scale-[1.01]"
                style={{ marginLeft: index > 0 ? `${index * 12}px` : 0 }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-xs font-bold tracking-[0.28em] text-cyan-200">
                    {card.id}
                  </span>
                  <div>
                    <h2 className="font-semibold text-white">{card.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {card.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
