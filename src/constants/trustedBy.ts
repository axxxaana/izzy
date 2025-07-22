export interface TrustedByLogo {
  name: string;
  url?: string;
  size: 'small' | 'medium' | 'large';
  weight: 'normal' | 'medium' | 'bold';
  image?: string; // Add image path for logo files
}

export const TRUSTED_BY_LOGOS: TrustedByLogo[] = [
  // Best visual fit order
  { name: 'Dear Bump', size: 'medium', weight: 'normal', image: '/dear-bump-gray.png' },
  { name: 'Nexu', size: 'medium', weight: 'normal', image: '/nexu-logo-grey.png' },
  { name: 'Dream Factory', size: 'medium', weight: 'normal', image: '/Dream-Factory.png' },
  { name: 'GoFounder', size: 'medium', weight: 'normal', image: '/gofounder-logo.png' },
  { name: 'Make Us Care', size: 'medium', weight: 'normal', image: '/make-us-care.png' },
  { name: 'Ninjas in Pyjamas', size: 'medium', weight: 'normal', image: '/Ninjas-in-pyjamas.png' },
];

export const TRUSTED_BY_CONFIG = {
  scrollSpeed: {
    normal: 2, // pixels per frame at 60fps
    slow: 0.5, // pixels per frame at 60fps (slower)
    paused: 0,
  },
  responsive: {
    mobile: { logoCount: 4 },
    tablet: { logoCount: 6 },
    desktop: { logoCount: 7 },
  },
}; 