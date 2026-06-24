// app/projects/projects-data.ts

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  href: string;
  liveDemoHref?: string;
  sourceNote?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "simplemes",
    title: "SimpleMES Manufacturing OS",
    summary:
      "A completed pharma/biotech MES portfolio simulation demonstrating EBR execution, GMP-style auditability, QC/LIMS visibility, guided operator corrections, scheduling, shift handoff, change control, and SOP/training readiness.",
    tags: ["MES", "Digital Manufacturing", "GMP", "EBR", "QA", "QC/LIMS", "Next.js", "TypeScript", "Prisma"],
    href: "/projects/simplemes",
    liveDemoHref: "https://simplemes-manufacturing-os.vercel.app",
    sourceNote: "Source code private; available upon request for hiring/review purposes.",
    featured: true,
  },
  {
    slug: "consulting-artifacts",
    title: "Consulting Artifacts",
    summary:
      "System-level artifacts that show how I assess current state, design target state, and advise on execution improvements in regulated manufacturing.",
    tags: ["Systems Thinking", "Process Design", "GxP Mindset"],
    href: "/projects/consulting-artifacts",
  },
];
