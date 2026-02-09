import { useGlobal } from "../../context/GobalContext.jsx";
import { useLocation } from "react-router";
import { AlertModal } from "./AlertModal.jsx";
import { ProfileMenu } from "./ProfileMenu.jsx";
import { MENU_ITEMS } from "../MenuItems.jsx";
import * as Icons from "../../assets/svg/svg";

import "../../sheet-style/shared/style_navbar.css";

export function Navbar() {
  const { isOpenSidebar } = useGlobal();
  const location = useLocation();
  function getTitleFromPath(path) {
    const item = MENU_ITEMS.find((item) => item.link === path);
    return item ? item.titlePage : "";
  }

  return (
    <header className={isOpenSidebar ? "navbar-open" : "navbar-closed"}>
      <h1>{getTitleFromPath(location.pathname)}</h1>
      <div className="search-box">
        <button className="search-button">{Icons.SearchIcon}</button>
        <input type="text" placeholder="Busca ticket..." />
        <AlertModal />
        <ProfileMenu />
      </div>
    </header>
  );
}
