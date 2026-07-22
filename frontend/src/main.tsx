// Redirect www to non-www and http to https on production domain
if (typeof window !== "undefined") {
  const hostname = window.location.hostname;
  const protocol = window.location.protocol;

  if (hostname === "www.excelenciaint.com") {
    window.location.replace(`https://excelenciaint.com${window.location.pathname}${window.location.search}${window.location.hash}`);
  } else if (hostname === "excelenciaint.com" && protocol === "http:") {
    window.location.replace(`https://excelenciaint.com${window.location.pathname}${window.location.search}${window.location.hash}`);
  }
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
      
import "./index.css";

import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* StrictMode is a tool for highlighting potential problems in development */}

    <BrowserRouter>
      {/* Enables client-side routing */}

      <HelmetProvider>
        {/* Enables dynamic SEO tags */}

        <App />
        {/* Main app component */}

      </HelmetProvider>
    </BrowserRouter>

  </StrictMode>
);