import type { Metadata } from "next";
import ArtifactDetail from "../ArtifactDetail";
import { artifacts } from "../artifacts-data";

export const metadata: Metadata = {
  title: "MES Current-State Assessment & Target-State Blueprint",
  description:
    "A consulting-style MES current-state assessment and target-state blueprint for regulated life sciences manufacturing.",
};

export default function Artifact1Page() {
  return <ArtifactDetail artifact={artifacts[0]} />;
}
