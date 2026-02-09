import { useGlobal } from "../../context/GobalContext.jsx";
import "../../sheet-style/pages/tickets/tickets_main.css";

export function TicketPageContent() {
  const { isOpenSidebar } = useGlobal();
  const sidebarClass = isOpenSidebar ? "sidebar-open" : "sidebar-closed";
  return (
    <div className={`ticketPageContent ${sidebarClass}`}>
      <main>
        <h1>Ticket Page Content</h1>
      </main>
    </div>
  );
}
