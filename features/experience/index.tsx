import { cleantradesProject, lightsuiteProject, lunariaProject } from '../../data/websiteData';
import { useTheme } from '../../hooks/use-theme';
import { UserIcon } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { selectTheme } from '../../redux/slices/themeSlice';
import { setSelectedProject, setTransitioning, selectSelectedProject } from '../../redux/slices/projectSlice';

const TRANSITION_DURATION = 300; // ms

const Experience = () => {
    const { border, text, rounded, bgSecondary } = useTheme();
    const currentTheme = useAppSelector(selectTheme);
    const selectedProject = useAppSelector(selectSelectedProject);
    const dispatch = useAppDispatch();

    const handleProjectClick = (projectId: string) => {
        dispatch(setTransitioning(true));
        setTimeout(() => {
            dispatch(setSelectedProject(projectId));
            setTimeout(() => {
                dispatch(setTransitioning(false));
            }, TRANSITION_DURATION / 2);
        }, TRANSITION_DURATION / 2);
    };

    const handleHomeClick = () => {
        dispatch(setTransitioning(true));
        setTimeout(() => {
            dispatch(setSelectedProject(null));
            setTimeout(() => {
                dispatch(setTransitioning(false));
            }, TRANSITION_DURATION / 2);
        }, TRANSITION_DURATION / 2);
    };

    return (
        <div className='fixed bottom-8 left-1/2 z-40 -translate-x-1/2 transform'>
            <div className={`flex w-fit items-center justify-center space-x-1 ${rounded} bg-opacity-30 ${bgSecondary} relative overflow-hidden p-2 shadow backdrop-blur-lg transition-all duration-500 ease-in-out`}>
                {/* Gradient Border effects */}
                {currentTheme === 'space' && (
                    <>
                        {/* Top borders - enhanced glow, indigo/sky gradient border */}
                        <div className='absolute inset-x-0 top-0 h-[4px] w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm' />
                        <div className='absolute inset-x-0 top-0 h-px w-full bg-gradient-to-r from-indigo-500 to-sky-500' />

                        {/* Left borders - enhanced glow, indigo/sky gradient border */}
                        <div className='absolute inset-y-0 left-0 h-full w-[4px] bg-gradient-to-b from-transparent via-indigo-500 to-transparent blur-sm' />
                        <div className='absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-indigo-500 to-sky-500' />

                        {/* Right borders - enhanced glow, indigo/sky gradient border */}
                        <div className='absolute inset-y-0 right-0 h-full w-[4px] bg-gradient-to-b from-transparent via-indigo-500 to-transparent blur-sm' />
                        <div className='absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-sky-500 to-indigo-500' />

                        {/* Bottom borders - enhanced glow, indigo/sky gradient border */}
                        <div className='absolute inset-x-0 bottom-0 h-[4px] w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm' />
                        <div className='absolute inset-x-0 bottom-0 h-px w-full bg-gradient-to-r from-sky-500 to-indigo-500' />
                    </>
                )}

                <button onClick={handleHomeClick} className={`flex h-8 w-8 items-center justify-center ${rounded} transition-all duration-200 ${selectedProject === null ? 'bg-white bg-opacity-20' : `hover:${bgSecondary}`}`} aria-label='Home'>
                    <UserIcon className='h-5 w-5' />
                </button>

                {currentTheme === 'space' ? (
                    <div className='relative h-8 w-[1px]'>
                        {/* Glowing divider for space theme */}
                        <div className='absolute inset-y-0 left-0 h-full w-[3px] bg-gradient-to-b from-transparent via-indigo-500 to-transparent blur-sm' />
                        <div className='absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-indigo-500 to-sky-500' />
                    </div>
                ) : (
                    <div className={`h-8 w-[1px] ${border} border-r-0`} />
                )}

                <button onClick={() => handleProjectClick('cleantrades')} className={`flex h-8 w-8 items-center justify-center ${rounded} transition-all duration-200 ${selectedProject === 'cleantrades' ? 'bg-white bg-opacity-20' : `hover:${bgSecondary}`}`} aria-label='CleanTrades Project'>
                    <div className='flex h-5 w-5 items-center justify-center'>{cleantradesProject.logo}</div>
                </button>

                <button onClick={() => handleProjectClick('lightsuite')} className={`flex h-8 w-8 items-center justify-center ${rounded} transition-all duration-200 ${selectedProject === 'lightsuite' ? 'bg-white bg-opacity-20' : `hover:${bgSecondary}`}`} aria-label='Lightsuite Project'>
                    <div className='flex h-5 w-5 items-center justify-center'>{lightsuiteProject.logo}</div>
                </button>

                <button onClick={() => handleProjectClick('lunaria')} className={`flex h-8 w-8 items-center justify-center ${rounded} transition-all duration-200 ${selectedProject === 'lunaria' ? 'bg-white ' : `hover:${bgSecondary}`}`} aria-label='Lunaria Project'>
                    <div className='flex h-5 w-5 items-center justify-center'>{lunariaProject.logo}</div>
                </button>
            </div>
        </div>
    );
};

export default Experience;
