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

const formattedTime = formatTime();
console.log(formattedTime); // Example: TUE 7:48 PM

const Footer = () => {
  const theme = useAppSelector(selectTheme);
  const bgColor = bgColors[theme];

  return (
    <footer
      className={`sticky bottom-0 z-50 mx-auto flex max-w-7xl items-center justify-between py-4 text-sm ${bgColor}`}
    >
      <div className="opacity-70">{formattedTime}</div>
    </footer>
  );
};

export default Footer;
