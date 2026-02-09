import React, { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // Sidebar state
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  const toggleOpenSidebar = () => setIsOpenSidebar((prev) => !prev);
  const [tickets, setTickets] = useState([]);
  // Fetch tickets data
  useEffect(() => {
    fetch("/info_tickets.json")
      .then((response) => {
        console.log(response.ok);
        return response.json();
      })
      .then((dataTickets) => {
        setTickets(dataTickets.tickets);
      })
      .catch((error) => {
        console.error("Error fetching tickets data:", error);
      });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        tickets,
        isOpenSidebar,
        toggleOpenSidebar,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
