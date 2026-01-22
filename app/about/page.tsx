export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold">About</h1>

        <p className="text-gray-300 leading-relaxed">
          I’m Kesler Bonheur — a manufacturing professional transitioning into
          MES and digital manufacturing systems. I’m focused on building GMP-ready
          workflows, understanding real plant execution, and translating it into
          reliable systems.
        </p>

        <p className="text-gray-400 leading-relaxed">
          I’m currently working with PAS-X MES and DeltaV in a regulated environment,
          and I’m building a small portfolio system (“SimpleMES”) to showcase MES
          authoring concepts, exception handling, and integration thinking.
        </p>
      </div>
    </main>
  );
}
