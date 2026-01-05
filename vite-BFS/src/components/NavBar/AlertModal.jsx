import { useEffect, useState, useRef } from "react";
import * as Icons from "../../assets/svg/svg";

export function AlertModal() {
  const menuRef = useRef(null);
  const [showAlert, setShowAlert] = useState(false);
  const show = showAlert ? "active" : "";
  const HandleClick = () => {
    setShowAlert((prev) => !prev);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowAlert(false);
      }
    };
    if (showAlert) {
      document.addEventListener("mousedown", handleClickOutside);
      console.log(menuRef.current);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showAlert]);
  return (
    <>
      <button id="open-modal" onClick={HandleClick}>
        {Icons.AlertOpen}
        {Icons.AlertOpenHover}
      </button>
      <div className={`modal-alerta ${show}`}>
        <div className="modal-content" ref={menuRef}>
          <button className="close-button-modal" onClick={HandleClick}>
            {Icons.CloseAlert}
          </button>
          <h2>Alertas</h2>
          <ul>
            <li>Tienes 3 nuevos tickets sin asignar.</li>
            <li>Ticket de alta prioridad #1025 fue actualizado.</li>
            <li>El ticket #1018 ha sido cerrado.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
