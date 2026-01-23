import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-5xl font-bold">HOME PAGE TEST ✅</h1>
      <p className="mt-4 text-gray-300">
        If you can see this, the root route is working and nothing is redirecting you away.
      </p>

      <div className="mt-10 relative h-[240px] w-[240px] overflow-hidden rounded-2xl border border-gray-800">
        <Image src="/headshot.png" alt="Headshot" fill className="object-cover" priority />
      </div>
    </main>
  );
}
