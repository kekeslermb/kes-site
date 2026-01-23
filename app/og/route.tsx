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
        <div style={{ fontSize: 72, fontWeight: 800, letterSpacing: -1 }}>
          Kesler Bonheur
        </div>

        <div style={{ marginTop: 18, fontSize: 32, color: "#b7b7c2" }}>
          Digital Manufacturing • MES • Systems • Integration
        </div>

        <div style={{ marginTop: 42, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <div
            style={{
              padding: "10px 14px",
              borderRadius: 999,
              border: "1px solid #2a2a35",
              backgroundColor: "rgba(255,255,255,0.04)",
              fontSize: 22,
              color: "#d6d6df",
            }}
          >
            MES Execution
          </div>

          <div
            style={{
              padding: "10px 14px",
              borderRadius: 999,
              border: "1px solid #2a2a35",
              backgroundColor: "rgba(255,255,255,0.04)",
              fontSize: 22,
              color: "#d6d6df",
            }}
          >
            GMP / CSV
          </div>

          <div
            style={{
              padding: "10px 14px",
              borderRadius: 999,
              border: "1px solid #2a2a35",
              backgroundColor: "rgba(255,255,255,0.04)",
              fontSize: 22,
              color: "#d6d6df",
            }}
          >
            ISA-95
          </div>

          <div
            style={{
              padding: "10px 14px",
              borderRadius: 999,
              border: "1px solid #2a2a35",
              backgroundColor: "rgba(255,255,255,0.04)",
              fontSize: 22,
              color: "#d6d6df",
            }}
          >
            ERP ↔ MES ↔ Automation
          </div>

          <div
            style={{
              padding: "10px 14px",
              borderRadius: 999,
              border: "1px solid #2a2a35",
              backgroundColor: "rgba(255,255,255,0.04)",
              fontSize: 22,
              color: "#d6d6df",
            }}
          >
            Data Integrity
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
