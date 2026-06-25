import type { Metadata } from "next";
import ArtifactDetail from "../ArtifactDetail";
import { artifacts } from "../artifacts-data";

export const metadata: Metadata = {
  title: "Digital Manufacturing Value Case & KPI Impact Model",
  description:
    "An executive-style digital manufacturing value case and KPI impact model for MES-enabled pharma manufacturing systems.",
};

export default function Artifact3Page() {
  return <ArtifactDetail artifact={artifacts[2]} />;
}
