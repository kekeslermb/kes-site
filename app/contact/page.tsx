import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Kesler Aristide-Bonheur — Digital Manufacturing, MES, and systems-focused work in regulated environments.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-3xl mx-auto space-y-10">
        <header className="space-y-3">
          <h1 className="text-4xl font-bold">Contact</h1>
          <p className="text-gray-400">
            For opportunities, collaboration, or systems work — reach out.
          </p>
        </header>

        <section className="rounded-2xl border border-gray-800 bg-black/30 p-6 space-y-4">
          <div className="space-y-2">
            <p className="text-gray-300">
              <span className="text-gray-400">Email: </span>
              <a
                className="underline hover:text-white"
                href="mailto:kekeslermb@gmail.com"
              >
                kekeslermb@gmail.com
              </a>
            </p>

            <p className="text-gray-300">
              <span className="text-gray-400">LinkedIn: </span>
              <a
                className="underline hover:text-white"
                href="https://www.linkedin.com/in/kesler-bonheur-mba-abba46181/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/kesler-bonheur-mba-abba46181
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
