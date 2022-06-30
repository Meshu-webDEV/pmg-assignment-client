import React from "react";
import ReactDOM from "react-dom/client";
import AlertState from "./context/Alert/AlertState";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AlertState>
    <App />
  </AlertState>
);
