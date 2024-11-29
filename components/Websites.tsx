import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  selectActiveSection,
  selectTheme,
  setActiveSection,
} from "../redux/slices/themeSlice";
import Cleantrades from "./Websites/Cleantrades";
import Lightsuite from "./Websites/Lightsuite";
import Lunaria from "./Websites/Lunaria";
import Mapfeed from "./Websites/Mapfeed";
import { bgColors, bgInvertedColors, textInvertedColors } from "../themes";

const Websites = () => {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  const sectionRef = useRef(null);
  const bgInvertedColor = bgInvertedColors[theme];
  const textInvertedColor = textInvertedColors[theme];
  const activeSection = useAppSelector(selectActiveSection);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          dispatch(setActiveSection("websites"));
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [dispatch]);

  return (
    <div
      ref={sectionRef}
      className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center"
    >
      <div
        className={`mb-6 space-x-2 rounded px-2 ${
          activeSection === "websites"
            ? `${bgInvertedColor} ${textInvertedColor}`
            : ""
        }`}
      >
        <i className="fi fi-rr-window-alt text-xs" />
        <span className="text-sm uppercase tracking-widest">Websites</span>
      </div>
      <div className="max-w-[380px] space-y-32 md:max-w-[500px]">
        <Cleantrades />
        <Lunaria />
        <Lightsuite />
        <Mapfeed />
      </div>
    </div>
  );
};

export default Websites;
