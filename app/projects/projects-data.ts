// app/projects/projects-data.ts

export type Project = {
  slug: string;
  title: string;
  category?: string;
  summary: string;
  tags: string[];
  href: string;
  featured?: boolean;
  liveDemoHref?: string;
  deckHref?: string;
  sourceNote?: string;
};

export const projects: Project[] = [
  {
    slug: "simplemes",
    title: "SimpleMES Manufacturing OS",
    category: "Flagship MES portfolio simulation",
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
    category: "MES consulting deliverables",
    summary:
      "Client-ready MES and digital manufacturing artifacts showing assessment, target-state design, implementation planning, and value-case framing for regulated life sciences operations.",
    tags: ["MES Consulting", "Digital Manufacturing", "GxP Delivery"],
    href: "/projects/consulting-artifacts",
  },
  {
    slug: "tulip-digital-traveler",
    title: "Tulip Solar Panel Digital Traveler",
    category: "Composable MES / Low-Code Manufacturing App",
    summary:
      "Composable MES prototype digitizing paper-based solar panel assembly through guided operator steps, defect capture, supervisor/quality review, and production visibility.",
    tags: [
      "Tulip",
      "Composable MES",
      "Digital Traveler",
      "Low-Code",
      "Guided Assembly",
      "Defect Logging",
      "Quality Review",
      "Production Visibility",
    ],
    href: "/projects/tulip-digital-traveler",
    deckHref: "/consulting-artifacts/tulip-solar-panel-digital-traveler.pptx",
  },
];
