/* document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggleSidebar");
  const sidebar = document.getElementById("sidebar");
  const body = document.body;

  btn.addEventListener("click", () => {
    sidebar.classList.toggle("side-navbar-show");
    sidebar.classList.toggle("side-navbar-none");
  });

  btn.addEventListener("click", () => {
    body.classList.toggle("sidebar-open");
    body.classList.toggle("sidebar-closed");
  });


}); */

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggleSidebar");
  const sidebar = document.getElementById("sidebar");
  const body = document.body;

  if (!btn || !sidebar || !body) {
    console.warn("Sidebar: algún elemento no se encontró.");
    return;
  }

  btn.addEventListener("click", () => {
    const isOpen = sidebar.classList.contains("side-navbar-show");

    sidebar.classList.toggle("side-navbar-show", !isOpen);
    sidebar.classList.toggle("side-navbar-none", isOpen);

    body.classList.toggle("sidebar-open", !isOpen);
    body.classList.toggle("sidebar-closed", isOpen);
  });
});
