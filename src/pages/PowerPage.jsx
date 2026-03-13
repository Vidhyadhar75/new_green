import useLive from "../hooks/useLive";
import PageShell from "../components/PageShell";
import SensorCard from "../components/SensorCard";
import GaugeCard from "../components/GaugeCard";

// Sensors: Voltage (V), Current (A), Power (W)
export default function PowerPage() {
  const voltage = useLive(12.3, 0.4, 1);
  const current = useLive(4.8, 0.5, 2);
  const power   = useLive(59, 3, 1);

  return (
    <PageShell title="GH Power" icon="⚡" sub="ELECTRICAL SENSORS">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, marginBottom: 18 }}>
        <SensorCard label="VOLTAGE" value={voltage} unit="V" icon="🔌" gradient="linear-gradient(135deg,#78350f,#b45309,#d97706)" sparkColor="#fcd34d" lo={10} hi={15} />
        <SensorCard label="CURRENT" value={current} unit="A" icon="⚡" gradient="linear-gradient(135deg,#0c4a6e,#0369a1,#0284c7)" sparkColor="#7dd3fc" lo={2}  hi={8}  />
        <SensorCard label="POWER"   value={power}   unit="W" icon="💡" gradient="linear-gradient(135deg,#3b0764,#6d28d9,#7c3aed)" sparkColor="#c4b5fd" lo={20} hi={80} />
      </div>
      <GaugeCard
        label="POWER" value={power} unit="W" lo={20} hi={80}
        gaugeColor="#fcd34d"
        gradient="linear-gradient(135deg,#1c0f00,#3d2000,#78350f)"
      />
    </PageShell>
  );
}
