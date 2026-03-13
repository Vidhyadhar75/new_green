import { useState, useEffect } from "react";

/**
 * Mini sparkline chart that tracks a rolling history of a sensor value.
 */
export default function Spark({ value, lo, hi, color }) {
  const [hist, setHist] = useState(() => Array(28).fill(value));
  useEffect(() => setHist(h => [...h.slice(1), value]), [value]);

  const W = 200, H = 36;
  const pts = hist.map((v, i) => {
    const x = (i / (hist.length - 1)) * W;
    const pct = (Math.max(lo, Math.min(hi, v)) - lo) / (hi - lo);
    const y = H - pct * (H - 6) - 3;
    return `${x},${y}`;
  }).join(" ");

  const id = `sp${color.replace(/[^a-z0-9]/gi, "")}${lo}`;
  const last = hist[hist.length - 1];
  const lastPct = (Math.max(lo, Math.min(hi, last)) - lo) / (hi - lo);
  const lastY = H - lastPct * (H - 6) - 3;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none"
      style={{ width: "100%", height: H, display: "block", marginTop: 8 }}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0.0" />
        </linearGradient>
      </defs>
      <polygon points={`0,${H} ${pts} ${W},${H}`} fill={`url(#${id})`} />
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={W} cy={lastY} r="3" fill={color} />
    </svg>
  );
}
