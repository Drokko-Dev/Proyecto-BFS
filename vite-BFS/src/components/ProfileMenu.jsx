import "../sheet-style/shared/profileMenu.css";
import { Edit, Message, UserCircle } from "../assets/svg/svg";
import { useProfile } from "../hooks/useProfiler";


export function ProfileMenu() {
  const { menuRef, isProfileOpen, setIsProfileOpen} = useProfile()
  return (
    <div ref={menuRef}>
      <button
        className="botonImagen"
        onClick={() => setIsProfileOpen(!isProfileOpen)}
      ></button>
      {isProfileOpen && (
        <div className="menu active" id="menu" >
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
  );
}