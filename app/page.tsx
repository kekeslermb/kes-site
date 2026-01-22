import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-[260px_1fr] items-center">
          
          {/* IMAGE */}
          <div className="flex justify-center md:justify-start">
            <div className="h-64 w-64 overflow-hidden rounded-3xl border border-gray-800 shadow-lg">
              <img
                src="/headshot.png"
                alt="Kesler Aristide-Bonheur headshot"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* COPY */}
          <div className="space-y-7 text-center md:text-left">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
                Kesler Aristide-Bonheur
              </h1>

              <p className="text-lg md:text-2xl text-gray-300">
                MES & Digital Manufacturing Systems
              </p>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-2xl">
              Manufacturing professional transitioning into Manufacturing Execution
              Systems (MES), focused on GMP-compliant digital systems, IT/OT
              integration, and production-ready execution workflows.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
              <Link
                href="/projects"
                className="px-7 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
              >
                View Projects
              </Link>

              <Link
                href="/contact"
                className="px-7 py-3 rounded-lg border border-gray-700 text-gray-200 hover:border-gray-500 transition"
              >
                Contact
              </Link>
            </div>

            {/* SIGNAL BAR */}
            <div className="pt-6 flex flex-wrap gap-3 justify-center md:justify-start text-sm text-gray-400">
              <span className="rounded-full border border-gray-800 px-4 py-1">
                PAS-X
              </span>
              <span className="rounded-full border border-gray-800 px-4 py-1">
                DeltaV
              </span>
              <span className="rounded-full border border-gray-800 px-4 py-1">
                GMP / CSV
              </span>
              <span className="rounded-full border border-gray-800 px-4 py-1">
                IT / OT Integration
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* SUBTLE FOOT NOTE */}
      <section className="border-t border-gray-900 py-10 text-center text-sm text-gray-500">
        Building real systems • Not slides
      </section>
    </main>
  );
}
