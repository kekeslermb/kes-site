import { ImageResponse } from "next/og";

export const runtime = "edge";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          backgroundColor: "#0b0b0f",
          color: "#ffffff",
          fontFamily: "Arial",
        }}
      >
        <div style={{ fontSize: 68, fontWeight: 800, letterSpacing: -1 }}>
          Kesler Aristide-Bonheur, MBA, PMP
        </div>

        <div style={{ marginTop: 18, fontSize: 30, color: "#b7b7c2" }}>
          PMP-Certified Digital Manufacturing & MES Professional
        </div>

        <div style={{ marginTop: 42, display: "flex", gap: 12, flexWrap: "wrap" }}>
          {[
            "PMP",
            "PAS-X",
            "Syncade",
            "GMP / CSV",
            "EBR Workflows",
            "Pharma Manufacturing Systems",
            "Manufacturing Systems Integration",
          ].map((label) => (
            <div
              key={label}
              style={{
                padding: "10px 14px",
                borderRadius: 999,
                border: "1px solid #2a2a35",
                backgroundColor: "rgba(255,255,255,0.04)",
                fontSize: 22,
                color: "#d6d6df",
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
