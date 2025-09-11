import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import HomePage from "./screens/HomePage";
import NotFound from "./screens/NotFound";
import Senturium from "./screens/senturium/Senturium";
import Chapuis from "./screens/W2/Chapuis";
import BNRCoaching from "./screens/W2/BNR_Coaching";
import ErwanMenut from "./screens/W2/erwan_menut";
import { reportWebVitals } from "./utils/webVitals";

const container = document.getElementById("app");

if (container) {
  createRoot(container).render(
    <StrictMode>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/senturium" element={<Senturium />} />
            <Route path="/chapuis" element={<Chapuis />} />
            <Route path="/bnr_coaching" element={<BNRCoaching />} />
            <Route path="/bnr-coaching" element={<BNRCoaching />} />
            <Route path="/erwan-menut" element={<ErwanMenut />} />
            <Route path="/erwan_menut" element={<ErwanMenut />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </StrictMode>
  );

  // Start Web Vitals reporting in development only
  if (import.meta.env.DEV) {
    reportWebVitals();
  }
}
