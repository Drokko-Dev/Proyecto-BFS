document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggleSidebar");
  const sidebar = document.getElementById("sidebar");

  btn.addEventListener("click", () => {
    sidebar.classList.toggle("side-navbar-show");
    sidebar.classList.toggle("side-navbar-none");
  });
});
