export const APP_CONFIG = {
  title: import.meta.env.VITE_APP_TITLE || 'Izzy Prior - Brand Marketing',
  description:
    import.meta.env.VITE_APP_DESCRIPTION || 'No-Fluff, High-Impact Branding',
  url: import.meta.env.VITE_APP_URL || 'https://localhost:5173',
  enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  enableContactForm: import.meta.env.VITE_ENABLE_CONTACT_FORM !== 'false',
};

export const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_BASE_URL || '',
  apiKey: import.meta.env.VITE_API_KEY || '',
};

export const ANALYTICS_CONFIG = {
  trackingId: import.meta.env.VITE_GA_TRACKING_ID || '',
};
