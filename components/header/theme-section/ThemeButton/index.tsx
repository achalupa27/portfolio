import { useAppSelector, useAppDispatch } from '../../../../redux/hooks';
import { selectTheme, setTheme } from '../../../../redux/slices/themeSlice';
import { themes } from '../../../../themes';

interface ThemeButtonProps {
    themeType: ThemeName;
    icon: string;
}

const ThemeButton = ({ themeType, icon }: ThemeButtonProps) => {
    const theme = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();

    const themeStyles = themes[theme];
    const isActive = theme === themeType;

    if (isActive) {
        return (
            <button className={`duration-50 flex items-center justify-center rounded p-2 transition ${themeStyles.inverted.bg} ${themeStyles.inverted.text}`}>
                <i className={`fi fi-rr-${icon}`} />
            </button>
        );
    }

    return (
        <button className={`duration-50 flex items-center justify-center rounded p-2 transition hover:${themeStyles.inverted.bg} hover:${themeStyles.inverted.text}`} onClick={() => dispatch(setTheme(themeType))}>
            <i className={`fi fi-rr-${icon}`} />
        </button>
    );
};

export default ThemeButton;
