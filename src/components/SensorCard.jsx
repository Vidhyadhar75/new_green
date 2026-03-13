import { useState } from "react";
import Spark from "./Spark";

/**
 * Coloured gradient card displaying a single sensor reading + sparkline.
 */
export default function SensorCard({ label, value, unit, icon, gradient, sparkColor, lo, hi, showOnline = true }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: gradient,
        borderRadius: 20,
        padding: "22px 22px 16px",
        display: "flex", flexDirection: "column",
        position: "relative", overflow: "hidden",
        transition: "transform 0.22s, box-shadow 0.22s",
        transform: hover ? "translateY(-4px) scale(1.01)" : "translateY(0) scale(1)",
        boxShadow: hover ? "0 16px 40px rgba(0,0,0,0.4)" : "0 4px 20px rgba(0,0,0,0.3)",
        cursor: "default",
      }}
    >
      {/* Shine overlay */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      {/* Header row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
        <span style={{ fontSize: 30 }}>{icon}</span>
        {showOnline && (
          <div style={{
            display: "flex", alignItems: "center", gap: 5,
            background: "rgba(0,0,0,0.25)", borderRadius: 20, padding: "4px 10px",
          }}>
            <div style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "#4ade80", boxShadow: "0 0 6px #4ade80",
              animation: "blink 2s infinite",
            }} />
            <span style={{ fontSize: 9, color: "#4ade80", fontWeight: 800, letterSpacing: 1.5 }}>ONLINE</span>
          </div>
        )}
      </div>

      {/* Label */}
      <div style={{
        fontSize: 9, color: "rgba(255,255,255,0.6)", fontWeight: 700,
        letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 4,
      }}>{label}</div>

      {/* Value */}
      <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
        <span style={{
          fontSize: 38, fontWeight: 800, color: "#fff",
          fontFamily: "'Courier New', monospace", letterSpacing: -1.5,
        }}>{value}</span>
        <span style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", fontWeight: 700 }}>{unit}</span>
      </div>

      <Spark value={typeof value === "number" ? value : 1} lo={lo} hi={hi} color={sparkColor} />
    </div>
  );
}
