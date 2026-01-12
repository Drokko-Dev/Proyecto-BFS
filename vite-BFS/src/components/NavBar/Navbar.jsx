import { useSidebar } from "../../hooks/useSidebar";
import { useLocation } from "react-router";

import { MENU_ITEMS } from "../MenuItems.jsx";
import * as Icons from "../../assets/svg/svg";

import "../../sheet-style/shared/style_navbar.css";
import { useProfile } from "../../hooks/useProfiler.js";

export function Navbar() {
  const { menuRef, isProfileOpen, setIsProfileOpen } = useProfile();
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
        <button id="open-modal">
          {Icons.AlertOpen}
          {Icons.AlertOpenHover}
        </button>
        <div className="profile" ref={menuRef}>
          <img src="./public/Profile1.png" alt="profile picture" id="profile" onClick={() => setIsProfileOpen(!isProfileOpen)} />
          {isProfileOpen && (
        <div className="menu active" id="menu" >
          <h3>
            Jaime Vega
            <br />
            <span>main glaive insecto</span>
          </h3>
          <ul>
            <li>
              {Icons.UserCircle}
              <a href="#">Mi Perfil</a>
            </li>
            <li>
              {Icons.Edit}
              <a href="#">Editar perfil</a>
            </li>
            <li>
              {Icons.Message}
              <a href="#">Mensajes</a>
            </li>
            <li>
              {Icons.Config}
              <a href="#">Configuraciones</a>
            </li>
            <li>
              {Icons.Help}
              <a href="#">Ayuda</a>
            </li>
            <li>
              {Icons.Logout}
              <a href="#">Cerrar sesión</a>
            </li>
          </ul>
        </div>
      )}
        </div>
      </div>
    </header>
  );
}
