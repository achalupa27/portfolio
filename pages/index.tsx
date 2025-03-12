import { useAppSelector } from '../redux/hooks';
import { selectTheme } from '../redux/slices/themeSlice';
import Particles from '../components/ui/particles';
import Hero from '../features/hero';
import IceEffects from '../components/ui/ice-effects';
import { useTheme } from '../hooks/use-theme';
import { StarsBackground } from '../components/ui/stars-background';
import { ShootingStars } from '../components/ui/shooting-stars';
import SplashCursor from '../components/ui/splash-cursor';
import Waves from '../components/ui/waves';
import { BackgroundBeamsWithCollision } from '../components/ui/rain';
import Aurora from '../components/ui/clouds';
import New from '../features/experience';
import Orb from '../components/ui/orb';
import ThemeDock from '../features/header/theme-dock';
import { selectSelectedProject, selectIsTransitioning } from '../redux/slices/projectSlice';
import ProjectDisplay from '../features/experience/project-display';

const Home = () => {
    const theme = useAppSelector(selectTheme);
    const selectedProject = useAppSelector(selectSelectedProject);
    const isTransitioning = useAppSelector(selectIsTransitioning);
    const { text, bg, font } = useTheme();

    return (
        <div className={`relative ${text} ${bg} ${font} min-h-screen w-screen`}>
            {/* Theme effects */}
            {theme === 'fire' && <Particles className='absolute inset-0 z-0 h-full' quantity={100} ease={80} color={'#000000'} refresh />}
            {theme === 'ice' && <IceEffects />}
            {theme === 'space' && <StarsBackground />}
            {theme === 'space' && <ShootingStars />}
            {theme === 'space' && <SplashCursor />}
            {theme === 'water' && <Waves />}
            {theme === 'rain' && <BackgroundBeamsWithCollision />}
            {theme === 'rain' && <Aurora colorStops={['#3b3b3b', '#5a5a5a', '#2a2a2a']} blend={0.5} amplitude={0.1} speed={0.3} />}

            {/* Fixed position elements */}
            <ThemeDock />
            <New />

            {/* Space theme borders */}
            {theme === 'space' && (
                <>
                    {/* Top borders */}
                    <div className='absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm' />
                    <div className='absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
                    <div className='absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm' />
                    <div className='absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent' />

                    {/* Left borders */}
                    <div className='absolute left-0 top-20 h-3/4 w-[2px] bg-gradient-to-b from-transparent via-indigo-500 to-transparent blur-sm' />
                    <div className='absolute left-0 top-20 h-3/4 w-px bg-gradient-to-b from-transparent via-indigo-500 to-transparent' />
                    <div className='absolute left-0 top-60 h-1/4 w-[5px] bg-gradient-to-b from-transparent via-sky-500 to-transparent blur-sm' />
                    <div className='absolute left-0 top-60 h-1/4 w-px bg-gradient-to-b from-transparent via-sky-500 to-transparent' />

                    {/* Right borders */}
                    <div className='absolute right-0 top-20 h-3/4 w-[2px] bg-gradient-to-b from-transparent via-indigo-500 to-transparent blur-sm' />
                    <div className='absolute right-0 top-20 h-3/4 w-px bg-gradient-to-b from-transparent via-indigo-500 to-transparent' />
                    <div className='absolute right-0 top-60 h-1/4 w-[5px] bg-gradient-to-b from-transparent via-sky-500 to-transparent blur-sm' />
                    <div className='absolute right-0 top-60 h-1/4 w-px bg-gradient-to-b from-transparent via-sky-500 to-transparent' />

                    {/* Bottom borders */}
                    <div className='absolute inset-x-20 bottom-[1px] h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm' />
                    <div className='absolute inset-x-20 bottom-[1px] h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
                    <div className='absolute inset-x-60 bottom-[1px] h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm' />
                    <div className='absolute inset-x-60 bottom-[1px] h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent' />
                </>
            )}

            {theme === 'space' && (
                <div className='absolute inset-0 z-0 h-full'>
                    <Orb hoverIntensity={0} rotateOnHover={false} hue={0} forceHoverState={false} />
                </div>
            )}

            {/* Center content with transition */}
            <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>
                <div className={`pointer-events-auto transition-opacity duration-300 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>{selectedProject ? <ProjectDisplay projectId={selectedProject} /> : <Hero />}</div>
            </div>
        </div>
    );
};

export default Home;
