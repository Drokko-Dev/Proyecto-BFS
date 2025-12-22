import React from "react";
import {
  ChevronLeftPipe,
  SmartHome,
  SmartTickets,
  SmartReport,
  SmartTeam,
  SmartPlus,
  SmartSettings,
  SmartOut,
} from "../icons/icons.jsx";
import { SidebarItem } from "./SidebarItem.jsx";
import "../sheets-style/sideBar.css";

const MENU_ITEMS = [
  { id: "home", label: "Home", icon: SmartHome },
  { id: "tickets", label: "Tickets", icon: SmartTickets },
  { id: "reportes", label: "Reportes", icon: SmartReport },
  { id: "equipos", label: "Equipos", icon: SmartTeam },
  { id: "crear", label: "Crear Ticket", icon: SmartPlus },
  { id: "config", label: "Configuración", icon: SmartSettings },
  { id: "logout", label: "Cerrar Sesión", icon: SmartOut }, // Opcional: para estilos diferentes
];

export function SideBar({ isOpen, handleClick }) {
  return (
    <aside
      id="sidebar"
      className={isOpen ? "side-navbar-show" : "side-navbar-none"}
    >
      <button
        id="toggleSidebar"
        className="toggle-btn"
        aria-label="toggle button sidebar"
        onClick={handleClick}
      >
        <ChevronLeftPipe />
      </button>
      <div className="logo">
        <img src="./images/TicketFlow_logo.png" alt="page logo" />
        <h1>TicketFlow</h1>
        <span>Gestor de Tickets</span>
      </div>
      <ul className="nav-links">
        {MENU_ITEMS.map((item) => {
          const IconComponent = item.icon;
          return (
            <SidebarItem key={item.id}>
              <IconComponent />
              {item.label}
            </SidebarItem>
          );
        })}
      </ul>
    </aside>
  );
}
