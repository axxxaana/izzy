// Animation Constants
// This file defines all animation patterns used throughout the website

export const ANIMATIONS = {
  // Fade In Animations
  fadeIn: {
    up: {
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: "easeOut" }
    },
    down: {
      initial: { opacity: 0, y: -60 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: "easeOut" }
    },
    left: {
      initial: { opacity: 0, x: -60 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.8, ease: "easeOut" }
    },
    right: {
      initial: { opacity: 0, x: 60 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.8, ease: "easeOut" }
    },
    scale: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.8, ease: "easeOut" }
    }
  },

  // Stagger Animations
  stagger: {
    container: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { staggerChildren: 0.1 }
    },
    item: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: "easeOut" }
    }
  },

  // Text Animations
  text: {
    reveal: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: "easeOut" }
    },
    slideIn: {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.6, ease: "easeOut" }
    }
  },

  // Card Animations
  card: {
    hover: {
      scale: 1.05,
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    },
    flip: {
      initial: { rotateY: 0 },
      animate: { rotateY: 180 },
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  },

  // Button Animations
  button: {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  },

  // Link Animations
  link: {
    hover: {
      x: 5,
      transition: { duration: 0.2 }
    },
    social: {
      hover: { scale: 1.1, y: -2 },
      tap: { scale: 0.95 }
    }
  },

  // Form Animations
  form: {
    input: {
      focus: { scale: 1.02 },
      transition: { duration: 0.2 }
    },
    button: {
      hover: { scale: 1.02, y: -1 },
      tap: { scale: 0.98 }
    }
  }
};

// Animation Delays
export const ANIMATION_DELAYS = {
  xs: 0.1,
  sm: 0.2,
  md: 0.3,
  lg: 0.4,
  xl: 0.5,
  xxl: 0.8
};

// Viewport Settings
export const VIEWPORT_SETTINGS = {
  once: true,
  margin: "-100px",
  amount: 0.3
};

// Common Animation Props
export const ANIMATION_PROPS = {
  viewport: VIEWPORT_SETTINGS,
  transition: { duration: 0.6, ease: "easeOut" }
};

// Section Animations
export const SECTION_ANIMATIONS = {
  // Hero Section
  hero: {
    container: {
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: "easeOut" }
    },
    content: {
      initial: { opacity: 0, x: 30 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
    },
    heading: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: "easeOut", delay: 0.4 }
    },
    paragraph: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: "easeOut", delay: 0.6 }
    },
    button: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: "easeOut", delay: 0.8 }
    }
  },

  // Content Sections
  content: {
    container: {
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: "easeOut" }
    },
    heading: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 }
    },
    text: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: "easeOut", delay: 0.4 }
    }
  },

  // Footer
  footer: {
    container: {
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: "easeOut" }
    },
    content: {
      initial: { opacity: 0, x: 30 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
    }
  }
}; 