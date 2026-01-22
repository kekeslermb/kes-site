// app/projects/projects-data.ts

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  href: string;
};

export const projects: Project[] = [
  {
    slug: "simplemes",
    title: "SimpleMES (Portfolio Build)",
    summary:
      "A lightweight MES-style portfolio system demonstrating workflow execution, status tracking, and compliance-minded design.",
    tags: ["MES", "Digital Manufacturing", "Systems"],
    href: "/projects/simplemes",
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
