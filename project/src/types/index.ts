// Re-export all types from constants for convenience
export type { NavItem } from '../constants/navigation';
export type { IndustryCategory } from '../constants/services';
export type { Testimonial } from '../constants/testimonials';
export type { FaqItem } from '../constants/faq';

// Common component props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Layout component props
export interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

// Section component props
export interface SectionProps extends BaseComponentProps {
  id?: string;
  title?: string;
  subtitle?: string;
}

// Hero section specific props
export interface HeroProps extends SectionProps {
  backgroundImage?: string;
  ctaText?: string;
  ctaHref?: string;
}

// Navigation component props
export interface NavigationProps extends BaseComponentProps {
  items: import('../constants/navigation').NavItem[];
  logo?: string;
  ctaText?: string;
  ctaHref?: string;
}

// Card component props
export interface CardProps extends BaseComponentProps {
  title?: string;
  description?: string;
  image?: string;
  href?: string;
}

// Button variants
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends BaseComponentProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  href?: string;
  onClick?: () => void;
}
