import { BrowserRouter } from "react-router";
import { GlobalProvider } from "./context/GobalContext.jsx";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </BrowserRouter>,
);
