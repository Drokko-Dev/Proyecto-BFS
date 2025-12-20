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

export function SideBar(props) {
  return (
    <>
      <div id="sidebar" className={props.className}>
        <button id="toggleSidebar" className="toggle-btn">
          {CloseNavbar}
        </button>
        <div className="logo">
          <img src="./TicketFlow_logo.png" alt="page logo" />
          <h1>TicketFlow</h1>
          <span>Gestor de Tickets</span>
        </div>
        <ul className="nav-links">
          <SidebarItem
            title={"Inicio"}
            icon={HomeIcon}
            className={"selected"}
          />
          <SidebarItem title={"Tickets"} icon={TicketIcon} />
          <SidebarItem title={"Reportes"} icon={DashboardIcon} />
          <SidebarItem title={"Equipos"} icon={TeamsIcon} />
          <SidebarItem
            title={"Crear Ticket"}
            className={"create-ticket"}
            icon={CreateTicketIcon}
          />
          <SidebarItem title={"Configuración"} icon={SettingsIcon} />
          <SidebarItem title={"Cerrar Sesión"} icon={LogoutIcon} />
        </ul>
      </div>
    </>
  );
}

SideBar.propTypes = {
  className: PropTypes.string.isRequired,
};
