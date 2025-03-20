import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import "./styles/theme.css";
import "./multilingual"; 
import "./styles/responsive.css";
import "./styles/animations.css";

// Ensure smooth scrolling behavior
document.documentElement.style.scrollBehavior = "smooth";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);