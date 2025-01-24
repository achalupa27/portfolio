import { useAppSelector, useAppDispatch } from '../../../../redux/hooks';
import { selectTheme, setTheme } from '../../../../redux/slices/themeSlice';
import { themes } from '../../../../themes';

interface ThemeButtonProps {
    themeType: ThemeName;
    icon: React.ReactNode;
}

const ThemeButton = ({ themeType, icon }: ThemeButtonProps) => {
    const theme = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();

    const themeStyles = themes[theme];
    const isActive = theme === themeType;

    if (isActive) {
        return <button className={`duration-50 flex items-center justify-center rounded p-2 transition ${themeStyles.inverted.bg} ${themeStyles.inverted.text}`}>{icon}</button>;
    }

    return (
        <button className={`duration-50 flex items-center justify-center rounded p-2 transition hover:${themeStyles.inverted.bg} hover:${themeStyles.inverted.text}`} onClick={() => dispatch(setTheme(themeType))}>
            {icon}
        </button>
    );
};

export default ThemeButton;
