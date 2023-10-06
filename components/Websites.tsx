import Cleantrades from "./Websites/Cleantrades";
import Lightsuite from "./Websites/Lightsuite";
import Lunaria from "./Websites/Lunaria";
import Mapfeed from "./Websites/Mapfeed";

const Websites = () => {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center">
      <div className="space-x-2 pb-6">
        <i className="fi fi-rr-window-alt text-xs" />
        <span className="text-sm uppercase tracking-widest">Websites</span>
      </div>
      <div className="space-y-32">
        <Cleantrades />
        <Lunaria />
        <Lightsuite />
        <Mapfeed />
      </div>
    </div>
  );
};

export default Websites;
