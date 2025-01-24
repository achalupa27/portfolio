import { useAppSelector } from '../../../redux/hooks';
import { selectTheme } from '../../../redux/slices/themeSlice';
import { themes } from '../../../themes';
import Dark from '../../icons/themes/Dark';
import Light from '../../icons/themes/Light';
import ThemeButton from './theme-button';

const ThemeSection = () => {
    const selectedTheme = useAppSelector(selectTheme);
    const style = themes[selectedTheme];
    const border = style.border;
    const bgSecondary = style.bgSecondary;

    return (
        <div className={`fixed left-1/2 top-4 z-50 mx-auto flex w-fit -translate-x-1/2 transform items-center justify-center space-x-1 rounded ${border} bg-opacity-30 ${bgSecondary} p-2 shadow backdrop-blur-lg`}>
            <ThemeButton themeType='light' icon={<Light />} />
            <ThemeButton themeType='dark' icon={<Dark />} />
            {/* <ThemeButton themeType='ice' icon='snowflake' /> */}
            {/* <ThemeButton themeType='earth' icon='leaf' /> */}
            {/* <ThemeButton themeType='water' icon='water' /> */}
            {/* <ThemeButton themeType='fire' icon='flame' /> */}
            {/* <ThemeButton themeType='wind' icon='wind' /> */}
            {/* <ThemeButton themeType='rain' icon='cloud-rain' /> */}
            {/* <ThemeButton themeType='space' icon='planet-ringed' /> */}
        </div>
    );
};

export default ThemeSection;
