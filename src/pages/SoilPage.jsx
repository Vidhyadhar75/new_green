import useLive from "../hooks/useLive";
import PageShell from "../components/PageShell";
import SensorCard from "../components/SensorCard";
import GaugeCard from "../components/GaugeCard";

// Sensor: Soil Moisture (m3)
export default function SoilPage() {
  const moisture = useLive(0.43, 0.05, 2);

  return (
    <PageShell title="GH Soil" icon="🌱" sub="SOIL SENSORS">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        <SensorCard
          label="SOIL MOISTURE" value={moisture} unit="m3" icon="🌱"
          gradient="linear-gradient(135deg,#052e16,#065f46,#0f766e)"
          sparkColor="#6ee7b7" lo={0.1} hi={0.9}
        />
        <GaugeCard
          label="SOIL MOISTURE" value={moisture} unit="m3"
          lo={0.1} hi={0.9} gaugeColor="#6ee7b7"
          gradient="linear-gradient(135deg,#052e16,#065f46,#0f766e)"
        />
      </div>
    </PageShell>
  );
}
