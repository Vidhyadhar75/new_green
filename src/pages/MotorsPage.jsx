import PageShell from "../components/PageShell";
import MotorCard from "../components/MotorCard";

// Actuators: Motor 2, Motor 1
export default function MotorsPage() {
  return (
    <PageShell title="GH Motors" icon="⚙️" sub="ACTUATOR CONTROL">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 22 }}>
        <MotorCard label="Motor 2" icon="⚙️" defaultOn={true} gradient="linear-gradient(135deg,#065f46,#059669,#10b981)" />
        <MotorCard label="Motor 1" icon="🔧" defaultOn={true} gradient="linear-gradient(135deg,#1e3a5f,#1d4ed8,#2563eb)" />
      </div>
    </PageShell>
  );
}
