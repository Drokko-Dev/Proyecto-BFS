import * as Icons from "../../assets/svg/svg";

export function AlertModal(props) {
  return (
    <div className={`modal-alerta ${props.classShowAlert}`}>
      <div className="modal-content">
        <button className="close-button">{Icons.CloseAlert}</button>
        <h2>Alertas</h2>
        <ul>
          <li>Tienes 3 nuevos tickets sin asignar.</li>
          <li>Ticket de alta prioridad #1025 fue actualizado.</li>
          <li>El ticket #1018 ha sido cerrado.</li>
        </ul>
      </div>
    </div>
  );
}
