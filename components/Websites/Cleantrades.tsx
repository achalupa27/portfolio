import Image from "next/image";
import { useAppSelector } from "../../redux/hooks";
import { selectTheme } from "../../redux/slices/themeSlice";
import { borderColors, buttonHover } from "../../themes";
import Link from "next/link";

const Cleantrades = () => {
  const theme = useAppSelector(selectTheme);
  const borderPrimary = borderColors[theme];
  const hover = buttonHover[theme];

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="cleantrades.svg"
            alt="cleantrades-logo"
            height={32}
            width={32}
          />
          <div className="text-2xl">CleanTrades</div>
        </div>
        <Link
          href="https://www.cleantrades.com"
          target="_blank"
          className={`py flex items-center space-x-1 rounded transition duration-200 ${borderPrimary} ${hover} px-3`}
        >
          <i className="fi fi-rr-arrow-up-right-from-square text-xs leading-[0px]"></i>
          <span className="text-sm">Visit</span>
        </Link>
      </div>
      <div>Financial Markets</div>
      <div className="text-sm opacity-70">2022 - Present</div>
      {/* <div className="pt-4">Video</div>
      <div className={`h-[300px] w-full rounded-lg ${borderPrimary}`}></div> */}
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
            src="/supabase.svg"
            alt="supabase-logo"
            width={32}
            height={32}
          />
          <Image
            src="/postgresql.png"
            alt="postgresql-logo"
            width={32}
            height={32}
          />
          <Image src="/vitest.svg" alt="vitest-logo" width={32} height={32} />
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

export default Cleantrades;
