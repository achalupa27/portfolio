import { motion } from "framer-motion";
import { useAppSelector } from "../redux/hooks";
import { selectTheme } from "../redux/slices/themeSlice";
import { borderColors, buttonHover } from "../themes";

const Hero = () => {
  const theme = useAppSelector(selectTheme);
  const borderPrimary = borderColors[theme];
  const hover = buttonHover[theme];

  return (
    <div className="mx-auto flex h-screen max-w-7xl flex-col items-start justify-center">
      <div>
        <div className="text-xl font-light tracking-tight">Hi.</div>
        <div className="text-7xl tracking-tight">
          <span className="text-6xl">
            I'm a<br />
          </span>
          <span className="font-bold">
            Full Stack Developer
            <br />
          </span>
          <span>motivated to build the best websites.</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            I do everything, from UI design to application development to unit
            testing.
          </div>
          {/* <button
            className={`rounded border ${borderPrimary} ${hover} p-1 px-3 transition duration-200`}
          >
            <span>View my development process →</span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
