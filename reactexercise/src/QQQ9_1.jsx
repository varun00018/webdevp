import { createContext, useState } from "react";

export const QQQ9_1 = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  const value = { theme, toggleTheme };

  return (
    <QQQ9_1.Provider value={value}>
      {children}
    </QQQ9_1.Provider>
  );
};
