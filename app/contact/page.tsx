import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Kesler Aristide-Bonheur, MBA, PMP - PMP-certified Digital Manufacturing & MES professional for MES, pharma manufacturing systems, and manufacturing systems integration work.",
};

const email = "kesleraristide@gmail.com";

const opportunities = [
  "Recruiters hiring for PMP-certified MES and digital manufacturing roles",
  "Teams modernizing EBR workflows and shop-floor execution",
  "Pharma manufacturing systems, validation, and integration partners",
  "Consulting conversations around GMP manufacturing systems",
];

export default function ContactPage() {
  return (
    <main className="cinematic-shell px-6 py-24 text-white">
      <div className="blueprint-grid" />
      <div className="light-sweep" />

      <div className="relative mx-auto grid min-h-[calc(100vh-12rem)] max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <section className="animate-fade-up space-y-7">
          <div className="section-label">Contact Channel</div>
          <h1 className="text-5xl font-semibold leading-[0.96] tracking-tight md:text-7xl">
            Let&apos;s build cleaner manufacturing systems.
          </h1>
          <p className="max-w-3xl text-xl leading-9 text-slate-300">
            Open to conversations with recruiters, MES consulting teams, digital
            manufacturing groups, and systems roles focused on PMP-certified
            project delivery, GMP execution, PAS-X, Syncade, EBR workflows,
            CSV, and manufacturing systems integration.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {opportunities.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="animate-fade-up space-y-5 [animation-delay:120ms]">
          <a
            href={`mailto:${email}`}
            className="luxury-border glow-card shimmer-line block rounded-[2rem] p-8 transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_110px_rgba(34,211,238,0.16)]"
          >
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-200">
              Primary Email
            </p>
            <p className="mt-5 break-words text-3xl font-semibold leading-tight md:text-4xl">
              {email}
            </p>
            <p className="mt-5 text-slate-300">
              Best for opportunities, project conversations, and professional
              introductions.
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/kesler-bonheur-mba-abba46181/"
            target="_blank"
            rel="noreferrer"
            className="luxury-border metal-card block rounded-[2rem] p-8 transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_100px_rgba(245,203,126,0.1)]"
          >
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-100">
              LinkedIn
            </p>
            <p className="mt-5 break-words text-2xl font-semibold leading-tight">
              linkedin.com/in/kesler-bonheur-mba-abba46181
            </p>
          </a>
        </section>
      </div>
    </main>
  );
}
