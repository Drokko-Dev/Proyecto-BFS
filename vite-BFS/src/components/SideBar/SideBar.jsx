import { useContext, useState } from "react";
import { useSidebar } from "../../hooks/useSidebar";
import { SidebarItem } from "./SidebarItem";
import PropTypes from "prop-types";
import {
  HomeIcon,
  TicketIcon,
  DashboardIcon,
  TeamsIcon,
  CreateTicketIcon,
  SettingsIcon,
  LogoutIcon,
  CloseNavbar,
} from "../../assets/svg/svg";

import "../../sheet-style/shared/style_sidebar.css";
import "../../sheet-style/shared/style_sidebar_open.css";
import "../../sheet-style/shared/style_sidebar_close.css";

const MENU_ITEMS = [
  { id: "home", title: "Home", icon: HomeIcon, link: "/" },
  { id: "tickets", title: "Tickets", icon: TicketIcon, link: "/tickets" },
  { id: "reportes", title: "Reportes", icon: DashboardIcon, link: "/reportes" },
  { id: "equipos", title: "Equipos", icon: TeamsIcon, link: "/equipos" },
  {
    id: "crear",
    title: "Crear Ticket",
    icon: CreateTicketIcon,
    link: "/crear",
    classname: "create-ticket",
  },
  { id: "config", title: "Configuración", icon: SettingsIcon, link: "/config" },
];

export function SideBar(props) {
  // agregue la funcionalidad de abrir y cerrar el boton aquí pero lo ideal sería cambiar el useState por useContext, Redux o Zustand
  const { isOpen, toggleOpen } = useSidebar();
  const itemsLi = MENU_ITEMS.map((item) => (
    <SidebarItem
      key={item.id}
      title={item.title}
      icon={item.icon}
      link={item.link}
      classname={item.classname}
    />
  ));
  return (
    <>
      <div
        id="sidebar"
        className={isOpen ? "side-navbar-show" : "side-navbar-none"}
      >
        <button
          id="toggleSidebar"
          className="toggle-btn"
          onClick={() => toggleOpen()}
        >
          {CloseNavbar}
        </button>
        <div className="logo">
          <img src="./TicketFlow_logo.png" alt="page logo" />
          <h1>TicketFlow</h1>
          <span>Gestor de Tickets</span>
        </div>
        <ul className="nav-links">
          {itemsLi}
          <SidebarItem title={"Cerrar Sesión"} icon={LogoutIcon} />
        </ul>
      </div>
    </>
  );
}

SideBar.propTypes = {
  className: PropTypes.string.isRequired,
};
