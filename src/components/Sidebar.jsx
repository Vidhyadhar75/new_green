const NAV = [
  { key: "dashboard", label: "Dashboard",      icon: "🌿" },
  { key: "air",       label: "GH Air Quality", icon: "💨" },
  { key: "npk",       label: "GH NPK",         icon: "🧪" },
  { key: "soil",      label: "GH Soil",        icon: "🌱" },
  { key: "power",     label: "GH Power",       icon: "⚡" },
  { key: "status",    label: "GH Status",      icon: "📡" },
  { key: "motors",    label: "GH Motors",      icon: "⚙️" },
];

/**
 * Left sidebar with logo, navigation buttons and a live-data badge.
 */
export default function Sidebar({ page, setPage }) {
  return (
    <aside style={{
      width: 226,
      background: "linear-gradient(180deg,#12172e 0%,#0a0f1e 100%)",
      borderRight: "1px solid rgba(99,179,237,0.1)",
      display: "flex", flexDirection: "column",
      flexShrink: 0,
      position: "sticky", top: 0, height: "100vh", overflowY: "auto",
    }}>

      {/* Logo */}
      <div style={{ padding: "22px 18px 18px", borderBottom: "1px solid rgba(74,222,128,0.07)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 11,
            background: "linear-gradient(135deg,#166534,#14532d)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 20, boxShadow: "0 0 0 1px rgba(74,222,128,0.28), 0 4px 14px rgba(0,0,0,0.5)",
          }}>🌿</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 900, color: "#d4f7c8", lineHeight: 1.1 }}>GreenHouse</div>
            <div style={{ fontSize: 7.5, color: "#4ade80", letterSpacing: 2, fontWeight: 700, marginTop: 2 }}>CONTROL CENTER</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ padding: "14px 10px", flex: 1 }}>
        <div style={{ fontSize: 8, color: "rgba(134,239,172,0.35)", letterSpacing: 2.5, padding: "0 8px 10px", fontWeight: 700 }}>
          NAVIGATION
        </div>
        {NAV.map(p => {
          const active = page === p.key;
          return (
            <button key={p.key} onClick={() => setPage(p.key)} style={{
              width: "100%", display: "flex", alignItems: "center", gap: 10,
              padding: "11px 11px", borderRadius: 10, border: "none", cursor: "pointer", marginBottom: 3,
              background: active ? "linear-gradient(90deg,rgba(74,222,128,0.18),rgba(74,222,128,0.04))" : "transparent",
              color: active ? "#86efac" : "rgba(180,230,160,0.55)",
              fontSize: 15, fontWeight: active ? 800 : 600,
              textAlign: "left",
              borderLeft: `3px solid ${active ? "#4ade80" : "transparent"}`,
              transition: "all 0.14s",
            }}>
              <span style={{ fontSize: 15 }}>{p.icon}</span>
              {p.label}
            </button>
          );
        })}
      </nav>

      {/* Live data badge */}
      <div style={{ padding: "14px 14px 18px" }}>
        <div style={{
          background: "rgba(74,222,128,0.07)", borderRadius: 11,
          padding: "11px 12px", border: "1px solid rgba(74,222,128,0.12)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 4 }}>
            <div style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "#4ade80", boxShadow: "0 0 6px #4ade80",
              animation: "blink 2s infinite",
            }}/>
            <span style={{ color: "#4ade80", fontSize: 8, fontWeight: 800, letterSpacing: 1.5 }}>LIVE DATA</span>
          </div>
          <div style={{ color: "rgba(134,239,172,0.4)", fontSize: 8, lineHeight: 1.6 }}>
            Sensors active • Auto-refresh
          </div>
        </div>
      </div>
    </aside>
  );
}
