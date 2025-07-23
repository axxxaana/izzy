import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { GetStartedPage } from "./pages/GetStartedPage";
import { FounderBrandStrategyPage } from "./pages/FounderBrandStrategyPage";
import { ErrorBoundary } from "./components/ErrorBoundary";
import "./styles/index.css";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/services/founder-brand-strategy" element={<FounderBrandStrategyPage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  </StrictMode>,
);
