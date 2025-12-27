import { useContext } from "react";
import { sidebarContext } from "../context/sidebarState";

export function useSidebar() {
  const context = useContext(sidebarContext)

  if (context === undefined) {
    throw new Error('useSidebar must be used within a sidebar provider')
  }
  return context
}