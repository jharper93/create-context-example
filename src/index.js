import React from "react";
import ReactDOM from "react-dom";
import AppShell from "../src/components/Appshell";

import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <AppShell />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
