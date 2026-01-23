import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kesler Bonheur | Digital Manufacturing & MES",
  description:
    "Systems-focused digital manufacturing portfolio. MES, integration, execution models, and consulting artifacts.",
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 space-y-12">
      <section className="grid gap-10 md:grid-cols-[240px_1fr] md:items-center">
        <div className="flex justify-center md:justify-start">
          <div className="relative h-[220px] w-[220px] overflow-hidden rounded-2xl border border-gray-800 bg-black/30">
            <Image
              src="/headshot.png"
              alt="Kesler Bonheur"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-5">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Kesler Bonheur
          </h1>

          <p className="text-gray-300 max-w-2xl">
            Digital manufacturing and systems-focused professional working at the intersection of
            MES, automation, integration, and regulated execution. I build clear operating models,
            deliverable artifacts, and practical execution plans that drive measurable outcomes.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-xl border border-gray-800 bg-black/30 px-4 py-2 text-sm text-gray-100 hover:bg-black/40 transition"
            >
              View Projects →
            </Link>

            <Link
              href="/projects/consulting-artifacts"
              className="rounded-xl border border-gray-800 bg-black/30 px-4 py-2 text-sm text-gray-100 hover:bg-black/40 transition"
            >
              Consulting Artifacts →
            </Link>

            <Link
              href="/resume"
              className="rounded-xl border border-gray-800 bg-black/30 px-4 py-2 text-sm text-gray-100 hover:bg-black/40 transition"
            >
              Resume →
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-gray-800 bg-black/30 px-4 py-2 text-sm text-gray-100 hover:bg-black/40 transition"
            >
              Contact →
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-gray-800 bg-black/30 p-6">
          <h2 className="text-lg font-semibold">Systems Thinking</h2>
          <p className="mt-2 text-sm text-gray-300">
            I map current state → target state, surface constraints, and build execution plans that hold up in real ops.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-black/30 p-6">
          <h2 className="text-lg font-semibold">MES & Integration</h2>
          <p className="mt-2 text-sm text-gray-300">
            ERP ↔ MES ↔ Automation flows, exceptions, traceability, and operational visibility in regulated environments.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-black/30 p-6">
          <h2 className="text-lg font-semibold">Execution & Adoption</h2>
          <p className="mt-2 text-sm text-gray-300">
            Change control, training, KPI definition, and rollout structure so improvements actually stick.
          </p>
        </div>
      </section>
    </main>
  );
}
