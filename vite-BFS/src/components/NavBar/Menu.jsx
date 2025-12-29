import "../../assets/svg/svg";

export function MenuPerfil() {
  return (
    <div class="menu" id="menu">
      <h3>
        Jaime Vega
        <br />
        <span>main glaive insecto</span>
      </h3>
      <ul>
        <li>
          <img src="./svg/user-circle.svg" />
          <a href="#">Mi Perfil</a>
        </li>
        <li>
          <img src="./svg/edit.svg" />
          <a href="#">Editar perfil</a>
        </li>
        <li>
          <img src="./svg/message-chatbot.svg" />
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
  );
}
