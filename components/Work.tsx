import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  selectActiveSection,
  selectTheme,
  setActiveSection,
} from "../redux/slices/themeSlice";
import {
  bgColors,
  bgInvertedColors,
  borderColors,
  buttonHover,
  textInvertedColors,
} from "../themes";
import { useRef, useEffect } from "react";

const Work = () => {
  const theme = useAppSelector(selectTheme);
  const borderPrimary = borderColors[theme];
  const hover = buttonHover[theme];

  const dispatch = useAppDispatch();
  const sectionRef = useRef(null);
  const bgInvertedColor = bgInvertedColors[theme];
  const textInvertedColor = textInvertedColors[theme];
  const activeSection = useAppSelector(selectActiveSection);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          dispatch(setActiveSection("work"));
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
      className="relative mx-auto flex w-[400px] max-w-7xl flex-col items-center px-4 pb-36"
    >
      <div
        className={`mb-6 space-x-2 rounded px-2 ${
          activeSection === "work"
            ? `${bgInvertedColor} ${textInvertedColor}`
            : ""
        }`}
      >
        <i className="fi fi-rr-briefcase text-xs" />
        <span className="text-sm uppercase tracking-widest">
          Work Experience
        </span>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Image
              src="/vgmeats.png"
              alt="vgmeats-logo"
              height={32}
              width={32}
            />
            <div className="text-2xl">VG Meats</div>
          </div>
        </div>
        <div>Lead Developer</div>
        <div className="opacity-70">2022 - Present</div>
        <div className="space-y-2 py-4">
          <div>• Developed an ERP system</div>
          <div>• Built data pipelines</div>
          <div>• Automated repetitive workflows</div>
        </div>
        <div className="mt-4">
          <div className="flex items-center space-x-1 pb-2 text-xs uppercase tracking-widest opacity-70">
            <span>Technologies Used</span>
            {/* <button
              className={`flex h-5 w-5 rotate-90 items-center justify-center rounded transition duration-200 ${borderPrimary} ${hover}`}
            >
              <i className="fi fi-rr-exchange " />
            </button> */}
          </div>
          <div className="flex flex-wrap space-x-2">
            <Image src="/html.png" alt="html-logo" width={32} height={32} />
            <Image src="/css.png" alt="css-logo" width={32} height={32} />
            <Image
              src="/javascript.png"
              alt="javascript-logo"
              width={32}
              height={32}
            />
            <Image src="/python.png" alt="python-logo" width={32} height={32} />
            <Image src="/mysql.png" alt="mysql-logo" width={32} height={32} />
            <Image src="/react.png" alt="react-logo" width={32} height={32} />
            <Image src="/django.png" alt="django-logo" width={32} height={32} />
            <Image
              src="/google-cloud.svg"
              alt="react-logo"
              width={32}
              height={32}
            />
            <Image
              src="/tailwind.png"
              alt="tailwind-logo"
              width={32}
              height={32}
            />
            <Image src="/docker.png" alt="docker-logo" width={32} height={32} />
          </div>
        </div>
        <div className="relative mt-8 flex items-center">
          <div className="absolute h-3 w-3 rounded-full bg-green-500" />
          <div className="absolute h-3 w-3 animate-ping rounded-full border border-green-500" />
          <div className="ml-5">References available</div>
        </div>
      </div>
    </div>
  );
};

export default Work;
