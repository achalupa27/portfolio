import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectTheme, setActiveSection } from "../redux/slices/themeSlice";
import { borderColors, buttonHover } from "../themes";
import { useRef, useEffect } from "react";

const Hero = () => {
  const theme = useAppSelector(selectTheme);
  const borderPrimary = borderColors[theme];
  const hover = buttonHover[theme];

  const dispatch = useAppDispatch();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          dispatch(setActiveSection("profile"));
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
      className="mx-auto flex h-screen max-w-7xl flex-col items-start justify-center"
    >
      <div className="text-xl font-light tracking-tight ">Hi.</div>
      <div className="text-7xl tracking-tight">
        <span className="text-6xl">
          I'm a<br />
        </span>
        <span className="font-bold">
          Software Engineer
          <br />
        </span>
        <span>motivated to build the best products.</span>
      </div>
      <div className="flex items-center justify-between">
        <div>
          Experienced in the full software development cycle, with multiple
          projects currently deployed in production use.
        </div>
        {/* <button
            className={`rounded border ${borderPrimary} ${hover} p-1 px-3 transition duration-200`}
          >
            <span>View my development process →</span>
          </button> */}
      </div>
    </div>
  );
};

export default Hero;
