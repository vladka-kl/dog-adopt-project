// @ts-nocheck

//import "./index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

{
  /* Router is the core of every react router component */
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
