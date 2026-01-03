import { SideBar } from "./SideBar/SideBar";
import { Navbar } from "./NavBar/Navbar";
import { ProfileMenu } from "./ProfileMenu";

export function SideBar_Navbar() {
  return (
    <>
      <Navbar />
      <SideBar />
      <ProfileMenu/>
    </>
  );
}
