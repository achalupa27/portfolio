import { useAppSelector } from '../../redux/hooks';
import { selectTheme } from '../../redux/slices/themeSlice';
import { themes } from '../../themes';
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

const div = () => {
    const selectedTheme = useAppSelector(selectTheme);
    const style = themes[selectedTheme];
    const border = style.border;
    const bgSecondary = style.bgSecondary;

    return (
        <header className='relative'>
            <div className={`fixed left-1/2 top-4 z-50 mx-auto flex w-fit -translate-x-1/2 transform items-center justify-center space-x-1 rounded ${border} bg-opacity-30 ${bgSecondary} p-2 shadow backdrop-blur-lg`}>
                <ThemeButton themeType='light' icon={<Light />} />
                <ThemeButton themeType='dark' icon={<Dark />} />
                <ThemeButton themeType='ice' icon={<Ice />} />
                <ThemeButton themeType='earth' icon={<Earth />} />
                <ThemeButton themeType='water' icon={<Water />} />
                <ThemeButton themeType='fire' icon={<Fire />} />
                <ThemeButton themeType='wind' icon={<Wind />} />
                <ThemeButton themeType='rain' icon={<Rain />} />
                <ThemeButton themeType='space' icon={<Space />} />
            </div>
        </header>
    );
};

export default div;
