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
import { selectActiveSection, selectTheme } from "../redux/slices/themeSlice";
import { bgColors, bgInvertedColors, textInvertedColors } from "../themes";

const Header = () => {
  const theme = useAppSelector(selectTheme);
  const activeSection = useAppSelector(selectActiveSection);
  const bgColor = bgColors[theme];
  const bgInvertedColor = bgInvertedColors[theme];
  const textInvertedColor = textInvertedColors[theme];

  return (
    <header
      className={`sticky top-0 z-50 mx-auto flex max-w-7xl items-center justify-between px-0 py-4 md:px-0 ${bgColor}`}
    >
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0, duration: 1 }}
        className="flex w-fit basis-1/3 items-center"
      >
        <Link
          className={`hover:${bgInvertedColor} flex h-8 w-8 items-center justify-center rounded hover:${textInvertedColor}`}
          href="https://www.github.com/achalupa27"
          target="_blank"
        >
          <AiFillGithub className="h-6 w-6" />
        </Link>
        <Link
          className={`hover:${bgInvertedColor} flex h-8 w-8 items-center justify-center rounded hover:${textInvertedColor}`}
          href="https://www.linkedin.com/in/andrew-chalupa-b03b57262/"
          target="_blank"
        >
          <AiFillLinkedin className="h-6 w-6" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/andrew-chalupa-b03b57262/"
          target="_blank"
          className={`hover:${bgInvertedColor} flex h-8 w-8 items-center justify-center rounded hover:${textInvertedColor}`}
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
          <div className="hidden items-center md:flex">
            <IceModeButton />
            <EarthModeButton />
            <WaterModeButton />
            <FireModeButton />
            <WindModeButton />
            <RainModeButton />
            <SpaceModeButton />
          </div>
        </div>
        {/* <div className="absolute top-10 text-xs">{getThemeDescription()}</div> */}
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0, duration: 1 }}
        className="flex basis-1/3 cursor-pointer items-center justify-end"
      >
        <Link
          href="#profile"
          className={`theme-button ${
            activeSection === "profile"
              ? `${bgInvertedColor} ${textInvertedColor}`
              : `hover:${bgInvertedColor} hover:${textInvertedColor}`
          }`}
        >
          <i className="fi fi-rr-user" />
        </Link>
        <Link
          href="#work"
          className={`theme-button ${
            activeSection === "work"
              ? `${bgInvertedColor} ${textInvertedColor}`
              : `hover:${bgInvertedColor} hover:${textInvertedColor}`
          }`}
        >
          <i className="fi fi-rr-briefcase" />
        </Link>
        <Link
          href="#websites"
          className={`theme-button ${
            activeSection === "websites"
              ? `${bgInvertedColor} ${textInvertedColor}`
              : `hover:${bgInvertedColor} hover:${textInvertedColor}`
          }`}
        >
          <i className="fi fi-rr-window-alt" />
        </Link>
        <Link
          href="#skills"
          className={`theme-button ${
            activeSection === "skills"
              ? `${bgInvertedColor} ${textInvertedColor}`
              : `hover:${bgInvertedColor} hover:${textInvertedColor}`
          }`}
        >
          <i className="fi fi-rr-hammer-crash" />
        </Link>
        <Link
          href="#contact"
          className={`theme-button ${
            activeSection === "contact"
              ? `${bgInvertedColor} ${textInvertedColor}`
              : `hover:${bgInvertedColor} hover:${textInvertedColor}`
          }`}
        >
          <i className="fi fi-rr-envelope" />
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
