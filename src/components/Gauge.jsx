/**
 * Semi-circular gauge with needle, arc fill, value and label.
 */
export default function Gauge({ value, lo, hi, color, unit, label }) {
  const pct = Math.max(0, Math.min(1, (value - lo) / (hi - lo)));
  const angle = -135 + pct * 270;
  const r = 54, cx = 70, cy = 70;

  function polarToXY(deg) {
    const rad = (deg - 90) * Math.PI / 180;
    return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
  }

  const [sx, sy] = polarToXY(-135 + 90);
  const [ex, ey] = polarToXY(-135 + 90 + pct * 270);
  const large = pct * 270 > 180 ? 1 : 0;
  const [tx0, ty0] = polarToXY(-135 + 90);
  const [tx1, ty1] = polarToXY(-135 + 90 + 270);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 8 }}>
      <svg width="140" height="100" viewBox="0 0 140 100">
        <defs>
          <filter id={`gg${label}`}>
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Track */}
        <path
          d={`M ${tx0[0]} ${ty0[1]} A ${r} ${r} 0 1 1 ${tx1[0]} ${ty1[1]}`}
          fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="8" strokeLinecap="round"
        />

        {/* Filled arc */}
        {pct > 0 && (
          <path
            d={`M ${sx} ${sy} A ${r} ${r} 0 ${large} 1 ${ex} ${ey}`}
            fill="none" stroke={color} strokeWidth="8" strokeLinecap="round"
            filter={`url(#gg${label})`}
          />
        )}

        {/* Needle */}
        <g transform={`rotate(${angle}, ${cx}, ${cy})`}>
          <line x1={cx} y1={cy + 8} x2={cx} y2={cy - 42}
            stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        <circle cx={cx} cy={cy} r="6" fill={color} />
        <circle cx={cx} cy={cy} r="3" fill="white" />
      </svg>

      <div style={{ marginTop: -4, fontSize: 28, fontWeight: 800, color: "#fff",
        fontFamily: "'Courier New', monospace", letterSpacing: -1 }}>
        {value}
        <span style={{ fontSize: 13, marginLeft: 3, opacity: 0.7, fontWeight: 600 }}>{unit}</span>
      </div>
      <div style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", letterSpacing: 2,
        fontWeight: 700, textTransform: "uppercase", marginTop: 4 }}>{label}</div>
    </div>
  );
}
