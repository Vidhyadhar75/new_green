import useLive from "../hooks/useLive";
import PageShell from "../components/PageShell";
import SensorCard from "../components/SensorCard";
import Spark from "../components/Spark";

// Sensors: CO2 (ppm), Temperature (C), Humidity (g/m), Pressure (Pa), Gas (mol)
export default function AirQualityPage() {
  const co2      = useLive(820, 60, 0);
  const temp     = useLive(27, 2, 1);
  const humidity = useLive(68, 6, 1);
  const pressure = useLive(101300, 400, 0, 3000);
  const gas      = useLive(0.83, 0.1, 2, 2500);

  return (
    <PageShell title="GH Air Quality" icon="💨" sub="ATMOSPHERIC SENSORS">

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18, marginBottom: 18 }}>
        <SensorCard label="CO2"         value={co2}      unit="ppm" icon="🌫️" gradient="linear-gradient(135deg,#1e1b4b,#3730a3,#4f46e5)" sparkColor="#818cf8" lo={400}   hi={1500}   />
        <SensorCard label="TEMPERATURE" value={temp}     unit="C"   icon="🌡️" gradient="linear-gradient(135deg,#7c1d1d,#b91c1c,#dc2626)" sparkColor="#fca5a5" lo={10}    hi={45}     />
        <SensorCard label="HUMIDITY"    value={humidity} unit="g/m" icon="💧" gradient="linear-gradient(135deg,#0c4a6e,#0369a1,#0284c7)" sparkColor="#7dd3fc" lo={30}    hi={100}    />
        <SensorCard label="PRESSURE"    value={pressure} unit="Pa"  icon="🌀" gradient="linear-gradient(135deg,#14532d,#15803d,#16a34a)" sparkColor="#86efac" lo={99000} hi={103000} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 18 }}>
        <SensorCard label="GAS" value={gas} unit="mol" icon="⚗️"
          gradient="linear-gradient(135deg,#713f12,#a16207,#ca8a04)" sparkColor="#fde047" lo={0.3} hi={1.5} />

        {/* CO2 trend panel */}
        <div style={{
          background: "linear-gradient(135deg,#0a1628,#0f2044)", borderRadius: 20,
          padding: "20px 22px", border: "1px solid rgba(129,140,248,0.2)",
        }}>
          <div style={{ color: "rgba(165,180,252,0.6)", fontSize: 9, letterSpacing: 2.5, fontWeight: 700, marginBottom: 8 }}>
            CO2 TREND
          </div>
          <Spark value={co2} lo={400} hi={1500} color="#818cf8" />
          <div style={{ display: "flex", gap: 24, marginTop: 10 }}>
            {[
              ["CURRENT", `${co2} ppm`, "#818cf8"],
              ["GOOD",    "<1000 ppm",  "#4ade80"],
              ["ALERT",   ">1200 ppm",  "#f87171"],
            ].map(([l, v, c]) => (
              <div key={l}>
                <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 8, letterSpacing: 1 }}>{l}</div>
                <div style={{ color: c, fontSize: 16, fontWeight: 800, fontFamily: "'Courier New', monospace" }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
