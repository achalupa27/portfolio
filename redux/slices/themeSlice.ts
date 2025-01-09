// In themeSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ThemeState {
    theme: ThemeName;
    activeSection: string | null;
    expandedProjectId: number | null;
}

const initialState: ThemeState = {
    theme: 'light',
    activeSection: null,
    expandedProjectId: null,
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
        setActiveSection: (state, action) => {
            state.activeSection = action.payload;
        },
        setExpandedProjectId: (state, action: PayloadAction<number | null>) => {
            state.expandedProjectId = action.payload;
        },
    },
});

export const { setTheme, setActiveSection, setExpandedProjectId } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.theme;
export const selectActiveSection = (state: RootState) => state.theme.activeSection;
export const selectExpandedProjectId = (state: RootState) => state.theme.expandedProjectId;

export default themeSlice.reducer;
