import { HomePage } from "./pages/HomePage";
import { TicketPage } from "./pages/TicketPage";
import { LoginPage } from "./pages/LoginPage";
import { ReportPage } from "./pages/ReportPage";
import { TeamPage } from "./pages/TeamPage";
import { CreateTicketPage } from "./pages/CreateTicketPage";
import { ConfigPage } from "./pages/ConfigPage";
import { Routes, Route } from "react-router";
import { useLocation } from "react-router";
import "./sheet-style/shared/style_body.css";
import "./sheet-style/shared/style_responsive.css";

export function App() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="tickets" element={<TicketPage />} />
        <Route path="reportes" element={<ReportPage />} />
        <Route path="equipos" element={<TeamPage />} />
        <Route path="crear" element={<CreateTicketPage />} />
        <Route path="config" element={<ConfigPage />} />
      </Routes>
    </>
  );
}
