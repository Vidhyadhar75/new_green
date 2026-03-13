import useLive from "../hooks/useLive";
import PageShell from "../components/PageShell";
import SensorCard from "../components/SensorCard";

// Sensors: Moisture (%), Temperature (C), pH (pH), EC (ec),
//          Nitrogen (N2), Phosphorus (phs), Potassium (mmol)
export default function NPKPage() {
  const moisture   = useLive(54, 8, 1);
  const temp       = useLive(24, 2, 1);
  const ph         = useLive(6.4, 0.3, 1);
  const ec         = useLive(1.8, 0.2, 2);
  const nitrogen   = useLive(45, 10, 1);
  const phosphorus = useLive(28, 6, 1);
  const potassium  = useLive(180, 20, 0);

  return (
    <PageShell title="GH NPK" icon="🧪" sub="NUTRIENT SENSORS">

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18, marginBottom: 18 }}>
        <SensorCard label="MOISTURE"    value={moisture} unit="%"  icon="💧" gradient="linear-gradient(135deg,#0c4a6e,#0369a1,#0284c7)" sparkColor="#7dd3fc" lo={20}  hi={90} />
        <SensorCard label="TEMPERATURE" value={temp}     unit="C"  icon="🌡️" gradient="linear-gradient(135deg,#7c1d1d,#b91c1c,#dc2626)" sparkColor="#fca5a5" lo={10}  hi={40} />
        <SensorCard label="pH"          value={ph}       unit="pH" icon="⚗️" gradient="linear-gradient(135deg,#365314,#4d7c0f,#65a30d)" sparkColor="#d9f99d" lo={4}   hi={9}  />
        <SensorCard label="EC"          value={ec}       unit="ec" icon="🔋" gradient="linear-gradient(135deg,#064e3b,#065f46,#047857)" sparkColor="#6ee7b7" lo={0.5} hi={4}  />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
        <SensorCard label="NITROGEN"   value={nitrogen}   unit="N2"   icon="🌿" gradient="linear-gradient(135deg,#052e16,#065f46,#059669)" sparkColor="#34d399" lo={0}  hi={100} />
        <SensorCard label="PHOSPHORUS" value={phosphorus} unit="phs"  icon="🔬" gradient="linear-gradient(135deg,#500724,#9d174d,#be185d)" sparkColor="#f9a8d4" lo={0}  hi={60}  />
        <SensorCard label="POTASSIUM"  value={potassium}  unit="mmol" icon="⚡" gradient="linear-gradient(135deg,#78350f,#b45309,#d97706)" sparkColor="#fcd34d" lo={80} hi={280} />
      </div>
    </PageShell>
  );
}
