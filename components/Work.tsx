import Image from "next/image";
import { useAppSelector } from "../redux/hooks";
import { selectTheme } from "../redux/slices/themeSlice";
import { borderColors, buttonHover } from "../themes";

const Work = () => {
  const theme = useAppSelector(selectTheme);
  const borderPrimary = borderColors[theme];
  const hover = buttonHover[theme];

  return (
    <div className="relative mx-auto flex w-[600px] max-w-7xl flex-col items-center px-4 pb-36">
      <div className="space-x-2 pb-6">
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
        <div>Freelance Software Engineer</div>
        <div className="opacity-70">2022 - Present</div>
        <div className="space-y-2 py-4">
          <div>• Developed an enterprise resource planning system</div>
          <div>• Built data pipelines for lightspeed and quickbooks</div>
          <div>• Created scripts to automate repetitive workflows</div>
        </div>
        <div className="mt-4">
          <div className="flex items-center space-x-1 pb-2 text-xs uppercase tracking-widest opacity-70">
            <span>Technologies Used</span>
            <button
              className={`flex h-5 w-5 rotate-90 items-center justify-center rounded transition duration-200 ${borderPrimary} ${hover}`}
            >
              <i className="fi fi-rr-exchange " />
            </button>
          </div>
          <div className="flex space-x-2">
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
