import PageShell from "../components/PageShell";

// Sensor: Green House Status (status value = 1 or 0)
export default function GHStatusPage() {
  return (
    <PageShell title="GH Status" icon="📡" sub="SYSTEM STATUS">
      <div style={{
        background: "linear-gradient(135deg,#052e16,#065f46,#047857)",
        borderRadius: 20, padding: "44px 32px",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 18,
        position: "relative", overflow: "hidden",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
      }}>
        {/* Shine */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          background: "linear-gradient(135deg,rgba(255,255,255,0.07) 0%,transparent 60%)",
          pointerEvents: "none",
        }} />

        <div style={{ fontSize: 64 }}>🌿</div>

        <div style={{ fontSize: 9, color: "rgba(134,239,172,0.6)", fontWeight: 700, letterSpacing: 3 }}>
          GREEN HOUSE STATUS
        </div>

        <div style={{
          fontSize: 40, fontWeight: 900, color: "#4ade80",
          textShadow: "0 0 40px #4ade8066", letterSpacing: 3,
          fontFamily: "'Courier New', monospace",
        }}>
          OPERATIONAL
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 12px #4ade80" }}/>
          <span style={{ color: "rgba(220,255,220,0.6)", fontSize: 13 }}>
            All sensors nominal • Data feed active
          </span>
        </div>

        <div style={{
          background: "rgba(0,0,0,0.25)", borderRadius: 14,
          padding: "14px 32px", border: "1px solid rgba(74,222,128,0.2)", marginTop: 8,
        }}>
          <span style={{ fontSize: 56, fontWeight: 800, color: "#4ade80", fontFamily: "'Courier New', monospace" }}>1</span>
          <span style={{ fontSize: 16, color: "rgba(134,239,172,0.5)", fontWeight: 700, marginLeft: 8 }}>status</span>
        </div>
      </div>
    </PageShell>
  );
}
