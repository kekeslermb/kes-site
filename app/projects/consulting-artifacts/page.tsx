import Link from "next/link";

export default function ConsultingArtifactsHub() {
  const artifacts = [
    {
      title: "Digital Manufacturing Blueprint",
      subtitle: "Strategy-to-execution blueprint (PDF)",
      description:
        "A structured blueprint that frames the problem, clarifies the current state, defines a target state, and outlines the capabilities and steps required to execute a digital manufacturing program in a regulated environment.",
      previewImg: "/pwc/digital-manufacturing-blueprint.png",
      pdfHref: "/pwc/digital-manufacturing-blueprint.pdf",
      bullets: [
        "Clarifies current state vs. target state and the gaps that matter",
        "Defines the capability model (process, people, data, technology)",
        "Translates vision into an actionable, phased approach",
      ],
      tags: ["Blueprint", "Operating Model", "Target State", "Execution Plan"],
    },
    {
      title: "Value Case",
      subtitle: "Benefits / ROI model (PDF)",
      description:
        "A value case model that quantifies impact, documents assumptions, and ties benefits to measurable outcomes — used to prioritize work and justify investment with stakeholders.",
      previewImg: "/pwc/value-case.png",
      pdfHref: "/pwc/value-case.pdf",
      bullets: [
        "Separates hard savings vs. soft benefits and ties to KPIs",
        "Documents assumptions so the business case is defensible",
        "Supports prioritization and sequencing decisions",
      ],
      tags: ["Business Case", "ROI", "Benefits", "Prioritization"],
    },
    {
      title: "Blueprint / Roadmap",
      subtitle: "Phased delivery roadmap + governance (PDF)",
      description:
        "A roadmap that shows how the work delivers over time, with phases, milestones, and controls. Built with a validation-aware mindset so delivery remains compliant, predictable, and auditable.",
      previewImg: "/pwc/roadmap-blueprint.png",
      pdfHref: "/pwc/roadmap-blueprint.pdf",
      bullets: [
        "Phased plan with milestones, dependencies, and decision points",
        "CSV-aware delivery structure (URS/FRS/IQ/OQ/PQ alignment)",
        "Lightweight governance: ownership, change control, risk tracking",
      ],
      tags: ["Roadmap", "Governance", "CSV", "Delivery Discipline"],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Consulting Artifacts
          </h1>

          <p className="text-gray-300 max-w-3xl leading-relaxed">
            A small collection of client-facing artifacts demonstrating structured problem framing,
            measurable value definition, and delivery planning for digital manufacturing programs.
          </p>

          <div className="flex flex-wrap gap-3 pt-2 text-sm text-gray-400">
            <span className="rounded-full border border-gray-800 px-4 py-1">Problem framing</span>
            <span className="rounded-full border border-gray-800 px-4 py-1">Target state</span>
            <span className="rounded-full border border-gray-800 px-4 py-1">Value definition</span>
            <span className="rounded-full border border-gray-800 px-4 py-1">Delivery planning</span>
          </div>
        </section>

        <section className="grid gap-8">
          {artifacts.map((a) => (
            <div
              key={a.title}
              className="rounded-2xl border border-gray-800 p-6 md:p-8"
            >
              <div className="grid gap-8 md:grid-cols-[360px_1fr] items-start">
                <div className="rounded-xl border border-gray-800 overflow-hidden bg-black/40">
                  <img
                    src={a.previewImg}
                    alt={`${a.title} preview`}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <h2 className="text-2xl md:text-3xl font-medium">{a.title}</h2>
                    <p className="text-sm text-gray-400">{a.subtitle}</p>
                  </div>

                  <p className="text-gray-300 leading-relaxed max-w-3xl">
                    {a.description}
                  </p>

                  <ul className="list-disc pl-5 text-gray-400 space-y-1">
                    {a.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                    {a.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-gray-800 px-3 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href={a.pdfHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
                    >
                      View PDF
                    </a>

                    <a
                      href={a.pdfHref}
                      download
                      className="inline-block px-6 py-3 rounded-lg border border-gray-700 text-gray-200 hover:border-gray-500 transition"
                    >
                      Download PDF
                    </a>
                  </div>

                  <div className="pt-1 text-xs text-gray-600">
                    Note: visuals are illustrative examples created for portfolio demonstration.
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="pt-2">
          <Link
            href="/projects"
            className="text-sm text-gray-400 underline hover:text-white transition"
          >
            ← Back to Projects
          </Link>
        </section>
      </div>
    </main>
  );
}
