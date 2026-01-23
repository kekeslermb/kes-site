import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      
      {/* Hero Image */}
      <div className="mb-8">
        <Image
          src="/headshot.png"
          alt="Kesler Bonheur"
          width={220}
          height={220}
          className="rounded-full border border-gray-700"
          priority
        />
      </div>

      {/* Name + Headline */}
      <h1 className="text-4xl font-bold mb-4">
        Kesler Bonheur
      </h1>

      <p className="text-gray-400 max-w-xl mb-8">
        Digital Manufacturing & MES Systems Professional  
        <br />
        Bridging operations, systems, and execution in regulated environments.
      </p>

      {/* Primary Actions */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/projects/consulting-artifacts"
          className="px-6 py-3 rounded-xl border border-gray-700 hover:border-white transition"
        >
          View Consulting Artifacts
        </Link>

        <Link
          href="/resume"
          className="px-6 py-3 rounded-xl border border-gray-700 hover:border-white transition"
        >
          View Resume
        </Link>
      </div>

    </main>
  );
}
