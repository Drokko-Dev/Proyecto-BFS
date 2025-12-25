import { BrowserRouter } from "react-router";
import { SidebarProvider } from "./context/sidebarState.jsx";
import { createRoot } from "react-dom/client";
import "./sheet-style/shared/style_body.css";
import "./sheet-style/shared/style_responsive.css";
import { App } from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </BrowserRouter>
);
