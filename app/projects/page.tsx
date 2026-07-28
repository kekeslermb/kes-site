import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./projects-data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects and portfolio work by Kesler Aristide-Bonheur across MES, systems integration, and digital manufacturing execution.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-2 text-gray-400">
          Real systems work focused on execution, digital manufacturing, and
          delivery.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.slug}
            className={`rounded-2xl border p-6 ${
              p.featured
                ? "border-cyan-300/35 bg-cyan-300/[0.055] shadow-[0_0_70px_rgba(34,211,238,0.08)] md:col-span-2"
                : "border-gray-800 bg-black/30"
            }`}
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                {p.featured && (
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                    Flagship project
                  </p>
                )}
                {!p.featured && p.category && (
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100/70">
                    {p.category}
                  </p>
                )}
                <h2 className="text-xl font-semibold">{p.title}</h2>
              </div>
              {p.featured && (
                <span className="w-fit rounded-full border border-cyan-200/25 bg-cyan-200/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100">
                  Live demo available
                </span>
              )}
            </div>

            <p className="mt-3 max-w-4xl text-gray-400">{p.summary}</p>

            <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-400">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-800 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            {p.sourceNote && (
              <p className="mt-4 text-sm text-gray-500">{p.sourceNote}</p>
            )}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {p.liveDemoHref && (
                <a
                  href={p.liveDemoHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-200 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-slate-950 transition hover:bg-white"
                >
                  View Live Demo
                </a>
              )}
              <Link
                href={p.href}
                className="inline-flex items-center justify-center rounded-full border border-gray-700 px-5 py-3 text-sm font-semibold text-gray-300 transition hover:border-gray-500 hover:text-white"
              >
                {p.featured ? "Read Case Study" : "View Project"}
              </Link>
              {p.deckHref && (
                <a
                  href={p.deckHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-cyan-200/25 bg-cyan-200/[0.06] px-5 py-3 text-sm font-semibold text-cyan-50 transition hover:border-cyan-200/45 hover:bg-cyan-200/[0.1]"
                >
                  View Deck
                </a>
              )}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
