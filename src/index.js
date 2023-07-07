import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { SelectedProvider } from "./context/SelectedContext";

import { GetBookProvider } from "./context/GetBookProvider";

import { ThemeProvider } from "../src/context/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <GetBookProvider>
      <SelectedProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </SelectedProvider>
    </GetBookProvider>
  </ThemeProvider>
);
