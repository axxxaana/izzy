// Page Templates
// This file defines the structure for creating new pages consistently

export interface PageTemplate {
  name: string;
  description: string;
  sections: string[];
  layout: 'full-width' | 'contained' | 'split';
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const PAGE_TEMPLATES: Record<string, PageTemplate> = {
  // Home Page Template
  home: {
    name: 'Home Page',
    description: 'Main landing page with hero, services, and CTA sections',
    sections: [
      'hero',
      'trusted-by',
      'about',
      'services',
      'portfolio',
      'testimonials',
      'cta',
      'footer'
    ],
    layout: 'full-width',
    seo: {
      title: 'Izzy Prior - Brand Marketing',
      description: 'No-Fluff, High-Impact Branding',
      keywords: ['brand marketing', 'fractional CMO', 'brand strategy']
    }
  },

  // About Page Template
  about: {
    name: 'About Page',
    description: 'About page with personal story and expertise',
    sections: [
      'hero',
      'story',
      'expertise',
      'values',
      'testimonials',
      'cta',
      'footer'
    ],
    layout: 'contained',
    seo: {
      title: 'About Izzy Prior - Brand Strategist',
      description: 'Learn about Izzy Prior, fractional CMO and brand strategist',
      keywords: ['about', 'brand strategist', 'fractional CMO']
    }
  },

  // Services Page Template
  services: {
    name: 'Services Page',
    description: 'Services page with detailed service offerings',
    sections: [
      'hero',
      'services-overview',
      'service-details',
      'process',
      'pricing',
      'cta',
      'footer'
    ],
    layout: 'contained',
    seo: {
      title: 'Services - Brand Strategy & Marketing',
      description: 'Brand strategy and marketing services for founders',
      keywords: ['services', 'brand strategy', 'marketing']
    }
  },

  // Portfolio Page Template
  portfolio: {
    name: 'Portfolio Page',
    description: 'Portfolio page showcasing work and case studies',
    sections: [
      'hero',
      'portfolio-grid',
      'case-studies',
      'testimonials',
      'cta',
      'footer'
    ],
    layout: 'contained',
    seo: {
      title: 'Portfolio - Brand Strategy Work',
      description: 'View brand strategy and marketing case studies',
      keywords: ['portfolio', 'case studies', 'brand work']
    }
  },

  // Contact Page Template
  contact: {
    name: 'Contact Page',
    description: 'Contact page with form and contact information',
    sections: [
      'hero',
      'contact-form',
      'contact-info',
      'faq',
      'footer'
    ],
    layout: 'contained',
    seo: {
      title: 'Contact Izzy Prior',
      description: 'Get in touch for brand strategy consultation',
      keywords: ['contact', 'consultation', 'get in touch']
    }
  },

  // Blog Page Template
  blog: {
    name: 'Blog Page',
    description: 'Blog page with articles and insights',
    sections: [
      'hero',
      'blog-grid',
      'newsletter',
      'footer'
    ],
    layout: 'contained',
    seo: {
      title: 'Blog - Brand Strategy Insights',
      description: 'Brand strategy insights and marketing tips',
      keywords: ['blog', 'insights', 'brand strategy tips']
    }
  }
};

// Section Templates
export const SECTION_TEMPLATES = {
  // Hero Section
  hero: {
    structure: {
      background: 'gradient or image',
      content: 'heading + paragraph + button',
      layout: 'left-content, right-image or centered',
      padding: 'responsive padding'
    },
    animations: {
      container: 'fadeIn.up',
      content: 'fadeIn.right with delay',
      heading: 'fadeIn.up with delay',
      paragraph: 'fadeIn.up with delay',
      button: 'fadeIn.up with delay'
    }
  },

  // Content Section
  content: {
    structure: {
      background: 'white or light gray',
      content: 'heading + text + optional image',
      layout: 'contained width',
      padding: 'responsive padding'
    },
    animations: {
      container: 'fadeIn.up',
      heading: 'fadeIn.up with delay',
      text: 'fadeIn.up with delay'
    }
  },

  // CTA Section
  cta: {
    structure: {
      background: 'gradient or solid color',
      content: 'heading + paragraph + button',
      layout: 'centered',
      padding: 'responsive padding'
    },
    animations: {
      container: 'fadeIn.up',
      content: 'fadeIn.up with delay',
      button: 'fadeIn.up with delay'
    }
  }
};

// Layout Components
export const LAYOUT_COMPONENTS = {
  // Page Wrapper
  pageWrapper: {
    className: 'min-h-screen bg-white',
    structure: 'Header + Main + Footer'
  },

  // Section Wrapper
  sectionWrapper: {
    className: 'w-full',
    padding: 'p-3 sm:p-4 lg:p-[15px]',
    maxWidth: 'max-w-[1200px] mx-auto'
  },

  // Content Container
  contentContainer: {
    className: 'max-w-[1200px] mx-auto px-8',
    responsive: 'px-3 sm:px-4 lg:px-[15px]'
  }
};

// Common Page Props
export const PAGE_PROPS = {
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
}; 