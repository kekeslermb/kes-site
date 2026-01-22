import Link from "next/link";
import Image from "next/image";

export default function Artifact3Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <header className="mb-10">
        <p className="text-sm text-gray-400">
          <Link href="/projects/consulting-artifacts" className="underline hover:text-white">
            ← Back to Consulting Artifacts
          </Link>
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          Artifact 3 — Digital Manufacturing Blueprint
        </h1>
        <p className="mt-3 text-gray-400 leading-relaxed">
          A portfolio-style blueprint showing scope, current-state reality, and execution goals for MES-enabled
          operations in regulated manufacturing.
        </p>

        <div className="mt-5 flex flex-wrap gap-2 text-sm text-gray-400">
          {["Blueprint", "Scope", "Execution Model"].map((tag) => (
            <span key={tag} className="rounded-full border border-gray-800 px-3 py-1">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <section className="space-y-6">
        <div className="rounded-2xl border border-gray-800 bg-black/30 p-6">
          <h2 className="text-2xl font-medium">Blueprint visual</h2>
          <p className="mt-2 text-gray-400">Click to open full-size.</p>

          <a
            href="/artifacts/artifact-3.png"
            target="_blank"
            rel="noreferrer"
            className="mt-4 block overflow-hidden rounded-xl border border-gray-900 bg-black/40"
          >
            <Image
              src="/artifacts/artifact-3.png"
              alt="Digital manufacturing blueprint document"
              width={1800}
              height={1100}
              className="h-auto w-full object-contain"
              priority
            />
          </a>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-black/30 p-6">
          <h2 className="text-2xl font-medium">What this demonstrates</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-400">
            <li>Structured consulting thinking: objective → scope → current state → target direction</li>
            <li>Clear mapping between execution pain and system-enabled improvement</li>
            <li>Communication that’s readable for both ops and leadership</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
