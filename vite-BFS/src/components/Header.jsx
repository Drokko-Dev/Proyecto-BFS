import '../sheets-style/header.css'

export function Header () {
  return (
    <header>
        <h1>Bandeja de Entrade de Tickets</h1>
        <div class="search-box">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-search"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
          </button>
          <input type="text" placeholder="Busca ticket..." />
          <button id="open-modal">
            <svg
              class="bell-icon default"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
              />
              <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
            </svg>

            <svg
              class="bell-icon hover"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z"
              />
              <path
                d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z"
              />
            </svg>
          </button>
          <div class="profile">
            <img
              src="./images/perfil_demo.png"
              alt="profile picture"
              id="profile"
            />
          </div>
          <div class="menu" id="menu">
            <h3>Jaime Vega<br /><span>main glaive insecto</span></h3>
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
        </div>
      </header>
  )
}