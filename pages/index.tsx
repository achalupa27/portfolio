import Head from 'next/head';
import Header from '../features/header';
import { useAppSelector } from '../redux/hooks';
import { selectTheme } from '../redux/slices/themeSlice';
import { themes } from '../themes';
import Meteors from '../components/ui/meteors';
import Particles from '../components/ui/particles';
import Experience from '../features/experience';
import Hero from '../features/hero';
import Skills from '../features/skills';
import ThemeMenu from '../features/header/theme-menu';

const Home = () => {
    const selectedTheme = useAppSelector(selectTheme);
    const style = themes[selectedTheme];
    const textColor = style.text;
    const bgColor = style.bg;

    return (
        <div className={`${textColor} ${bgColor} h-screen w-screen p-20`}>
            {selectedTheme === 'fire' && <Particles className='absolute inset-0 z-0 h-full' quantity={100} ease={80} color={'#000000'} refresh />}
            {selectedTheme === 'space' && <Meteors number={30} />}
            <Head>
                <title>Andrew Chalupa</title>
            </Head>
            <ThemeMenu />
            <div className='mx-auto flex max-w-screen-2xl justify-center space-x-12'>
                <div className='w-[50%]'>
                    <Hero />
                    <Skills />
                </div>
                <div className='w-[60%]'>
                    <Experience />
                </div>
            </div>
        </div>
    );
};

export default Home;
