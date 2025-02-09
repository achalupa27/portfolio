import Head from 'next/head';
import { useAppSelector } from '../redux/hooks';
import { selectTheme } from '../redux/slices/themeSlice';
import { themes } from '../themes';
import Meteors from '../components/ui/meteors';
import Particles from '../components/ui/particles';
import Experience from '../features/experience';
import Hero from '../features/hero';
import Skills from '../features/skills';
import ThemeMenu from '../features/header/theme-menu';
import IceEffects from '../components/ui/ice-effects';
import { useTheme } from '../hooks/use-theme';

const Home = () => {
    const theme = useAppSelector(selectTheme);
    const { text, bg, font } = useTheme();
    const themeObject = useTheme();
    const themes = useAppSelector((state) => state.theme.themes);
    console.log('Current theme ID:', theme);
    console.log('Current theme object:', themes[theme]);
    console.log('Theme object from useTheme:', themeObject);
    console.log('Classes being applied:', {
        text: themeObject.text,
        bg: themeObject.bg,
        font: themeObject.font,
        bgSecondary: themeObject.bgSecondary,
        border: themeObject.border,
        rounded: themeObject.rounded,
        hover: themeObject.hover,
        invertedText: themeObject.invertedText,
        invertedBg: themeObject.invertedBg,
    });

    return (
        <>
            <div className={`relative ${text} ${bg} ${font} min-h-screen w-screen p-8 pt-24 lg:p-20 lg:pt-24`}>
                {theme === 'fire' && <Particles className='absolute inset-0 z-0 h-full' quantity={100} ease={80} color={'#000000'} refresh />}
                {theme === 'space' && <Meteors number={30} />}
                {theme === 'ice' && <IceEffects />}

                <Head>
                    <title>Andrew Chalupa</title>
                </Head>
                <ThemeMenu />
                <div className='mx-auto flex max-w-screen-2xl flex-col justify-center gap-12 lg:flex-row'>
                    <div className='lg:w-[50%]'>
                        <Hero />
                        <Skills />
                    </div>
                    <div className='lg:w-[60%]'>
                        <Experience />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
