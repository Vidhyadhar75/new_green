import { useState } from "react";
import Sidebar from "./components/Sidebar";
import DashboardPage  from "./pages/DashboardPage";
import AirQualityPage from "./pages/AirQualityPage";
import NPKPage        from "./pages/NPKPage";
import SoilPage       from "./pages/SoilPage";
import PowerPage      from "./pages/PowerPage";
import GHStatusPage   from "./pages/GHStatusPage";
import MotorsPage     from "./pages/MotorsPage";

export default function App() {
  const [page, setPage] = useState("dashboard");

  const views = {
    dashboard: <DashboardPage />,
    air:       <AirQualityPage />,
    npk:       <NPKPage />,
    soil:      <SoilPage />,
    power:     <PowerPage />,
    status:    <GHStatusPage />,
    motors:    <MotorsPage />,
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0a0f1e; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(74,222,128,0.22); border-radius: 3px; }
        @keyframes blink {
          0%, 100% { opacity: 1;   box-shadow: 0 0 6px #4ade80; }
          50%       { opacity: 0.4; box-shadow: 0 0 2px #4ade80; }
        }
      `}</style>

      <div style={{
        display: "flex", minHeight: "100vh",
        background: "radial-gradient(ellipse 90% 60% at 20% 0%, #1a1a2e 0%, #16213e 35%, #0f3460 65%, #0a1628 100%)",
        fontFamily: "'Syne', system-ui, sans-serif",
        color: "#efffee",
      }}>
        <Sidebar page={page} setPage={setPage} />

        <main style={{ flex: 1, padding: "28px 28px", overflowY: "auto", maxHeight: "100vh" }}>
          {views[page]}
        </main>
      </div>
    </>
  );
}
