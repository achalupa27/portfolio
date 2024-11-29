import Image from "next/image";
import { useRef, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import {
  selectActiveSection,
  selectTheme,
  setActiveSection,
} from "../redux/slices/themeSlice";
import { bgColors, bgInvertedColors, textInvertedColors } from "../themes";

const Skills = () => {
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
          dispatch(setActiveSection("skills"));
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
      className="mx-auto mt-24 flex max-w-7xl flex-col items-center justify-center"
    >
      <div
        className={`mb-6 space-x-2  rounded px-2 ${
          activeSection === "skills"
            ? `${bgInvertedColor} ${textInvertedColor}`
            : ""
        }`}
      >
        <i className="fi fi-rr-hammer-crash text-xs" />
        <span className="text-sm uppercase tracking-widest">Skills</span>
      </div>
      <div className="space-y-4">
        <div className="flex flex-col items-center">
          <h3>Languages</h3>
          <div className="flex space-x-2">
            <Image
              src="/typescript.png"
              alt="typescript-logo"
              width={32}
              height={32}
            />
            <Image
              src="/javascript.png"
              alt="javascript-logo"
              width={32}
              height={32}
            />
            <Image src="/c.png" alt="c-logo" width={32} height={32} />
            <Image src="/python.png" alt="python-logo" width={32} height={32} />
            <Image src="/java.png" alt="java-logo" width={32} height={32} />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3>Frontend</h3>
          <div className="flex space-x-2">
            <Image src="/react.png" alt="react-logo" width={32} height={32} />
            <Image src="/next.svg" alt="nextjs-logo" width={32} height={32} />
            <Image src="/redux.svg" alt="redux-logo" width={32} height={32} />
            <Image
              src="/tailwind.png"
              alt="tailwind-logo"
              width={32}
              height={32}
            />
            <Image src="/html.png" alt="html-logo" width={32} height={32} />
            <Image src="/css.png" alt="css-logo" width={32} height={32} />
            <Image src="/sass.png" alt="sass-logo" width={32} height={32} />
            <Image src="/jquery.png" alt="jquery-logo" width={32} height={32} />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3>Backend</h3>
          <div className="flex space-x-2">
            <Image
              src="/supabase.svg"
              alt="supabase-logo"
              width={32}
              height={32}
            />
            <Image src="/vercel.svg" alt="vercel-logo" width={32} height={32} />
            <Image src="/node.png" alt="node-logo" width={32} height={32} />
            <Image
              src="/amplify.png"
              alt="amplify-logo"
              width={32}
              height={32}
            />
            <Image
              src="/firebase.svg"
              alt="firebase-logo"
              width={32}
              height={32}
            />
            <Image
              src="/express.svg"
              alt="express-logo"
              width={32}
              height={32}
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3>Databases</h3>
          <div className="flex space-x-2">
            <Image src="/mysql.png" alt="mysql-logo" width={32} height={32} />
            <Image
              src="/postgresql.png"
              alt="postgresql-logo"
              width={32}
              height={32}
            />
            <Image
              src="/mongodb.svg"
              alt="mongodb-logo"
              width={32}
              height={32}
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3>API</h3>
          <div className="flex space-x-2">
            <Image src="/rest.svg" alt="rest-logo" width={32} height={32} />
            <Image
              src="/graphql.png"
              alt="graphql-logo"
              width={32}
              height={32}
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3>Version Control</h3>
          <div className="flex space-x-2">
            <Image src="/git.png" alt="git-logo" width={32} height={32} />
            <Image src="/github.svg" alt="github-logo" width={32} height={32} />
            <Image src="/vscode.png" alt="vscode-logo" width={32} height={32} />
            <Image src="/npm.png" alt="npm-logo" width={32} height={32} />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3>Testing</h3>
          <div className="flex space-x-2">
            <Image src="/vitest.svg" alt="vitest-logo" width={32} height={32} />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3>Design</h3>
          <div className="flex space-x-2">
            <Image
              src="/photoshop.png"
              alt="photoshop-logo"
              width={32}
              height={32}
            />
            <Image src="/figma.png" alt="figma-logo" width={32} height={32} />
          </div>
        </div>
        {/* <div>
          <h3>Mobile</h3>
          <div className="flex space-x-2">
            <Image
              src="/react-native.png"
              alt="react-native-logo"
              width={32}
              height={32}
            />
            <Image src="/expo.svg" alt="expo-logo" width={32} height={32} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
