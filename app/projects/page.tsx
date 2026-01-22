import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "SimpleMES",
      description:
        "A lightweight MES portfolio project demonstrating GMP-minded execution logic, traceability, and systems thinking.",
      href: "/projects/simplemes",
      tags: ["MES", "GMP", "Authoring", "In Progress"],
    },
    {
      title: "Consulting Artifacts (PwC-style)",
      description:
        "Three illustrative consulting artifacts demonstrating operating model clarity, integration thinking, and delivery discipline.",
      href: "/projects/consulting-artifacts",
      tags: ["Consulting", "Artifacts", "Client-Facing", "PwC"],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-12">
        <h1 className="text-4xl font-semibold">Projects</h1>

        <div className="grid gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-gray-800 p-6 space-y-4"
            >
              <h2 className="text-2xl font-medium">{p.title}</h2>

              <p className="text-gray-400 max-w-2xl">{p.description}</p>

              <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gray-800 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={p.href}
                className="inline-block text-sm underline text-gray-300 hover:text-white transition"
              >
                View project →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
