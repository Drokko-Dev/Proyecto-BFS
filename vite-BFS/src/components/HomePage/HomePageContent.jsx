import { HomePageHeader } from "./HomePageHeader.jsx";
import { HomePageFilter } from "./HomePageFilter.jsx";
import { HomePageCategoryTicket } from "./HomePageCategoryTicket.jsx";
import { useGlobal } from "../../context/GobalContext.jsx";
import "../../sheet-style/pages/home/home_main.css";

export function HomePageContent() {
  const { isOpenSidebar } = useGlobal();
  const sidebarClass = isOpenSidebar ? "sidebar-open" : "sidebar-closed";
  return (
    <div className={`homePageContent ${sidebarClass}`}>
      <main>
        <HomePageHeader />
        <HomePageFilter />
        <HomePageCategoryTicket />
      </main>
    </div>
  );
}
