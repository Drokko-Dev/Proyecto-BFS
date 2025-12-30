import { useSidebar } from "../../hooks/useSidebar";
import { useLocation } from "react-router";
import "../../sheet-style/shared/style_navbar.css";
import * as Icons from "../../assets/svg/svg";

const MENU_ITEMS = [
  {
    id: "home",
    titleMenu: "Home",
    titlePage: "Resumen General",
    icon: Icons.HomeIcon,
    link: "/",
  },
  {
    id: "tickets",
    titleMenu: "Tickets",
    titlePage: "Gestión de Tickets",
    icon: Icons.TicketIcon,
    link: "/tickets",
  },
  {
    id: "reportes",
    titleMenu: "Reportes",
    titlePage: "Indicadores y Métricas",
    icon: Icons.DashboardIcon,
    link: "/reportes",
  },
  {
    id: "equipos",
    titleMenu: "Equipos",
    titlePage: "Equipos de Trabajo",
    icon: Icons.TeamsIcon,
    link: "/equipos",
  },
  {
    id: "crear",
    titleMenu: "Crear Ticket",
    titlePage: "Nuevo Ticket",
    icon: Icons.CreateTicketIcon,
    link: "/crear",
    classname: "create-ticket",
  },
  {
    id: "config",
    titleMenu: "Configuración",
    titlePage: "Configuración",
    icon: Icons.SettingsIcon,
    link: "/config",
  },
  {
    id: "logout",
    titleMenu: "Cerrar Sesión",
    titlePage: "",
    icon: Icons.LogoutIcon,
    link: "",
  },
];

export function Navbar() {
  const { isOpen } = useSidebar();
  const location = useLocation();
  function getTitleFromPath(path) {
    const item = MENU_ITEMS.find((item) => item.link === path);
    return item ? item.titlePage : "";
  }

  return (
    <header className={isOpen ? "navbar-open" : "navbar-closed"}>
      <h1>{getTitleFromPath(location.pathname)}</h1>
      <div className="search-box">
        <button>{Icons.SearchIcon}</button>
        <input type="text" placeholder="Busca ticket..." />
        <button id="open-modal"></button>
        <div className="profile">
          <img
            src="./images/perfil_demo.png"
            alt="profile picture"
            id="profile"
          />
        </div>
      </div>
    </header>
  );
}
