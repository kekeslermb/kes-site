import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "#0B0F19",
          color: "white",
        }}
      >
        <div style={{ fontSize: 58, fontWeight: 800, lineHeight: 1.05 }}>
          Kesler Aristide-Bonheur, MBA, PMP
        </div>
        <div style={{ marginTop: 18, fontSize: 28, opacity: 0.9 }}>
          PMP-Certified Digital Manufacturing & MES
        </div>
        <div style={{ marginTop: 28, fontSize: 18, opacity: 0.7 }}>
          PAS-X | Syncade | GMP | EBR Workflows | CSV
        </div>
      </div>
    ),
    size
  );
}
