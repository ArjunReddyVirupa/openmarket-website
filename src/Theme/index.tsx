import React, { createContext, useContext, useState, ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface ThemeStyles {
  background: string;
  color: string;
  buttonBg: string;
  buttonColor: string;
  activeColor: string;
}

interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
  themeStyles: Record<"light" | "dark", ThemeStyles>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const themeStyles: Record<"light" | "dark", ThemeStyles> = {
  light: {
    background: "#edf0f5",
    color: "#000000",
    activeColor: "#12d8cc",
    buttonBg: "#007bff",
    buttonColor: "#ffffff",
  },
  dark: {
    background: "#151515",
    color: "#ffffff",
    activeColor: "#12d8cc",
    buttonBg: "#343a40",
    buttonColor: "#ffffff",
  },
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeStyles }}>
      <div
        style={{
          background: themeStyles[theme].background,
          color: themeStyles[theme].color,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
