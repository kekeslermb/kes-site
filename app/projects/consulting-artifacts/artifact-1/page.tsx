import Link from "next/link";
import Image from "next/image";

export default function Artifact1Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <header className="mb-10">
        <p className="text-sm text-gray-400">
          <Link href="/projects/consulting-artifacts" className="underline hover:text-white">
            ← Back to Consulting Artifacts
          </Link>
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          Artifact 1 — Digital Manufacturing Architecture
        </h1>
        <p className="mt-3 text-gray-400 leading-relaxed">
          A high-level systems view showing how enterprise, execution, control, and data layers connect in a
          digital manufacturing stack.
        </p>

        <div className="mt-5 flex flex-wrap gap-2 text-sm text-gray-400">
          {["ISA-95 Thinking", "Integration Layers", "Systems Architecture"].map((tag) => (
            <span key={tag} className="rounded-full border border-gray-800 px-3 py-1">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <section className="space-y-6">
        <div className="rounded-2xl border border-gray-800 bg-black/30 p-6">
          <h2 className="text-2xl font-medium">Architecture visual</h2>
          <p className="mt-2 text-gray-400">
            Click to open full-size.
          </p>

          <a
            href="/artifacts/artifact-1.png"
            target="_blank"
            rel="noreferrer"
            className="mt-4 block overflow-hidden rounded-xl border border-gray-900 bg-black/40"
          >
            <Image
              src="/artifacts/artifact-1.png"
              alt="Digital manufacturing architecture diagram"
              width={1800}
              height={1000}
              className="h-auto w-full object-contain"
              priority
            />
          </a>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-black/30 p-6">
          <h2 className="text-2xl font-medium">What this demonstrates</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-400">
            <li>Clear layering: enterprise → execution → control → data</li>
            <li>Where integrations live (ERP ↔ MES ↔ SCADA/PLC ↔ historian/reporting)</li>
            <li>Why systems context matters for troubleshooting + delivery</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
