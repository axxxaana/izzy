export interface NavItem {
  label: string;
  width: string;
  href?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', width: 'w-[72px]', href: '#about' },
  { label: 'Services', width: 'w-[88px]', href: '#services' },
  { label: 'Portfolio', width: 'w-[86px]', href: '#portfolio' },
  { label: 'Resources', width: 'w-[88px]', href: '/resources' },
];

export const BRAND_LOGOS = [
  'Dear Bump',
  'Nexu', 
  'Parent Promise',
  'GoFounder',
  'Dream Factory',
  'Make Us Care',
  'Ninjas in Pyjamas',
  'Unlock Your Block',
];
