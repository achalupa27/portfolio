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
import { setTheme, addTheme } from '../../redux/slices/themeSlice';
import { useAppDispatch } from '../../redux/hooks';

const ANIMATION_DURATION = 500; // matches the duration in the className

const ThemeMenu = () => {
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
            <div className={`fixed left-1/2 top-4 z-50 mx-auto flex -translate-x-1/2 transform items-center justify-center space-x-1 ${rounded} ${border} bg-opacity-30 ${bgSecondary} p-2 shadow backdrop-blur-lg transition-all duration-500 ease-in-out ${isGenerating ? 'w-[36rem]' : 'w-[24rem]'}`}>
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
                        <input type='text' value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder='Describe a theme...' className={`w-full bg-transparent outline-none ${text}`} />
                        <button onClick={handleGenerate} disabled={loading || !prompt} className={`shrink-0 ${rounded} px-4 hover:${bgSecondary} disabled:opacity-50`}>
                            {loading ? 'Generating...' : 'Generate'}
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default ThemeMenu;
