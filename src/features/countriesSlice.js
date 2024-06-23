import { createSlice } from '@reduxjs/toolkit';

export const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    filterOn: false,
    filterVal: "",
    searchOn: false,
    searchVal: "",
  },
  reducers: {
    turnFilterOn: (state, action) => {
      state.filterOn = true;
      state.filterVal = action.payload;
      state.searchOn = false;
      state.searchVal = "";
    },
    turnFilterOff: (state) => {
      state.filterOn = false;
      state.filterVal = "";
    },
    turnSearchOn: (state, action) => {
      state.searchOn = true;
      state.searchVal = action.payload;
      state.filterOn = false;
      state.filterVal = "";
    },
    turnSearchOff: (state) => {
      state.searchOn = false;
      state.searchVal = "";
    },
  },
});

export const { turnFilterOn, turnFilterOff, turnSearchOn, turnSearchOff } = countriesSlice.actions;

export const selectFilterOn = (state) => state.countries.filterOn;
export const selectFilterVal = (state) => state.countries.filterVal;
export const selectSearchOn = (state) => state.countries.searchOn;
export const selectSearchVal = (state) => state.countries.searchVal;

export default countriesSlice.reducer;
