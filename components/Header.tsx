import { motion } from "framer-motion";
import Link from "next/link";
import DarkModeButton from "./ThemeButtons/DarkModeButton";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import IceModeButton from "./ThemeButtons/IceModeButton";
import LightModeButton from "./ThemeButtons/LightModeButton";
import EarthModeButton from "./ThemeButtons/EarthModeButton";
import WaterModeButton from "./ThemeButtons/WaterModeButton";
import FireModeButton from "./ThemeButtons/FireModeButton";
import RainModeButton from "./ThemeButtons/RainModeButton";
import WindModeButton from "./ThemeButtons/WindModeButton";
import SpaceModeButton from "./ThemeButtons/SpaceModeButton";
import { useAppSelector } from "../redux/hooks";
import { selectTheme } from "../redux/slices/themeSlice";
import { bgColors } from "../themes";

const Header = () => {
  const theme = useAppSelector(selectTheme);
  const bgColor = bgColors[theme];

  const getThemeDescription = () => {
    if (theme === "light") return "Light";
    else if (theme === "dark") return "Dark";
    else if (theme === "ice") return "Ice";
    else if (theme === "earth") return "Earth";
    else if (theme === "water") return "Water";
    else if (theme === "fire") return "Fire";
    else if (theme === "rain") return "Rain";
    else if (theme === "wind") return "Wind";
    else if (theme === "space") return "Space";
  };

  return (
    <header
      className={`sticky top-0 z-50 mx-auto flex max-w-7xl items-center justify-between py-4 ${bgColor}`}
    >
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0, duration: 1 }}
        className="flex basis-1/3 cursor-pointer items-center space-x-2"
      >
        <Link href="https://www.github.com/achalupa27" target="_blank">
          <AiFillGithub className="h-6 w-6" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/andrew-chalupa-b03b57262/"
          target="_blank"
        >
          <AiFillLinkedin className="h-6 w-6" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/andrew-chalupa-b03b57262/"
          target="_blank"
          className="flex items-center justify-center"
        >
          <i className="fi fi-sr-file-pdf text-[19px] leading-[0px]"></i>
        </Link>
      </motion.div>
      <motion.div
        initial={{ y: -500, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0, duration: 1 }}
        className="relative flex basis-1/3 flex-col items-center justify-center"
      >
        <div className="flex items-center">
          <LightModeButton />
          <DarkModeButton />
          <IceModeButton />
          <EarthModeButton />
          <WaterModeButton />
          <FireModeButton />
          <WindModeButton />
          <RainModeButton />
          <SpaceModeButton />
        </div>
        {/* <div className="absolute top-10 text-xs">{getThemeDescription()}</div> */}
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0, duration: 1 }}
        className="mr-6 flex basis-1/3 cursor-pointer items-center justify-end"
      >
        <Link href="#profile" className="theme-button">
          <i className="fi fi-rr-user" />
        </Link>
        <Link href="#work" className="theme-button">
          <i className="fi fi-rr-briefcase" />
        </Link>
        <Link href="#websites" className="theme-button">
          <i className="fi fi-rr-window-alt" />
        </Link>
        {/* <Link href="#mobile" className="theme-button">
          <i className="fi fi-rr-mobile-notch" />
        </Link> */}
        <Link href="#skills" className="theme-button">
          <i className="fi fi-rr-hammer-crash" />
        </Link>
        <Link href="#contact" className="theme-button">
          <i className="fi fi-rr-envelope" />
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
