import type { Metadata } from "next";
import ArtifactDetail from "../ArtifactDetail";
import { artifacts } from "../artifacts-data";

export const metadata: Metadata = {
  title: "MES Implementation Roadmap & Delivery Plan",
  description:
    "A consulting-style MES implementation roadmap and delivery plan for regulated digital manufacturing initiatives.",
};

export default function Artifact2Page() {
  return <ArtifactDetail artifact={artifacts[1]} />;
}
