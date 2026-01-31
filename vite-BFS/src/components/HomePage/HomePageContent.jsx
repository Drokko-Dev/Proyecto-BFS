import { HomePageHeader } from "./HomePageHeader.jsx";
import { HomePageFilterContainer } from "./HomePageFilterContainer.jsx";
import { HomePageCategoryTicket } from "./HomePageCategoryTicket.jsx";
import { useSidebar } from "../../hooks/useSidebar";
import "../../sheet-style/pages/home/home_main.css";

export function HomePageContent() {
  const { isOpen } = useSidebar();
  const sidebarClass = isOpen ? "sidebar-open" : "sidebar-closed";
  return (
    <div className={`homePageContent ${sidebarClass}`}>
      <main>
        <HomePageHeader />
        <HomePageFilterContainer />
        <HomePageCategoryTicket />
      </main>
    </div>
  );
}
