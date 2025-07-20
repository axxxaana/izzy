export interface TrustedByLogo {
  name: string;
  url?: string;
  size: 'small' | 'medium' | 'large';
  weight: 'normal' | 'medium' | 'bold';
}

export const TRUSTED_BY_LOGOS: TrustedByLogo[] = [
  { name: 'Coutu', size: 'large', weight: 'medium' },
  { name: 'Harnois', size: 'medium', weight: 'normal' },
  { name: 'EROS', size: 'large', weight: 'bold' },
  { name: 'DIALEKTA', size: 'medium', weight: 'normal' },
  { name: 'ABG', size: 'medium', weight: 'normal' },
  { name: 'thirdbridge', size: 'medium', weight: 'normal' },
  { name: 'CAMELLIA', size: 'medium', weight: 'normal' },
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