// Button Styles Constants
// This file defines all button variants used throughout the website

export const BUTTON_STYLES = {
  // Primary Button (Main CTA)
  primary: {
    base: "inline-block bg-white text-[#e44782] border-2 border-[#e44782] rounded-[0.84rem] px-5 py-3 text-[20px] font-['Anton'] font-semibold tracking-[1.2px] transition-all duration-300 ease-out shadow-[0_8px_25px_rgba(228,71,130,0.3)] hover:bg-[#e44782] hover:text-white hover:scale-105 cursor-pointer no-underline",
    small: "inline-block bg-white text-[#e44782] border-2 border-[#e44782] rounded-[0.84rem] px-4 py-2 text-[16px] font-['Anton'] font-semibold tracking-[1.2px] transition-all duration-300 ease-out shadow-[0_8px_25px_rgba(228,71,130,0.3)] hover:bg-[#e44782] hover:text-white hover:scale-105 cursor-pointer no-underline",
    large: "inline-block bg-white text-[#e44782] border-2 border-[#e44782] rounded-[0.84rem] px-6 py-4 text-[24px] font-['Anton'] font-semibold tracking-[1.2px] transition-all duration-300 ease-out shadow-[0_8px_25px_rgba(228,71,130,0.3)] hover:bg-[#e44782] hover:text-white hover:scale-105 cursor-pointer no-underline"
  },

  // Secondary Button (Alternative CTA)
  secondary: {
    base: "inline-block bg-[#e44782] text-white border-2 border-[#e44782] rounded-[0.84rem] px-5 py-3 text-[20px] font-['Anton'] font-semibold tracking-[1.2px] transition-all duration-300 ease-out hover:bg-white hover:text-[#e44782] hover:scale-105 cursor-pointer no-underline",
    small: "inline-block bg-[#e44782] text-white border-2 border-[#e44782] rounded-[0.84rem] px-4 py-2 text-[16px] font-['Anton'] font-semibold tracking-[1.2px] transition-all duration-300 ease-out hover:bg-white hover:text-[#e44782] hover:scale-105 cursor-pointer no-underline",
    large: "inline-block bg-[#e44782] text-white border-2 border-[#e44782] rounded-[0.84rem] px-6 py-4 text-[24px] font-['Anton'] font-semibold tracking-[1.2px] transition-all duration-300 ease-out hover:bg-white hover:text-[#e44782] hover:scale-105 cursor-pointer no-underline"
  },

  // Tertiary Button (Subtle)
  tertiary: {
    base: "inline-block bg-transparent text-[#e44782] border-2 border-transparent rounded-[0.84rem] px-5 py-3 text-[20px] font-['Anton'] font-semibold tracking-[1.2px] transition-all duration-300 ease-out hover:border-[#e44782] hover:scale-105 cursor-pointer no-underline",
    small: "inline-block bg-transparent text-[#e44782] border-2 border-transparent rounded-[0.84rem] px-4 py-2 text-[16px] font-['Anton'] font-semibold tracking-[1.2px] transition-all duration-300 ease-out hover:border-[#e44782] hover:scale-105 cursor-pointer no-underline"
  },

  // Form Button
  form: {
    base: "w-full bg-[#e44782] text-white px-4 py-2 rounded-md text-sm font-['Anton'] font-semibold tracking-[1.2px] hover:bg-[#e44782]/90 transition-colors duration-200",
    submit: "w-full bg-[#e44782] text-white px-4 py-3 rounded-md text-base font-['Anton'] font-semibold tracking-[1.2px] hover:bg-[#e44782]/90 transition-all duration-200 hover:scale-[1.02]"
  },

  // Navigation Button
  nav: {
    base: "bg-[#e44782] text-white font-['Anton'] font-semibold text-[16px] px-5 py-3 rounded-[0.84rem] border-2 border-[#e44782] overflow-hidden group hover:bg-white hover:text-[#e44782] transition-all duration-300 ease-out tracking-[1.2px]"
  },

  // Card Button
  card: {
    base: "relative bg-[#e44782] text-white font-['Anton'] font-semibold text-[16px] px-5 py-3 rounded-[0.84rem] border-2 border-[#e44782] overflow-hidden group hover:bg-white hover:text-[#e44782] transition-all duration-300 ease-out tracking-[1.2px]"
  }
};

// Button Animation Variants for Framer Motion
export const BUTTON_ANIMATIONS = {
  // Hover animations
  hover: {
    primary: { scale: 1.05 },
    secondary: { scale: 1.05 },
    tertiary: { scale: 1.05 },
    form: { scale: 1.02, y: -1 },
    nav: { scale: 1.05 },
    card: { scale: 1.05 }
  },

  // Tap animations
  tap: {
    primary: { scale: 0.95 },
    secondary: { scale: 0.95 },
    tertiary: { scale: 0.95 },
    form: { scale: 0.98 },
    nav: { scale: 0.95 },
    card: { scale: 0.95 }
  },

  // Initial animations
  initial: {
    primary: { opacity: 0, y: 20 },
    secondary: { opacity: 0, y: 20 },
    tertiary: { opacity: 0, y: 20 },
    form: { opacity: 0, y: 20 },
    nav: { opacity: 0, y: 20 },
    card: { opacity: 0, y: 20 }
  },

  // Animate in
  animate: {
    primary: { opacity: 1, y: 0 },
    secondary: { opacity: 1, y: 0 },
    tertiary: { opacity: 1, y: 0 },
    form: { opacity: 1, y: 0 },
    nav: { opacity: 1, y: 0 },
    card: { opacity: 1, y: 0 }
  },

  // Transition settings
  transition: {
    primary: { duration: 0.6, ease: "easeOut", delay: 0.8 },
    secondary: { duration: 0.6, ease: "easeOut", delay: 0.8 },
    tertiary: { duration: 0.6, ease: "easeOut", delay: 0.8 },
    form: { duration: 0.6, ease: "easeOut", delay: 0.7 },
    nav: { duration: 0.6, ease: "easeOut", delay: 0.8 },
    card: { duration: 0.6, ease: "easeOut", delay: 0.8 }
  }
};

// Button Sizes
export const BUTTON_SIZES = {
  small: "px-4 py-2 text-sm",
  medium: "px-5 py-3 text-base",
  large: "px-6 py-4 text-lg"
};

// Common button props
export const BUTTON_PROPS = {
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.2 }
}; 