// hooks/useTheme.ts
import { useAppSelector } from '../redux/hooks';
import { selectTheme } from '../redux/slices/themeSlice';

export const useTheme = () => {
    const selectedTheme = useAppSelector(selectTheme);
    const themes = useAppSelector((state) => state.theme.themes);
    return themes[selectedTheme];
};
