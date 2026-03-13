import { useState, useEffect } from "react";

/**
 * Full SVG nature scene (sky, sun, clouds, greenhouse, trees, flowers, pond)
 * used as the hero banner on the Dashboard page.
 * The 4 summary tiles are rendered BELOW the scene, not overlaid on it.
 */
export default function NatureScene({ tiles }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ marginBottom: 26 }}>

      {/* ── SVG scene box ── */}
      <div style={{
        position: "relative", width: "100%", height: 300,
        borderRadius: 22, overflow: "hidden", marginBottom: 14,
        boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
      }}>

        {/* ── SVG Scene ── */}
        <svg viewBox="0 0 900 300" preserveAspectRatio="xMidYMid slice"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#4ea8d6" />
              <stop offset="55%"  stopColor="#87ceeb" />
              <stop offset="100%" stopColor="#c8ecb0" />
            </linearGradient>
            <radialGradient id="sun" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#fff9c4" stopOpacity="1" />
              <stop offset="55%"  stopColor="#ffe57f" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ffd740" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="grass" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#56c96d" />
              <stop offset="100%" stopColor="#1a5c2a" />
            </linearGradient>
            <linearGradient id="hill1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#6ee7b7" />
              <stop offset="100%" stopColor="#065f46" />
            </linearGradient>
            <linearGradient id="ghglass" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#e0f7f4" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#a5f3d0" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="ghwall" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#d4f0e0" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#6ee7a0" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="ghroof" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#e8fff4" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#86efac" stopOpacity="0.4" />
            </linearGradient>
            <filter id="blur2"><feGaussianBlur stdDeviation="2"/></filter>
            <filter id="glow">
              <feGaussianBlur stdDeviation="5" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <linearGradient id="sceneOverlay" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="rgba(0,0,0,0.15)"/>
              <stop offset="40%"  stopColor="transparent"/>
              <stop offset="100%" stopColor="rgba(0,0,0,0.0)"/>
            </linearGradient>
          </defs>

          {/* Sky */}
          <rect width="900" height="300" fill="url(#sky)" />

          {/* Sun + rays */}
          <circle cx="790" cy="58" r="50" fill="url(#sun)" filter="url(#glow)" />
          <circle cx="790" cy="58" r="28" fill="#fffde0" />
          {Array.from({ length: 14 }, (_, i) => {
            const a = (i / 14) * Math.PI * 2;
            const x1 = 790 + Math.cos(a) * 34, y1 = 58 + Math.sin(a) * 34;
            const x2 = 790 + Math.cos(a) * 56, y2 = 58 + Math.sin(a) * 56;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ffe066" strokeWidth="2.5" strokeLinecap="round" opacity="0.65" />;
          })}

          {/* Clouds */}
          <g opacity="0.93" filter="url(#blur2)">
            <ellipse cx="115" cy="52" rx="55" ry="22" fill="white"/>
            <ellipse cx="152" cy="44" rx="40" ry="21" fill="white"/>
            <ellipse cx="84"  cy="56" rx="32" ry="17" fill="white"/>
            <ellipse cx="126" cy="60" rx="48" ry="16" fill="white"/>
          </g>
          <g opacity="0.85" filter="url(#blur2)">
            <ellipse cx="360" cy="36" rx="46" ry="18" fill="white"/>
            <ellipse cx="395" cy="29" rx="33" ry="17" fill="white"/>
            <ellipse cx="330" cy="41" rx="27" ry="14" fill="white"/>
            <ellipse cx="370" cy="45" rx="39" ry="14" fill="white"/>
          </g>
          <g opacity="0.72">
            <ellipse cx="565" cy="26" rx="28" ry="11" fill="white"/>
            <ellipse cx="585" cy="20" rx="20" ry="10" fill="white"/>
            <ellipse cx="548" cy="29" rx="18" ry="9"  fill="white"/>
          </g>

          {/* Far hills */}
          <ellipse cx="80"  cy="210" rx="170" ry="85" fill="#a7f3d0" opacity="0.5"/>
          <ellipse cx="830" cy="215" rx="150" ry="75" fill="#6ee7b7" opacity="0.45"/>

          {/* Mid hill */}
          <path d="M0 232 Q110 168 240 210 Q370 162 490 212 Q610 165 730 208 Q830 174 900 200 L900 300 L0 300 Z"
            fill="url(#hill1)" opacity="0.65"/>

          {/* Grass */}
          <path d="M0 248 Q150 234 300 242 Q450 232 600 242 Q750 232 900 242 L900 300 L0 300 Z" fill="url(#grass)"/>

          {/* Grass blades */}
          {Array.from({ length: 44 }, (_, i) => {
            const x = 8 + i * 20 + Math.sin(i * 1.3) * 5;
            const h = 8 + Math.sin(i * 0.7) * 8 + 6;
            return (
              <g key={i}>
                <path d={`M${x} 254 Q${x-4} ${254-h} ${x-1} ${254-h-5}`} fill="none" stroke="#4ade80" strokeWidth="1.4" strokeLinecap="round" opacity="0.65"/>
                <path d={`M${x+4} 255 Q${x+8} ${255-h+3} ${x+6} ${255-h-3}`} fill="none" stroke="#22c55e" strokeWidth="1.2" strokeLinecap="round" opacity="0.55"/>
              </g>
            );
          })}

          {/* Greenhouse base walls */}
          <rect x="295" y="165" width="316" height="105" fill="url(#ghwall)" stroke="#15803d" strokeWidth="2" rx="2"/>
          {[299, 368, 437, 506].map((x, i) => (
            <rect key={i} x={x} y={168} width={65} height={99} fill="url(#ghglass)" stroke="#86efac" strokeWidth="1" opacity="0.75"/>
          ))}
          <rect x="575" y="168" width="32" height="99" fill="url(#ghglass)" stroke="#86efac" strokeWidth="1" opacity="0.75"/>
          <line x1="295" y1="210" x2="611" y2="210" stroke="#15803d" strokeWidth="1" opacity="0.5"/>

          {/* Greenhouse roof */}
          <polygon points="282,165 453,105 624,165" fill="url(#ghroof)" stroke="#15803d" strokeWidth="2.5"/>
          {[330,362,394,421,453,485,517,549,581].map((_, i) => {
            const tx = 282 + i * (624 - 282) / 8;
            const ty = 165 - (165 - 105) * Math.abs((tx - 453) / 171);
            return <line key={i} x1={tx} y1={ty} x2={tx + (tx < 453 ? 8 : -8)} y2={165} stroke="#86efac" strokeWidth="1" opacity="0.5"/>;
          })}
          <rect x="437" y="122" width="32" height="15" fill="#d1fae5" stroke="#15803d" strokeWidth="1.5" rx="2"/>
          <line x1="282" y1="165" x2="624" y2="165" stroke="#15803d" strokeWidth="2"/>

          {/* Door */}
          <rect x="424" y="214" width="52" height="56" fill="#86efac" stroke="#15803d" strokeWidth="1.5" rx="3"/>
          <circle cx="469" cy="243" r="3.5" fill="#166634"/>
          <line x1="450" y1="214" x2="450" y2="270" stroke="#15803d" strokeWidth="1" opacity="0.6"/>

          {/* Plants inside */}
          {[315,350,385,465,500,540,575].map((x, i) => (
            <g key={i} opacity="0.55">
              <rect x={x+1} y={232} width="7" height="18" fill="#92400e"/>
              <ellipse cx={x+4} cy={224} rx={13+i%3*4} ry={15+i%2*5}
                fill={["#4ade80","#22c55e","#16a34a","#15803d","#059669","#34d399","#6ee7b7"][i]}/>
            </g>
          ))}
          <polygon points="282,165 340,165 400,131 350,107" fill="white" opacity="0.06"/>

          {/* Left trees */}
          <rect x="196" y="198" width="13" height="72" fill="#92400e"/>
          <ellipse cx="202" cy="186" rx="35" ry="40" fill="#16a34a"/>
          <ellipse cx="202" cy="172" rx="24" ry="28" fill="#4ade80" opacity="0.65"/>
          <rect x="238" y="208" width="10" height="62" fill="#92400e"/>
          <ellipse cx="243" cy="198" rx="24" ry="30" fill="#15803d"/>
          <ellipse cx="243" cy="187" rx="16" ry="21" fill="#22c55e" opacity="0.6"/>

          {/* Right trees */}
          <rect x="650" y="202" width="13" height="68" fill="#92400e"/>
          <ellipse cx="656" cy="190" rx="33" ry="38" fill="#16a34a"/>
          <ellipse cx="656" cy="177" rx="22" ry="26" fill="#4ade80" opacity="0.65"/>
          <rect x="693" y="210" width="10" height="60" fill="#92400e"/>
          <ellipse cx="698" cy="200" rx="22" ry="28" fill="#15803d"/>

          {/* Flower patches */}
          {[178,206,234,670,700,728,756].map((x, i) => (
            <g key={i}>
              <circle cx={x}   cy={256} r="4.5" fill={["#f472b6","#fbbf24","#f87171","#a78bfa","#fb923c","#38bdf8","#4ade80"][i]}/>
              <circle cx={x+9} cy={253} r="3.5" fill={["#fbbf24","#f472b6","#a78bfa","#f87171","#4ade80","#f472b6","#fbbf24"][i]}/>
              <circle cx={x+4} cy={260} r="3"   fill={["#a78bfa","#f87171","#fbbf24","#4ade80","#f472b6","#fcd34d","#f87171"][i]}/>
            </g>
          ))}

          {/* Pond */}
          <ellipse cx="148" cy="266" rx="58" ry="13" fill="#7dd3fc" opacity="0.42"/>
          <ellipse cx="148" cy="266" rx="46" ry="8"  fill="#bae6fd" opacity="0.28"/>

          {/* Path to door */}
          <path d="M395 300 Q425 278 448 268 L458 268 Q480 278 505 300 Z" fill="#d97706" opacity="0.3"/>
          <path d="M404 300 Q428 281 448 271 L458 271 Q478 281 497 300 Z" fill="#fcd34d" opacity="0.18"/>

          {/* Birds */}
          <g opacity="0.6" stroke="#1e3a2a" strokeWidth="1.5" fill="none">
            <path d="M198 68 Q203 64 208 68"/><path d="M210 66 Q215 62 220 66"/>
          </g>
          <g opacity="0.5" stroke="#1e3a2a" strokeWidth="1.3" fill="none">
            <path d="M630 46 Q634 42 638 46"/><path d="M640 44 Q644 40 648 44"/>
            <path d="M652 48 Q656 44 660 48"/>
          </g>

          {/* Top overlay for text readability */}
          <rect width="900" height="300" fill="url(#sceneOverlay)"/>
        </svg>

        {/* ── Text overlay — title + ONLINE badge only ── */}
        <div style={{
          position: "absolute", inset: 0, padding: "22px 26px",
          display: "flex", flexDirection: "column", justifyContent: "flex-start",
          pointerEvents: "none",
        }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", pointerEvents: "auto" }}>
            {/* Logo + Title */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: "rgba(255,255,255,0.22)", backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.38)",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26,
                boxShadow: "0 4px 16px rgba(0,0,0,0.25)", flexShrink: 0,
              }}>🌿</div>
              <div style={{ textShadow: "0 2px 16px rgba(0,0,0,0.7)" }}>
                <h1 style={{ margin: 0, fontSize: 26, fontWeight: 900, color: "#fff", letterSpacing: -0.5 }}>
                  GreenHouse Control Center
                </h1>
                <p style={{ margin: "4px 0 0", color: "rgba(220,255,220,0.9)", fontSize: 10, fontWeight: 700, letterSpacing: 2 }}>
                  LIVE MONITORING DASHBOARD • ALL SYSTEMS NOMINAL
                </p>
              </div>
            </div>

            {/* ONLINE badge */}
            <div style={{
              display: "inline-flex", flexDirection: "column", alignItems: "flex-end", gap: 3,
              background: "rgba(0,0,0,0.35)", backdropFilter: "blur(10px)",
              border: "1px solid rgba(74,222,128,0.45)", borderRadius: 14, padding: "10px 16px",
              flexShrink: 0,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" }}/>
                <span style={{ color: "#4ade80", fontSize: 16, fontWeight: 900, letterSpacing: 1 }}>ONLINE</span>
              </div>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11 }}>{time}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Summary tiles BELOW the scene ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
        {tiles.map(s => (
          <div key={s.label} style={{
            background: "linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.025))",
            border: `1px solid ${s.color}28`,
            borderRadius: 16, padding: "16px 18px",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 2,
              background: `linear-gradient(90deg, transparent, ${s.color}88, transparent)`,
            }} />
            <div style={{ fontSize: 24, marginBottom: 8 }}>{s.icon}</div>
            <div style={{ color: s.color, fontSize: 28, fontWeight: 800,
              fontFamily: "'Courier New', monospace", letterSpacing: -1 }}>
              {s.val}
              <span style={{ fontSize: 12, marginLeft: 3, opacity: 0.65, fontWeight: 600 }}>{s.unit}</span>
            </div>
            <div style={{ color: "rgba(200,220,255,0.45)", fontSize: 9, letterSpacing: 2, fontWeight: 700, marginTop: 4 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
