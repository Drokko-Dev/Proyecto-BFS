document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".modal-alerta");
  const closeBtn = document.querySelector(".close-button");
  const openBtn = document.querySelector("#open-modal");

  if (!modal || !closeBtn || !openBtn) {
    console.warn("Modal: algún elemento no se encontró.");
    return;
  }

  openBtn.onclick = () => modal.classList.add("active");
  closeBtn.onclick = () => modal.classList.remove("active");
});
