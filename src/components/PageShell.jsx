/**
 * Shared page header wrapper used by every non-dashboard page.
 * Renders the page title, icon, subtitle and a "SENSORS ACTIVE" badge.
 */
export default function PageShell({ title, icon, sub, children }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 26 }}>

        {/* Icon badge */}
        <div style={{
          width: 52, height: 52, borderRadius: 14,
          background: "linear-gradient(135deg, rgba(74,222,128,0.2), rgba(20,100,50,0.15))",
          border: "1px solid rgba(74,222,128,0.25)",
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26,
        }}>{icon}</div>

        {/* Title / subtitle */}
        <div>
          <h2 style={{ margin: 0, fontSize: 26, fontWeight: 900, color: "#efffee", letterSpacing: -0.5 }}>
            {title}
          </h2>
          <p style={{ margin: 0, color: "rgba(134,239,172,0.5)", fontSize: 9, letterSpacing: 2.5, fontWeight: 700, marginTop: 2 }}>
            {sub} • LIVE
          </p>
        </div>

        {/* Status badge */}
        <div style={{ marginLeft: "auto" }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 6,
            background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)",
            borderRadius: 20, padding: "6px 14px",
          }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 6px #4ade80" }} />
            <span style={{ color: "rgba(134,239,172,0.7)", fontSize: 9, fontWeight: 800, letterSpacing: 1.5 }}>
              SENSORS ACTIVE
            </span>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
}
