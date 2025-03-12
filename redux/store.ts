import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import pageReducer from './slices/pageSlice';
import projectReducer from './slices/projectSlice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        page: pageReducer,
        project: projectReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
