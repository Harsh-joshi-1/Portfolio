"use client";

import { useState, useEffect } from "react";

export function TimeTracker() {
  const [seconds, setSeconds] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const startTime = Date.now();
    const interval = setInterval(() => {
      setSeconds(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    if (m > 0) {
      return `${m}m ${s}s`;
    }
    return `${s}s`;
  };

  if (!mounted) return null;

  return (
    <div className="text-xs px-3 py-1.5 bg-gray-100 dark:bg-neutral-800/80 rounded-full text-gray-600 dark:text-neutral-400 border border-gray-200 dark:border-neutral-700 shadow-sm flex items-center gap-2 font-medium">
      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
      Time spent on site: {formatTime(seconds)}
    </div>
  );
}
