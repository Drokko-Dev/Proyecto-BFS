import { SideBar } from "../components/SideBar/SideBar";
import { Navbar } from "../components/NavBar/Navbar";
import { HomePageContent } from "../components/HomePage/HomePageContent";

export function HomePage() {
  return (
    <>
      <Navbar />
      <SideBar />
      <HomePageContent />
    </>
  );
}
