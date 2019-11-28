import React from "react";
import ReactDOM from "react-dom";
import Contact from "./contact";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Contact />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
