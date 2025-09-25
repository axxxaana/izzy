// Design System Constants
// This file defines all consistent design patterns for the website

export const TYPOGRAPHY = {
  // Font Families
  fonts: {
    primary: "'Montserrat', Helvetica",
    secondary: "'Inter', Helvetica",
  },
  
  // Heading Sizes
  headings: {
    h1: {
      fontFamily: "'Montserrat', Helvetica",
      fontSize: "60px",
      fontWeight: "semibold",
      tracking: "0px",
      leading: "1.1",
      classes: "[font-family:'Montserrat',Helvetica] font-semibold text-[60px] leading-[1.1]"
    },
    h2: {
      fontFamily: "'Montserrat', Helvetica",
      fontSize: "50px",
      fontWeight: "semibold",
      tracking: "0px",
      leading: "1.2",
      classes: "[font-family:'Montserrat',Helvetica] font-semibold text-[50px] leading-[1.2]"
    },
    h3: {
      fontFamily: "'Montserrat', Helvetica",
      fontSize: "40px",
      fontWeight: "semibold",
      tracking: "0px",
      leading: "1.25",
      classes: "[font-family:'Montserrat',Helvetica] font-semibold text-[40px] leading-[1.25]"
    },
    h4: {
      fontFamily: "'Montserrat', Helvetica",
      fontSize: "28px",
      fontWeight: "semibold",
      tracking: "0px",
      leading: "1.3",
      classes: "[font-family:'Montserrat',Helvetica] font-semibold text-[28px] leading-[1.3]"
    },
    h5: {
      fontFamily: "'Montserrat', Helvetica",
      fontSize: "20px",
      fontWeight: "semibold",
      tracking: "0px",
      leading: "1.4",
      classes: "[font-family:'Montserrat',Helvetica] font-semibold text-[20px] leading-[1.4]"
    },
    h6: {
      fontFamily: "'Montserrat', Helvetica",
      fontSize: "18px",
      fontWeight: "semibold",
      tracking: "0px",
      leading: "1.4",
      classes: "[font-family:'Montserrat',Helvetica] font-semibold text-[18px] leading-[1.4]"
    }
  },
  
  // Body Text
  body: {
    large: {
      fontFamily: "'Inter', Helvetica",
      fontSize: "18px",
      fontWeight: "normal",
      tracking: "0",
      leading: "28px",
      classes: "[font-family:'Inter',Helvetica] font-normal text-[18px] tracking-[0] leading-[28px]"
    },
    medium: {
      fontFamily: "'Inter', Helvetica",
      fontSize: "16px",
      fontWeight: "normal",
      tracking: "0",
      leading: "normal",
      classes: "[font-family:'Inter',Helvetica] font-normal text-[16px]"
    },
    small: {
      fontFamily: "'Inter', Helvetica",
      fontSize: "15.9px",
      fontWeight: "normal",
      tracking: "0",
      leading: "25.2px",
      classes: "[font-family:'Inter',Helvetica] font-normal text-[15.9px] tracking-[0] leading-[25.2px]"
    },
    xsmall: {
      fontFamily: "'Inter', Helvetica",
      fontSize: "14px",
      fontWeight: "normal",
      tracking: "0",
      leading: "normal",
      classes: "[font-family:'Inter',Helvetica] font-normal text-[14px]"
    }
  }
};

export const COLORS = {
  // Primary Brand Colors
  primary: {
    pink: "#e44782",
    pinkLight: "rgba(228, 71, 130, 0.3)",
    pinkDark: "#d13a6f"
  },
  
  // Text Colors
  text: {
    primary: "#0f0f10",
    secondary: "#6b7280",
    tertiary: "#9ca3af",
    white: "#ffffff"
  },
  
  // Background Colors
  background: {
    white: "#ffffff",
    gray: "#f9fafb",
    grayLight: "#f3f4f6",
    grayDark: "#374151"
  },
  
  // Status Colors
  status: {
    success: "#10b981",
    warning: "#f59e0b",
    error: "#ef4444",
    info: "#3b82f6"
  }
};

export const SPACING = {
  // Padding
  padding: {
    xs: "p-2",
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
    xl: "p-8",
    xxl: "p-12",
    responsive: "p-3 sm:p-4 lg:p-[15px]"
  },
  
  // Margins
  margin: {
    xs: "m-2",
    sm: "m-4",
    md: "m-6",
    lg: "m-8",
    xl: "m-12",
    xxl: "m-16"
  },
  
  // Gaps
  gap: {
    xs: "gap-2",
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12"
  }
};

export const BORDER_RADIUS = {
  sm: "rounded-md",
  md: "rounded-lg",
  lg: "rounded-xl",
  xl: "rounded-2xl",
  xxl: "rounded-[25px]",
  custom: "rounded-[0.84rem]"
};

export const SHADOWS = {
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
  xxl: "shadow-2xl",
  custom: "shadow-[0_8px_25px_rgba(228,71,130,0.3)]",
  pink: "shadow-[#e44782]/10",
  pinkHover: "shadow-[#e44782]/20"
}; 