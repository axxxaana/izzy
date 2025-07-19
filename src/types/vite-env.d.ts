/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_DESCRIPTION: string;
  readonly VITE_APP_URL: string;
  readonly VITE_API_BASE_URL: string;
  readonly VITE_API_KEY: string;
  readonly VITE_GA_TRACKING_ID: string;
  readonly VITE_ENABLE_ANALYTICS: string;
  readonly VITE_ENABLE_CONTACT_FORM: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
