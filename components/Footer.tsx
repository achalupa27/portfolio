import React, { useState, useEffect } from "react";
import { useAppSelector } from "../redux/hooks";
import { selectTheme } from "../redux/slices/themeSlice";
import { bgColors } from "../themes";

const formatTime = () => {
  const now = new Date();
  // Format the time in 12-hour format with 'short' time options
  const formattedTime = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  // Get the abbreviated day of the week (e.g., "TUE")
  const dayOfWeek = now.toLocaleDateString("en-US", { weekday: "short" });
  return `${dayOfWeek} ${formattedTime}`;
};

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(formatTime());
  const theme = useAppSelector(selectTheme);
  const bgColor = bgColors[theme];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(formatTime());
    }, 1000); // Update every second

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <footer
      className={`sticky bottom-0 z-50 mx-auto flex max-w-7xl items-center justify-between p-4 text-sm ${bgColor}`}
    >
      <div className="opacity-70">{currentTime}</div>
    </footer>
  );
};

export default Footer;
