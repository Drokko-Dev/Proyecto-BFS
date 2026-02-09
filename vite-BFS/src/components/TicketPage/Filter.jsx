
export function Filter() {
  return (
    <div style={{display: 'flex', padding:'auto', position:'absolute',left:'250px', top:'250px'}}>
    <main>
        <h1>Gestiona y Organiza todos los Tickets Generados</h1>

        <div class="ticket-search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
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
          <input type="text" placeholder="Busca por ID o palabra clave..." />
        </div>

        <div class="filter">
          <select name="priority" class="filterSelect priority">
            <option value="">Prioridad</option>
          </select>

          <select name="date" class="filterSelect date">
            <option value="">Fecha</option>
          </select>

          <select name="assigned_to" class="filterSelect assigned_to">
            <option value="">Usuario</option>
          </select>

          <select name="status" class="filterSelect status">
            <option value="">Estado</option>
          </select>

          <select name="category" class="filterSelect category">
            <option value="">Categoria</option>
          </select>
        </div>

        <section class="tickets">
          <div class="header">
            <h1>ID</h1>
            <h1>Titulo</h1>
            <h1>Prioridad</h1>
            <h1>Estado</h1>
            <h1>Fecha de Creación</h1>
            <h1>Asignado a</h1>
            <h1>Acciones</h1>
          </div>
          <div class="ticket"></div>
        </section>
      </main>

    </div>
  )
}