import { useSidebar } from "../../hooks/useSidebar";
import { useLocation } from "react-router";

import { MENU_ITEMS } from "../MenuItems.jsx";
import * as Icons from "../../assets/svg/svg";

import "../../sheet-style/shared/style_navbar.css";

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
        <button id="open-modal">
          {Icons.AlertOpen}
          {Icons.AlertOpenHover}
        </button>
        <div className="profile">
          <img src="./public/Profile1.png" alt="profile picture" id="profile" />
        </div>
      </div>
    </header>
  );
}
