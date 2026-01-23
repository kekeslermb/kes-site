import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Kesler Aristide-Bonheur — manufacturing professional focused on MES, digital manufacturing systems, and GMP-ready execution in regulated environments.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold">About</h1>

        <p className="text-gray-300 leading-relaxed">
          I’m Kesler Aristide-Bonheur — a manufacturing professional transitioning
          deeper into MES and digital manufacturing systems. I’m focused on building
          GMP-ready workflows, understanding real plant execution, and translating
          it into reliable systems that operators and QA can trust.
        </p>

        <p className="text-gray-400 leading-relaxed">
          I’m currently working with PAS-X MES and DeltaV in a regulated environment,
          and I’m building a small portfolio system (“SimpleMES”) to showcase MES
          authoring concepts, exception handling, and integration thinking.
        </p>

        <div className="rounded-2xl border border-gray-800 bg-black/30 p-6">
          <h2 className="text-lg font-semibold">What I’m optimizing right now</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-400">
            <li>Practical MES workflows (execution, traceability, exceptions)</li>
            <li>GMP/CSV mindset (clean changes, audit-ready thinking)</li>
            <li>Interfaces & systems thinking (how data moves across a plant)</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
