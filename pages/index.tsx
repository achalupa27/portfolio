import Head from 'next/head';
import Header from '../components/header';
import { useAppSelector } from '../redux/hooks';
import { selectTheme } from '../redux/slices/themeSlice';
import Skills from '../components/landing-page/skills';
import Footer from '../components/footer/Footer';
import Hero from '../components/landing-page/hero';
import Websites from '../components/landing-page/websites';
import Particles from '@/components/ui/particles';
import { Meteors } from '@/components/ui/meteors';
import { themes } from '../themes';
import Work from '../components/landing-page/work';

const Home = () => {
    const selectedTheme = useAppSelector(selectTheme);
    const style = themes[selectedTheme];
    const textColor = style.text;
    const bgColor = style.bg;

    return (
        <div className={`${textColor} ${bgColor}`}>
            {selectedTheme === 'fire' && <Particles className='absolute inset-0 z-0 h-full' quantity={100} ease={80} color={'#000000'} refresh />}
            {selectedTheme === 'space' && <Meteors number={30} />}
            <Head>
                <title>Andrew Chalupa</title>
            </Head>
            <Header />
            <Hero />
            <Skills />
            <Work />
            <Websites />
            <Footer />
        </div>
    );
};

export default Home;
