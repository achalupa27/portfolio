import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ProjectState {
    selectedProject: string | null;
    isTransitioning: boolean;
}

const initialState: ProjectState = {
    selectedProject: null,
    isTransitioning: false,
};

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        setSelectedProject: (state, action: PayloadAction<string | null>) => {
            state.selectedProject = action.payload;
        },
        setTransitioning: (state, action: PayloadAction<boolean>) => {
            state.isTransitioning = action.payload;
        },
    },
});

export const { setSelectedProject, setTransitioning } = projectSlice.actions;

export const selectSelectedProject = (state: RootState) => state.project.selectedProject;
export const selectIsTransitioning = (state: RootState) => state.project.isTransitioning;

export default projectSlice.reducer;
