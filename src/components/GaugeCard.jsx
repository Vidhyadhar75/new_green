import Gauge from "./Gauge";
import Spark from "./Spark";

/**
 * Full-colour card containing a Gauge and a Sparkline below it.
 */
export default function GaugeCard({ label, value, unit, gradient, gaugeColor, lo, hi }) {
  return (
    <div style={{
      background: gradient,
      borderRadius: 20,
      padding: "20px 20px 16px",
      display: "flex", flexDirection: "column", alignItems: "center",
      boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Shine overlay */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 55%)",
        pointerEvents: "none",
      }} />

      <Gauge value={value} lo={lo} hi={hi} color={gaugeColor} unit={unit} label={label} />
      <Spark value={value} lo={lo} hi={hi} color={gaugeColor} />
    </div>
  );
}
