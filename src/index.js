import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

// Find all containers for our "React app"
const WidgetDivs = document.querySelectorAll(".catalyst-chat-container");

WidgetDivs.forEach((Div) => {
  ReactDOM.render(
    <StrictMode>
      <App domElement={Div} />
    </StrictMode>,
    Div
  );
});
