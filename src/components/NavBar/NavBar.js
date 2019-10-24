import React, { useContext } from "react";
import "./styles.css";
import { IsLightTheme } from "../Appshell";

const Nav = () => {
  const { getters, setters } = useContext(IsLightTheme);

  const handleSetTheme = () =>
    setters.setTheme(getters.theme === "day" ? "night" : "day");

  return (
    <nav className={getters.theme === "day" ? "" : "nightTheme"}>
      <ul>
        <li>
          <a className={getters.theme === "day" ? "" : "nightTheme"} href="/">
            Home
          </a>
        </li>
        <li>
          <a
            className={getters.theme === "day" ? "" : "nightTheme"}
            href="/about"
          >
            About
          </a>
        </li>
        <li>
          <a
            className={getters.theme === "day" ? "" : "nightTheme"}
            href="/articles"
          >
            Articles
          </a>
        </li>
      </ul>
      <button onClick={handleSetTheme}>Toggle</button>;
    </nav>
  );
};

export default Nav;
