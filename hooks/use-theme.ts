// hooks/useTheme.ts
import { useAppSelector } from '../redux/hooks';
import { selectTheme } from '../redux/slices/themeSlice';
import { themes } from '../themes'; // adjust the import path as needed

export const useTheme = () => {
    const selectedTheme = useAppSelector(selectTheme);
    return themes[selectedTheme];
};
