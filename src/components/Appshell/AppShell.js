import React from "react";

import NavBar from "../../components/NavBar";
import Routes from "./partials/Routes";

export const IsLightTheme = React.createContext();

const AppShell = () => {
  const [theme, setTheme] = React.useState("day");

  return (
    <>
      <IsLightTheme.Provider
        value={{
          getters: {
            theme
          },
          setters: {
            setTheme
          }
        }}
      >
        <NavBar />
        <Routes />
      </IsLightTheme.Provider>
    </>
  );
};

export default AppShell;
