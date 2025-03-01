import React, { createContext, useContext, useState, useEffect } from "react";

// Aurora theme values
export const themeValues = {
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

type ThemeMode = "light" | "dark" | "system";

interface ThemeContextType {
  theme: typeof themeValues;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>("light");
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    // Get saved theme from localStorage if available
    const savedMode = localStorage.getItem("auroraThemeMode") as ThemeMode;
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem("auroraThemeMode", mode);

    // Apply dark mode based on preference
    const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = 
      mode === "dark" || (mode === "system" && isSystemDark);

    setIsDark(shouldBeDark);

    // Apply dark class to document
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const value = {
    theme: themeValues,
    mode,
    setMode,
    isDark,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
