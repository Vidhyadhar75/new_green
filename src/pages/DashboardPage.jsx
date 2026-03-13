import useLive from "../hooks/useLive";
import NatureScene from "../components/NatureScene";
import GaugeCard from "../components/GaugeCard";
import SensorCard from "../components/SensorCard";

export default function DashboardPage() {
  const airTemp  = useLive(27, 2, 1);
  const humidity = useLive(72, 6, 1);
  const co2      = useLive(820, 60, 0);
  const soilM    = useLive(0.46, 0.04, 2);
  const nitrogen = useLive(39, 8, 1);
  const voltage  = useLive(12.4, 0.4, 1);
  const power    = useLive(59, 3, 1);

  const sceneTiles = [
    { label: "TEMP",     val: airTemp,  unit: "°C",  icon: "🌡️", color: "#fb923c" },
    { label: "HUMIDITY", val: humidity, unit: "%",   icon: "💧", color: "#38bdf8" },
    { label: "CO₂",      val: co2,      unit: "ppm", icon: "🌫️", color: "#a78bfa" },
    { label: "SOIL",     val: soilM,    unit: "m³",  icon: "🌱", color: "#4ade80" },
  ];

  return (
    <div>
      <NatureScene tiles={sceneTiles} />

      {/* Gauge row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, marginBottom: 18 }}>
        <GaugeCard label="TEMPERATURE" value={airTemp}  unit="°C"  lo={10}  hi={45}   gaugeColor="#fb923c" gradient="linear-gradient(135deg,#7c2d12,#c2410c,#ea580c)" />
        <GaugeCard label="HUMIDITY"    value={humidity} unit="%"   lo={20}  hi={100}  gaugeColor="#38bdf8" gradient="linear-gradient(135deg,#0c4a6e,#0284c7,#0ea5e9)" />
        <GaugeCard label="CO₂ LEVEL"   value={co2}      unit="ppm" lo={400} hi={1500} gaugeColor="#a78bfa" gradient="linear-gradient(135deg,#3b0764,#6d28d9,#7c3aed)" />
      </div>

      {/* Sensor cards row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
        <SensorCard label="NITROGEN"      value={nitrogen} unit="N₂" icon="🧪" gradient="linear-gradient(135deg,#052e16,#065f46,#047857)" sparkColor="#34d399" lo={0}   hi={100} />
        <SensorCard label="VOLTAGE"       value={voltage}  unit="V"  icon="⚡" gradient="linear-gradient(135deg,#78350f,#b45309,#d97706)" sparkColor="#fbbf24" lo={10}  hi={15}  />
        <SensorCard label="SOIL MOISTURE" value={soilM}    unit="m³" icon="🌱" gradient="linear-gradient(135deg,#1e3a5f,#1d4ed8,#2563eb)" sparkColor="#60a5fa" lo={0.1} hi={0.9} />
      </div>
    </div>
  );
}
