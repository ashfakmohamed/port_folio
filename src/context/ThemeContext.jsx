import { createContext, useContext, useEffect, useState } from "react";
const Ctx = createContext(null);

function getInitialTheme() {
  if (typeof window === "undefined") return "dark";

  try {
    const stored = localStorage.getItem("v4-theme");
    if (stored === "dark" || stored === "light") return stored;
  } catch {
    // Storage can be unavailable in privacy-restricted browser contexts.
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
    try {
      localStorage.setItem("v4-theme", theme);
    } catch {
      // The visual theme should still work when persistence is blocked.
    }
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#090a09" : "#fafbf8");
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  return (
    <Ctx.Provider value={{ theme, toggle, isDark: theme === "dark" }}>
      {children}
    </Ctx.Provider>
  );
}
export const useTheme = () => useContext(Ctx);
