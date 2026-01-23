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
          Real systems work focused on execution, digital manufacturing, and delivery.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.slug}
            className="rounded-2xl border border-gray-800 bg-black/30 p-6"
          >
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="mt-2 text-gray-400">{p.summary}</p>

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

            <div className="mt-6">
              <Link
                href={p.href}
                className="inline-block text-sm underline text-gray-300 hover:text-white"
              >
                View project →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
