// hooks/useTheme.ts
import { useAppSelector } from '../redux/hooks';
import { selectTheme } from '../redux/slices/themeSlice';

export const useTheme = () => {
    const selectedTheme = useAppSelector(selectTheme);
    const themes = useAppSelector((state) => state.theme.themes);
    const theme = themes[selectedTheme];

    if (!theme) {
        console.error('Theme not found:', selectedTheme, 'Available themes:', themes);
        return themes['light']; // Fallback to light theme
    }

    return theme;
};
