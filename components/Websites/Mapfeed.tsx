import Image from "next/image";
import { useAppSelector } from "../../redux/hooks";
import { selectTheme } from "../../redux/slices/themeSlice";
import { borderColors, buttonHover } from "../../themes";
import Link from "next/link";

const Mapfeed = () => {
  const theme = useAppSelector(selectTheme);
  const borderPrimary = borderColors[theme];
  const hover = buttonHover[theme];

  return (
    <div className="w-[400px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/mapfeed.png" alt="mapfeed-logo" height={32} width={32} />
          <div className="text-2xl">Mapfeed</div>
        </div>
        <Link
          href="https://www.mapfeed.io"
          target="_blank"
          className={`py flex items-center space-x-1 rounded transition duration-200 ${borderPrimary} ${hover} px-3`}
        >
          <i className="fi fi-rr-arrow-up-right-from-square text-xs leading-[0px]"></i>
          <span className="text-sm">Visit</span>
        </Link>
      </div>
      <div>Interactive Map</div>
      <div className="opacity-70">2023 - Present</div>
      {/* <div className="py-2">
        <Image
          src="/mapfeed-demo.png"
          alt="mapfeed demo"
          width={600}
          height={300}
          className="rounded-lg"
        />
      </div> */}
      <div className="mt-4">
        <div className="pb-2 text-xs uppercase tracking-widest opacity-70">
          Technologies Used
        </div>
        <div className="flex space-x-2">
          <Image src="/react.png" alt="react-logo" width={32} height={32} />
          <Image src="/redux.svg" alt="redux-logo" width={32} height={32} />
          <Image src="/next.svg" alt="next-logo" width={32} height={32} />
          <Image
            src="/typescript.png"
            alt="typescript-logo"
            width={32}
            height={32}
          />
          <Image
            src="/tailwind.png"
            alt="tailwind-logo"
            width={32}
            height={32}
          />
          <Image src="/vercel.svg" alt="vercel-logo" width={32} height={32} />
          <Image
            src="/firebase.svg"
            alt="firebase-logo"
            width={32}
            height={32}
          />
        </div>
      </div>
      <div className="relative mt-8 flex items-center">
        <div className="absolute h-3 w-3 rounded-full bg-green-500" />
        <div className="absolute h-3 w-3 animate-ping rounded-full border border-green-500" />
        <div className="ml-5">Project walkthrough available</div>
      </div>
    </div>
  );
};

export default Mapfeed;
