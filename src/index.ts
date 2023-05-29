import { createElement } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById("root");
if (container){
  const root = createRoot(container);
  const element = createElement(
    StrictMode,
    {},
    createElement(App, {}, [])
  );
  root.render(element);
}

