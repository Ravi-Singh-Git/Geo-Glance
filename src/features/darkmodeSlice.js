import { createSlice } from '@reduxjs/toolkit';

export const darkmodeSlice = createSlice({
    name: 'darkmode',
    initialState: {
        darkmode: true,
    },
    reducers: {
        toggleDarkMode: (state) => {
            state.darkmode = !state.darkmode;
        },
    },
});

export const { toggleDarkMode } = darkmodeSlice.actions;

export const selectDarkMode = (state) => state.darkmode.darkmode;

export default darkmodeSlice.reducer;
