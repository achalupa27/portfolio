// In themeSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface PageState {
    page: string;
}

const initialState: PageState = {
    page: 'home',
};

export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<string>) => {
            state.page = action.payload;
        },
    },
});

export const { setPage } = pageSlice.actions;

export const selectPage = (state: RootState) => state.page.page;

export default pageSlice.reducer;
