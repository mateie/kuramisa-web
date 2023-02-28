import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "@fontsource/varta/300.css";
import "@fontsource/varta/400.css";
import "@fontsource/varta/500.css";
import "@fontsource/varta/700.css";

const dom = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(dom).render(<App />);
