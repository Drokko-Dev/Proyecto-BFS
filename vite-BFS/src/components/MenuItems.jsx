import * as Icons from "./../assets/svg/svg";

export const MENU_ITEMS = [
  {
    id: "home",
    titleMenu: "Home",
    titlePage: "Dashboard",
    icon: Icons.HomeIcon,
    link: "/",
  },
  {
    id: "tickets",
    titleMenu: "Tickets",
    titlePage: "Gestión de Tickets",
    icon: Icons.TicketIcon,
    link: "/tickets",
  },
  {
    id: "reportes",
    titleMenu: "Reportes",
    titlePage: "Reportes y Métricas",
    icon: Icons.DashboardIcon,
    link: "/reportes",
  },
  {
    id: "equipos",
    titleMenu: "Equipos",
    titlePage: "Equipos de Trabajo",
    icon: Icons.TeamsIcon,
    link: "/equipos",
  },
  {
    id: "crear",
    titleMenu: "Crear Ticket",
    titlePage: "Nuevo Ticket",
    icon: Icons.CreateTicketIcon,
    link: "/crear",
    classname: "create-ticket",
  },
  {
    id: "config",
    titleMenu: "Configuración",
    titlePage: "Configuración",
    icon: Icons.SettingsIcon,
    link: "/config",
  },
  {
    id: "logout",
    titleMenu: "Cerrar Sesión",
    titlePage: "",
    icon: Icons.LogoutIcon,
    link: "",
  },
];
