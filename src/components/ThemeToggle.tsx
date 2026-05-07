"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="ml-4 w-8 h-8 rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-neutral-700 transition-colors relative z-50"
      aria-label="Toggle theme"
    >
      <Moon className="w-4 h-4 dark:hidden" />
      <Sun className="w-4 h-4 hidden dark:block" />
    </button>
  );
}
