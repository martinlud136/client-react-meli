import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ItemsProviders } from "./context/items.context";
import { ItemProvider } from "./context/detail.context";
import "./index.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ItemsProviders>
        <ItemProvider>
          <App />
        </ItemProvider>
      </ItemsProviders>
    </BrowserRouter>
  </React.StrictMode>
);
