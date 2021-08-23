import React, { useContext, useState } from "react";

const ToggleContext = React.createContext();
const ToggleUpdateContext = React.createContext();
const DarkThemeContext = React.createContext();
const UpdateDarkThemeContext = React.createContext();

export function useToggle() {
  return useContext(ToggleContext);
}
export function useToggleUpdate() {
  return useContext(ToggleUpdateContext);
}
export function useTheme() {
  return useContext(DarkThemeContext);
}
export function useUpdateTheme() {
  return useContext(UpdateDarkThemeContext);
}

export function ToggleProvider({ children }) {
  const [toggle, setToggle] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  function updateToggle() {
    setToggle((prevToggle) => !prevToggle);
  }
  function updateTheme() {
    setDarkTheme((prevTheme) => !prevTheme);
  }
  return (
    <ToggleContext.Provider value={toggle}>
      <ToggleUpdateContext.Provider value={updateToggle}>
        <DarkThemeContext.Provider value={darkTheme}>
          <UpdateDarkThemeContext.Provider value={updateTheme}>
            {children}
          </UpdateDarkThemeContext.Provider>
        </DarkThemeContext.Provider>
      </ToggleUpdateContext.Provider>
    </ToggleContext.Provider>
  );
}
