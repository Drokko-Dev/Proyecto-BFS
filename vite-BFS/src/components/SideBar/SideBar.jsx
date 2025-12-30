import { useContext, useState } from "react";
import { useSidebar } from "../../hooks/useSidebar";
import { SidebarItem } from "./SidebarItem";
import PropTypes from "prop-types";
import * as Icons from "../../assets/svg/svg";

import "../../sheet-style/shared/style_sidebar_open.css";
import "../../sheet-style/shared/style_sidebar_close.css";
import "../../sheet-style/shared/style_sidebar.css";

const MENU_ITEMS = [
  {
    id: "home",
    titleMenu: "Home",
    titlePage: "Dashboard",
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
    titlePage: "Reportes y Métricas",
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

export function SideBar(props) {
  // agregue la funcionalidad de abrir y cerrar el boton aquí pero lo ideal sería cambiar el useState por useContext, Redux o Zustand
  const { isOpen, toggleOpen } = useSidebar();
  const itemsLi = MENU_ITEMS.map((item) => (
    <SidebarItem
      key={item.id}
      title={item.titleMenu}
      icon={item.icon}
      link={item.link}
      classname={item.classname}
    />
  ));
  return (
    <div
      id="sidebar"
      className={isOpen ? "side-navbar-show" : "side-navbar-none"}
    >
      <button
        id="toggleSidebar"
        className="toggle-btn"
        onClick={() => toggleOpen()}
      >
        {Icons.CloseNavbar}
      </button>
      <div className="logo">
        <img src="./TicketFlow_logo.png" alt="page logo" />
        <h1>TicketFlow</h1>
        <span>Gestor de Tickets</span>
      </div>
      <ul className="nav-links">{itemsLi}</ul>
    </div>
  );
}

SideBar.propTypes = {
  classname: PropTypes.string.isRequired,
};
