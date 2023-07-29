import { useContext, useState } from "react";
import { createContext } from "react";

export const stateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const data = {
    darkMode,
    setDarkMode,
    toggleDarkMode,
  };

  return <stateContext.Provider value={data}>{children}</stateContext.Provider>;
};

export const stateContextCustom = () => useContext(stateContext);
