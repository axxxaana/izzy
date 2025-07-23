import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { GetStartedPage } from "./pages/GetStartedPage";
import { FounderBrandStrategyPage } from "./pages/FounderBrandStrategyPage";
import { FractionalMarketingPage } from "./pages/FractionalMarketingPage";
import { ErrorBoundary } from "./components/ErrorBoundary";
import ScrollToTop from "./components/layout/ScrollToTop";
import "./styles/index.css";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/services/founder-brand-strategy" element={<FounderBrandStrategyPage />} />
          <Route path="/services/fractional-marketing" element={<FractionalMarketingPage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  </StrictMode>,
);
