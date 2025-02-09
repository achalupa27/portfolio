import { useTheme } from '../../hooks/use-theme';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { selectTheme, setTheme } from '../../redux/slices/themeSlice';
import { themes } from '../../themes';

interface ThemeButtonProps {
    themeType: ThemeName;
    icon: React.ReactNode;
}

const ThemeButton = ({ themeType, icon }: ThemeButtonProps) => {
    const theme = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();

    const isActive = theme === themeType;
    const { rounded, invertedBg, invertedText } = useTheme();

    if (isActive) {
        return (
            <button aria-label={`${themeType} theme button`} className={`duration-50 flex items-center justify-center ${rounded} p-2 transition ${invertedBg} ${invertedText}`}>
                {icon}
            </button>
        );
    }

    return (
        <button aria-label={`${themeType} theme button`} className={`duration-50 flex items-center justify-center ${rounded} p-2 transition hover:${invertedBg} hover:${invertedText}`} onClick={() => dispatch(setTheme(themeType))}>
            {icon}
        </button>
    );
};

export default ThemeButton;
