import { SideBar } from "../components/SideBar/SideBar";
import { Navbar } from "../components/NavBar/Navbar";
import { TicketPageContent } from "../components/TicketPage/TicketPageContent.jsx";

export function TicketPage() {
  return (
    <>
      <Navbar />
      <SideBar />
      <TicketPageContent />
    </>
  );
}
