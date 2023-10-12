import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import {Provider} from "./context/books";
import "./index.css"

const element = document.getElementById("root")
const root = ReactDOM.createRoot(element)

root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
)