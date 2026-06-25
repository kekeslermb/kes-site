export type ArtifactSection = {
  title: string;
  items: string[];
};

export type ArtifactMetric = {
  label: string;
  baseline: string;
  target: string;
};

export type ConsultingArtifact = {
  id: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  description: string;
  pageHref: string;
  filePdf: string;
  filePng: string;
  tags: string[];
  summary: string;
  problem: string;
  observations: string[];
  recommendation: string;
  deliverables: string[];
  risks: string[];
  metrics: ArtifactMetric[];
  sections: ArtifactSection[];
};

export const disclaimer =
  "Illustrative portfolio artifact using fictional, non-proprietary examples. Not based on confidential employer data.";

export const artifacts: ConsultingArtifact[] = [
  {
    id: "01",
    eyebrow: "Assessment + target state",
    title: "MES Current-State Assessment & Target-State Blueprint",
    shortTitle: "Current-State Assessment",
    description:
      "A structured assessment showing how MES-enabled manufacturing currently operates, where execution gaps appear, and what a cleaner future-state operating model could look like across batch execution, QA review, equipment/material verification, deviations, and data visibility.",
    pageHref: "/projects/consulting-artifacts/artifact-1",
    filePdf: "/consulting-artifacts/digital-manufacturing-blueprint.pdf",
    filePng: "/consulting-artifacts/digital-manufacturing-blueprint.png",
    tags: ["Current State", "Target State", "MES", "Operating Model"],
    summary:
      "This artifact frames a fictional life sciences manufacturing environment from current-state friction to a cleaner MES-enabled target state. It shows how batch execution, QA review, verification steps, deviations, and visibility gaps can be assessed without using confidential data.",
    problem:
      "Manufacturing teams often inherit fragmented execution patterns: paper workarounds, unclear handoffs, disconnected review queues, and limited visibility into batch readiness. The result is slower review, more rework, and uneven confidence in execution data.",
    observations: [
      "Operators need clearer execution prompts, reference visibility, and exception paths at the point of work.",
      "QA review can be slowed by incomplete batch context, manual reconciliation, and unclear deviation linkage.",
      "QC, scheduling, and MES engineering teams may work from different versions of readiness or priority.",
      "Equipment, material, and recipe verification steps are often technically controlled but operationally hard to see.",
    ],
    recommendation:
      "Define a target-state operating model that clarifies execution ownership, verification checkpoints, exception routing, review readiness, and system-of-record boundaries across MES, automation, quality, and data layers.",
    deliverables: [
      "Current-state process map and friction inventory",
      "Target-state MES operating model",
      "System flow across ERP, MES, automation, QC/LIMS, and reporting",
      "Prioritized recommendations for execution, review, and visibility improvements",
    ],
    risks: [
      "Incomplete master data or recipe ownership can slow target-state adoption.",
      "Exception handling must be designed with QA and operations alignment.",
      "System integrations need clear data ownership and validation expectations.",
    ],
    metrics: [
      {
        label: "Batch review readiness",
        baseline: "Manual reconciliation required",
        target: "Review package completeness visible earlier",
      },
      {
        label: "Execution exceptions",
        baseline: "Inconsistent routing and documentation",
        target: "Standardized exception capture and triage",
      },
      {
        label: "Operational visibility",
        baseline: "Readiness status scattered across teams",
        target: "Shared MES-centered status model",
      },
    ],
    sections: [
      {
        title: "Target-state flow",
        items: [
          "ERP releases production demand and material context.",
          "MES orchestrates recipe execution, checks, signatures, and batch record state.",
          "Automation/DeltaV context supports process execution and parameter visibility.",
          "QA/QC review uses structured exceptions, sample status, and release readiness indicators.",
        ],
      },
      {
        title: "Expected benefits",
        items: [
          "Cleaner handoffs across operator, QA, QC, scheduling, and MES engineering roles.",
          "More consistent verification and exception handling.",
          "Better visibility into batch status, review readiness, and operational bottlenecks.",
        ],
      },
    ],
  },
  {
    id: "02",
    eyebrow: "Roadmap + delivery",
    title: "MES Implementation Roadmap & Delivery Plan",
    shortTitle: "Implementation Roadmap",
    description:
      "A rollout-ready delivery artifact showing implementation phases, owners, sequencing, risks, validation/readiness checkpoints, change-management considerations, and measurable milestones for MES and digital manufacturing initiatives.",
    pageHref: "/projects/consulting-artifacts/artifact-2",
    filePdf: "/consulting-artifacts/roadmap-blueprint.pdf",
    filePng: "/consulting-artifacts/roadmap-blueprint.png",
    tags: ["Roadmap", "Delivery", "Validation Readiness", "Change Management"],
    summary:
      "This artifact shows a fictional implementation plan for an MES and digital manufacturing initiative, with phases from discovery through hypercare. It is structured for leaders who need sequencing, accountability, readiness gates, and measurable progress.",
    problem:
      "MES initiatives can stall when project teams treat implementation as a technical configuration effort only. Regulated manufacturing programs need discovery, recipe and master data readiness, validation planning, training, change management, pilot execution, and post-go-live support.",
    observations: [
      "Recipe/EBR design depends on current-state process clarity and master data readiness.",
      "Validation and CSV readiness must be planned early, not bolted on near go-live.",
      "Training and change management need role-based content tied to real shop-floor behaviors.",
      "Milestones should track adoption and readiness, not only configuration completion.",
    ],
    recommendation:
      "Use a phased roadmap with named owners, readiness gates, risk mitigation, pilot criteria, and hypercare feedback loops. Treat MES implementation as an operational transformation program supported by technology.",
    deliverables: [
      "Phased implementation roadmap",
      "Owner/RACI-style accountability model",
      "Validation and CSV readiness checkpoints",
      "Training, pilot, go-live, and hypercare plan",
    ],
    risks: [
      "Master data gaps delay recipe configuration and testing.",
      "Insufficient QA/validation engagement creates late-stage rework.",
      "Training that does not reflect actual execution scenarios reduces adoption.",
    ],
    metrics: [
      {
        label: "Milestone health",
        baseline: "Task completion tracked inconsistently",
        target: "Phase gates tied to readiness evidence",
      },
      {
        label: "Training readiness",
        baseline: "Generic role training",
        target: "Scenario-based operator, QA, and support readiness",
      },
      {
        label: "Go-live stability",
        baseline: "Support model defined late",
        target: "Hypercare model ready before pilot",
      },
    ],
    sections: [
      {
        title: "Roadmap phases",
        items: [
          "Discovery and current-state mapping",
          "Recipe/EBR design and master data readiness",
          "Validation/CSV planning and test execution",
          "Training, change management, pilot, go-live, and hypercare",
        ],
      },
      {
        title: "Risk mitigation",
        items: [
          "Create master data readiness checkpoints before recipe build.",
          "Align QA, validation, operations, automation, and MES engineering on acceptance criteria.",
          "Track pilot issues through hypercare and continuous improvement loops.",
        ],
      },
    ],
  },
  {
    id: "03",
    eyebrow: "Value case + KPI model",
    title: "Digital Manufacturing Value Case & KPI Impact Model",
    shortTitle: "Value Case & KPI Model",
    description:
      "An executive-style value case connecting manufacturing pain points to measurable operational impact, including deviation effort, batch review time, right-first-time execution, manual documentation effort, release readiness, and manufacturing visibility.",
    pageHref: "/projects/consulting-artifacts/artifact-3",
    filePdf: "/consulting-artifacts/value-case.pdf",
    filePng: "/consulting-artifacts/value-case.png",
    tags: ["Value Case", "KPIs", "ROI", "Executive Summary"],
    summary:
      "This artifact presents an executive-style, directional value case for MES and digital manufacturing improvements. It connects operational pain points to measurable indicators without making unsupported ROI claims.",
    problem:
      "Digital manufacturing initiatives are often justified with broad efficiency language. Leaders need a clearer link between shop-floor friction, review effort, release readiness, data visibility, and measurable business value.",
    observations: [
      "Manual documentation and reconciliation can consume time without improving decision quality.",
      "Deviation effort increases when execution context is incomplete or hard to retrieve.",
      "Batch review time is affected by missing evidence, late exceptions, and disconnected QC status.",
      "Manufacturing visibility is often limited to after-the-fact reporting rather than operational control.",
    ],
    recommendation:
      "Frame the value case around directional KPI movement: reduced manual effort, improved right-first-time execution, clearer release readiness, better deviation context, and more timely manufacturing visibility.",
    deliverables: [
      "Executive value narrative",
      "Baseline pain-point model",
      "Directional KPI impact table",
      "Assumptions and measurable success criteria",
    ],
    risks: [
      "Directional value estimates require validation with actual site data before business-case approval.",
      "KPI ownership must be agreed across operations, QA, and digital teams.",
      "Benefits depend on adoption, master data quality, and sustained process governance.",
    ],
    metrics: [
      {
        label: "Deviation effort",
        baseline: "Context gathering is manual and fragmented",
        target: "More complete execution context available for triage",
      },
      {
        label: "Batch review time",
        baseline: "Review readiness discovered late",
        target: "Earlier visibility into missing items and exceptions",
      },
      {
        label: "Right-first-time execution",
        baseline: "Corrections and rework are difficult to trend",
        target: "Structured checks and clearer exception patterns",
      },
      {
        label: "Manufacturing visibility",
        baseline: "Status reporting is delayed",
        target: "Shared view of execution and release readiness",
      },
    ],
    sections: [
      {
        title: "Assumptions",
        items: [
          "Values are illustrative and directional, not financial commitments.",
          "Benefits require validated baselines, site-specific data, and stakeholder agreement.",
          "KPI ownership should be assigned before implementation begins.",
        ],
      },
      {
        title: "Success criteria",
        items: [
          "Operational teams can explain which pain points the initiative addresses.",
          "KPIs are tied to review effort, exception handling, execution quality, and release readiness.",
          "Leadership can see how MES improvements connect to measurable business value.",
        ],
      },
    ],
  },
];
