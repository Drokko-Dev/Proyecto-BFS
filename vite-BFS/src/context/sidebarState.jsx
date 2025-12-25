import {createContext, useState } from "react";

export const sidebarContext = createContext();
export function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => setIsOpen(prev => !prev);

  return (
    <sidebarContext.Provider value={{ isOpen, toggleOpen }}>
      {children}
    </sidebarContext.Provider>
  );
}
