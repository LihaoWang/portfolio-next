import React, { useContext, useState } from "react";

const ToggleContext = React.createContext();
const ToggleUpdateContext = React.createContext();

export function useToggle() {
  return useContext(ToggleContext);
}
export function useToggleUpdate() {
  return useContext(ToggleUpdateContext);
}

export function ToggleProvider({ children }) {
  const [toggle, setToggle] = useState(true);

  function updateToggle() {
    setToggle((prevToggle) => !prevToggle);
  }
  return (
    <ToggleContext.Provider value={toggle}>
      <ToggleUpdateContext.Provider value={updateToggle}>
        {children}
      </ToggleUpdateContext.Provider>
    </ToggleContext.Provider>
  );
}
