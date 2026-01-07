import { use, useEffect, useRef, useState } from "react";
import "../sheet-style/shared/profileMenu.css";
import { Edit, Message, UserCircle } from "../assets/svg/svg";

export function ProfileMenu() {
  const menuRef = useRef(null);
  const btnRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        btnRef.current &&
        !menuRef.current.contains(event.target) &&
        !btnRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      <button
        ref={btnRef}
        className="profile"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src="./public/Profile1.png" alt="profile picture" id="profile" />
      </button>
      <div ref={menuRef}>
        {isOpen && (
          <div className="menu active" id="menu">
            <h3>
              Jaime Vega
              <br />
              <span>main glaive insecto</span>
            </h3>
            <ul>
              <li>
                {UserCircle}
                <a href="#">Mi Perfil</a>
              </li>
              <li>
                {Edit}
                <a href="#">Editar perfil</a>
              </li>
              <li>
                {Message}
                <a href="#">Mensajes</a>
              </li>
              <li>
                <img src="./svg/settings.svg" />
                <a href="#">Configuraciones</a>
              </li>
              <li>
                <img src="./svg/help.svg" />
                <a href="#">Ayuda</a>
              </li>
              <li>
                <img src="./svg/logout.svg" />
                <a href="#">Cerrar sesión</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
