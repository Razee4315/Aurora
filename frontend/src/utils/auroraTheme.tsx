import React, { createContext, useContext } from "react";
import { useTheme as useDatabuttonTheme } from "../internal-components/ThemeProvider";

// Aurora theme values
export const auroraThemeValues = {
  colors: {
    primary: "#1A1F71", // Aurora Blue
    secondary: "#00FFFF", // Electric Cyan
    accent: "#FF6F61", // Vibrant Coral
    background: "#FFFFFF", // Celestial White
    text: {
      primary: "#1A1F71", // Aurora Blue for main text
      secondary: "#64748b", // Subdued text
    },
  },
  fonts: {
    heading: "'Montserrat', sans-serif",
    body: "'Merriweather', serif",
  },
  spacings: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "2rem",
    xl: "4rem",
    "2xl": "8rem",
  },
  borderRadius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "1rem",
    xl: "2rem",
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    glow: "0 0 15px rgba(0, 255, 255, 0.5)",
  },
  animations: {
    fast: "150ms",
    default: "300ms",
    slow: "500ms",
    timing: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
};

interface AuroraThemeContextType {
  theme: typeof auroraThemeValues;
  isDark: boolean;
}

const AuroraThemeContext = createContext<AuroraThemeContextType | undefined>(undefined);

export const AuroraThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme: databuttonTheme } = useDatabuttonTheme();
  
  // Determine if using dark mode based on Databutton theme
  const isDark = databuttonTheme === "dark" || 
    (databuttonTheme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const value = {
    theme: auroraThemeValues,
    isDark,
  };

  return (
    <AuroraThemeContext.Provider value={value}>
      {children}
    </AuroraThemeContext.Provider>
  );
};

export const useAuroraTheme = (): AuroraThemeContextType => {
  const context = useContext(AuroraThemeContext);
  if (context === undefined) {
    throw new Error("useAuroraTheme must be used within an AuroraThemeProvider");
  }
  return context;
};
