export default function SkillsPage() {
  const groups = [
    {
      title: "Manufacturing & GMP",
      items: ["eBR/eDHR execution", "Deviations & exceptions", "Batch execution mindset", "ALCOA+ data integrity"],
    },
    {
      title: "MES & Digital",
      items: ["PAS-X (current)", "Syncade (exposure)", "Authoring concepts", "Recipe logic & exception handling"],
    },
    {
      title: "Systems & Integration",
      items: ["ERP ↔ MES ↔ SCADA concepts", "SQL for troubleshooting", "APIs & data flows", "ISA-95 language"],
    },
    {
      title: "Infrastructure & Validation",
      items: ["Dev/Test/Prod environments", "Change control mindset", "CSV lifecycle basics (URS/FRS/IQ/OQ/PQ)", "Windows fundamentals"],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold">Skills</h1>

        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((g) => (
            <div key={g.title} className="rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold">{g.title}</h2>
              <ul className="mt-4 space-y-2 text-gray-300 list-disc pl-5">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
