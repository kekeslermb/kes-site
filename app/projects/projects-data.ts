// app/projects/projects-data.ts

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  href: string;
  featured?: boolean;
  liveDemoHref?: string;
  sourceNote?: string;
};

export const projects: Project[] = [
  {
    slug: "simplemes",
    title: "SimpleMES Manufacturing OS",
    summary:
      "A completed pharma/biotech MES portfolio simulation demonstrating EBR execution, GMP-style auditability, QC/LIMS visibility, guided operator corrections, scheduling, shift handoff, change control, and SOP/training readiness.",
    tags: [
      "MES",
      "Digital Manufacturing",
      "GMP",
      "EBR",
      "QA",
      "QC/LIMS",
      "Next.js",
      "TypeScript",
      "Prisma",
    ],
    href: "/projects/simplemes",
    featured: true,
    liveDemoHref: "https://simplemes-manufacturing-os.vercel.app",
    sourceNote:
      "Source code private; available upon request for hiring/review purposes.",
  },
  {
    slug: "consulting-artifacts",
    title: "Consulting Artifacts",
    summary:
      "Client-ready MES and digital manufacturing artifacts showing assessment, target-state design, implementation planning, and value-case framing for regulated life sciences operations.",
    tags: ["MES Consulting", "Digital Manufacturing", "GxP Delivery"],
    href: "/projects/consulting-artifacts",
  },
];
