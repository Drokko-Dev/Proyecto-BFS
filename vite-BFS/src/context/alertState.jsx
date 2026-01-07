import { createContext, useState } from "react";

//crear el contexto
export const alertContext = createContext();

// crear el provider, para proveer el contexto
export function AlertProvider({ children }) {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow((prev) => !prev);

  return (
    <alertContext.Provider value={{ show, toggleOpen }}>
      {children}
    </alertContext.Provider>
  );
}
