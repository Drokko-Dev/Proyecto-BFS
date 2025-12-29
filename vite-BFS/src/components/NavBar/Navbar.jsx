import { useSidebar } from "../../hooks/useSidebar";
import "../../sheet-style/shared/style_navbar.css";
import * as Icons from "../../assets/svg/svg";

export function Navbar() {
  const { isOpen } = useSidebar();
  return (
    <header className={isOpen ? "navbar-open" : "navbar-closed"}>
      <h1>Bandeja de Entrada de Tickets</h1>
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
