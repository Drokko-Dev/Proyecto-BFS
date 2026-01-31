export function HomePageHeader() {
  return (
    <div className="main-header">
      <div className="alert">
        <span>Alertas</span>
        <h1>Tienes 3 nuevos tickets sin asignar</h1>
        <p>Ticket de alta prioridad #1025 fue actualizado.</p>
        <button>Ver</button>
      </div>
      <img src="/img/perfil_demo.png" alt="" />
    </div>
  );
}
