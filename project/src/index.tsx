import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { GetStartedPage } from "./pages/GetStartedPage";
import { FounderBrandStrategyPage } from "./pages/FounderBrandStrategyPage";
import { FractionalMarketingPage } from "./pages/FractionalMarketingPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { PortfolioCaseStudiesPage } from "./pages/PortfolioCaseStudiesPage";
import PortfolioNexusConnectedPage from "./pages/PortfolioNexusConnectedPage";
import PortfolioWellnergyPage from "./pages/PortfolioWellnergyPage";
import PortfolioGoFounderPage from "./pages/PortfolioGoFounderPage";
import { NotFoundPage } from "./pages/NotFoundPage";
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
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/case-studies" element={<PortfolioCaseStudiesPage />} />
          <Route path="/portfolio/nexus-connected" element={<PortfolioNexusConnectedPage />} />
          <Route path="/portfolio/wellnergy" element={<PortfolioWellnergyPage />} />
          <Route path="/portfolio/gofounder" element={<PortfolioGoFounderPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  </StrictMode>,
);
