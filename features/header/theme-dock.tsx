import { useState } from 'react';
import Dark from '../../components/icons/themes/Dark';
import Earth from '../../components/icons/themes/Earth';
import Fire from '../../components/icons/themes/Fire';
import Ice from '../../components/icons/themes/Ice';
import Light from '../../components/icons/themes/Light';
import Rain from '../../components/icons/themes/Rain';
import Space from '../../components/icons/themes/Space';
import Water from '../../components/icons/themes/Water';
import Wind from '../../components/icons/themes/Wind';
import ThemeButton from './theme-button';
import { useTheme } from '../../hooks/use-theme';
import { ChevronLeft, Wand2 } from 'lucide-react';
import { setTheme, addTheme, selectTheme } from '../../redux/slices/themeSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { PlaceholdersAndVanishInput } from '../../components/ui/placeholders';

const ANIMATION_DURATION = 500; // matches the duration in the className

const ThemeDock = () => {
    const dispatch = useAppDispatch();
    const [isGenerating, setIsGenerating] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [prompt, setPrompt] = useState('');
    const [loading, setLoading] = useState(false);
    const { border, bgSecondary, rounded, text } = useTheme();

    const handleBack = () => {
        setIsTransitioning(true);
        setIsGenerating(false);
        setTimeout(() => {
            setIsTransitioning(false);
        }, ANIMATION_DURATION);
    };
    const currentTheme = useAppSelector(selectTheme);

    const handleGenerate = async () => {
        if (!prompt) return;
        setLoading(true);

        try {
            const response = await fetch('/api/generate-theme', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }),
            });

            const data = await response.json();
            const themeId = `${prompt}-${Date.now()}`;

            console.log('New theme data:', data.theme);
            console.log('Generated theme ID:', themeId);

            // First add the new theme to Redux
            dispatch(addTheme({ id: themeId, theme: data.theme }));
            // Then set it as active
            dispatch(setTheme(themeId));

            setLoading(false);
            setPrompt('');
            handleBack();
        } catch (error) {
            console.error('Error:', error);
            setLoading(false);
        }
    };

    return (
        <header className='relative'>
            <div className={`fixed left-1/2 top-8 z-50 flex -translate-x-1/2 transform flex-row items-center justify-center space-x-1 ${rounded} bg-opacity-30 ${bgSecondary} p-2 shadow backdrop-blur-lg transition-all duration-500 ease-in-out ${isGenerating ? 'w-[24rem] sm:w-[36rem]' : 'w-[24rem]'} relative overflow-hidden`}>
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

                {!isGenerating && !isTransitioning ? (
                    <>
                        <ThemeButton themeType='light' icon={<Light />} />
                        <ThemeButton themeType='dark' icon={<Dark />} />
                        <ThemeButton themeType='ice' icon={<Ice />} />
                        <ThemeButton themeType='earth' icon={<Earth />} />
                        <ThemeButton themeType='water' icon={<Water />} />
                        <ThemeButton themeType='fire' icon={<Fire />} />
                        <ThemeButton themeType='wind' icon={<Wind />} />
                        <ThemeButton themeType='rain' icon={<Rain />} />
                        <ThemeButton themeType='space' icon={<Space />} />
                        <div className={`h-8 w-[1px] ${border} border-r-0`} />
                        <button onClick={() => setIsGenerating(true)} className={`flex h-8 w-8 items-center justify-center ${rounded} hover:${bgSecondary}`} aria-label='Generate AI theme'>
                            <Wand2 className='h-5 w-5' />
                        </button>
                    </>
                ) : (
                    <div className='flex w-full items-center space-x-2'>
                        <button onClick={handleBack} className={`flex h-8 w-8 shrink-0 items-center justify-center ${rounded} hover:${bgSecondary}`} aria-label='Back to themes'>
                            <ChevronLeft className='h-5 w-5' />
                        </button>
                        <input autoFocus className='flex-1 rounded-md border-none bg-transparent text-sm outline-none' type='text' value={prompt} onChange={(e) => setPrompt(e.target.value)} />
                        <button onClick={handleGenerate} disabled={loading || !prompt} className={`shrink-0 ${rounded} px-4 hover:${bgSecondary} disabled:opacity-50`}>
                            {loading ? 'Generating...' : 'Generate'}
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default ThemeDock;
