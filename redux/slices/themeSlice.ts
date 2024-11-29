// In themeSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  theme: "light",
  activeSection: null,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
  },
});

export const { setTheme, setActiveSection } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.theme;
export const selectActiveSection = (state: RootState) =>
  state.theme.activeSection;

export default themeSlice.reducer;
