import { useState } from "react";

/**
 * Clickable card with an animated toggle switch to control a motor/actuator.
 */
export default function MotorCard({ label, icon, defaultOn, gradient }) {
  const [on, setOn] = useState(defaultOn);
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setOn(v => !v)}
      style={{
        background: on ? gradient : "linear-gradient(145deg,#1a2a1a,#0f1f0f)",
        borderRadius: 20,
        padding: "32px 24px",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 16,
        cursor: "pointer",
        transition: "all 0.22s",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        boxShadow: on ? "0 12px 36px rgba(0,0,0,0.4)" : "0 4px 16px rgba(0,0,0,0.3)",
        border: on ? "none" : "1px solid rgba(255,255,255,0.07)",
        position: "relative", overflow: "hidden",
      }}
    >
      {/* Shine */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      <span style={{ fontSize: 42, filter: on ? "none" : "grayscale(0.7) opacity(0.4)", transition: "all 0.3s" }}>
        {icon}
      </span>

      <div style={{
        color: on ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
        fontSize: 13, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase",
      }}>{label}</div>

      {/* Toggle switch */}
      <div style={{
        width: 64, height: 33, borderRadius: 17,
        background: on ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.1)",
        position: "relative", transition: "background 0.28s",
        boxShadow: on ? "0 0 16px rgba(255,255,255,0.2)" : "none",
      }}>
        <div style={{
          position: "absolute", top: 4, left: on ? 33 : 4,
          width: 25, height: 25, borderRadius: "50%",
          background: on ? "#fff" : "rgba(255,255,255,0.4)",
          transition: "left 0.28s cubic-bezier(.4,0,.2,1)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
        }} />
      </div>

      <div style={{
        fontSize: 11, fontWeight: 800, letterSpacing: 2.5,
        color: on ? "#fff" : "rgba(255,255,255,0.2)",
        textShadow: on ? "0 0 12px rgba(255,255,255,0.5)" : "none",
        transition: "all 0.28s",
      }}>{on ? "● RUNNING" : "○ STOPPED"}</div>
    </div>
  );
}
