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