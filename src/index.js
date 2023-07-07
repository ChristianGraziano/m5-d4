import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { GetBookProvider } from "./context/GetBookProvider";

import { ThemeProvider } from "../src/context/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <GetBookProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </GetBookProvider>
  </ThemeProvider>
);
