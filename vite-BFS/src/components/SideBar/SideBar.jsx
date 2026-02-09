import { useContext, useState } from "react";
import { useGlobal } from "../../context/GobalContext.jsx";
import { SidebarItem } from "./SidebarItem";
import PropTypes from "prop-types";
import { MENU_ITEMS } from "../MenuItems.jsx";
import * as Icons from "../../assets/svg/svg";

import "../../sheet-style/shared/style_sidebar_open.css";
import "../../sheet-style/shared/style_sidebar_close.css";
import "../../sheet-style/shared/style_sidebar.css";

export function SideBar(props) {
  // agregue la funcionalidad de abrir y cerrar el boton aquí pero lo ideal sería cambiar el useState por useContext, Redux o Zustand
  const { isOpenSidebar, toggleOpenSidebar } = useGlobal();
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
      className={isOpenSidebar ? "side-navbar-show" : "side-navbar-none"}
    >
      <button
        id="toggleSidebar"
        className="toggle-btn"
        onClick={() => toggleOpenSidebar()}
      >
        {Icons.CloseNavbar}
      </button>
      <div className="logo">
        <img src="/img/TicketFlow_logo.png" alt="page logo" />
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
