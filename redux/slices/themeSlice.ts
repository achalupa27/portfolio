// In themeSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { themes as initialThemes } from '../../themes';

interface ThemeState {
    theme: string;
    themes: Record<string, ThemeColors>;
    activeSection: string | null;
    expandedProjectId: number | null;
}

const initialState: ThemeState = {
    theme: 'light',
    themes: initialThemes,
    activeSection: null,
    expandedProjectId: null,
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<string>) => {
            state.theme = action.payload;
        },
        addTheme: (state, action: PayloadAction<{ id: string; theme: ThemeColors }>) => {
            state.themes[action.payload.id] = action.payload.theme;
        },
    },
});

export const { setTheme, addTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
