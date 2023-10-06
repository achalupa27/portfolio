import Head from "next/head";
import Contact from "../components/Contact";
import Header from "../components/Header";
import { useAppSelector } from "../redux/hooks";
import { selectTheme } from "../redux/slices/themeSlice";
import { bgColors, textColors } from "../themes";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Websites from "../components/Websites";
import Mobile from "../components/Mobile";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

const Home = () => {
  const theme = useAppSelector(selectTheme);

  const textColor = textColors[theme];
  const bgColor = bgColors[theme];

  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>

      <div className={`${textColor} ${bgColor}`}>
        <Header />
        <div id="profile">
          <Hero />
        </div>
        <div id="work">
          <Work />
        </div>
        <div id="websites">
          <Websites />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="contact" className="snap-center">
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
