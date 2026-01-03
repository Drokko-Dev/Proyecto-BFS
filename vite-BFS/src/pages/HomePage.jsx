import { SideBar } from "../components/SideBar/SideBar";
import { Navbar } from "../components/NavBar/Navbar";

export function HomePage() {
  return (
    <>
      <Navbar />
      <SideBar />
      <ProfileMenu/>
    </>
  );
}
