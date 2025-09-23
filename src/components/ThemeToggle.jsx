"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    // Load stored theme or detect system preference
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      setTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  };

  const resetToSystem = () => {
    localStorage.removeItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", prefersDark);
    setTheme(prefersDark ? "dark" : "light");
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 transition"
      >
        {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
      </button>
      {/* <button
        onClick={resetToSystem}
        className="px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 transition"
      >
        🖥 System
      </button> */}
    </div>
  );
}
