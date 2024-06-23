import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from '../features/countriesSlice';
import darkmodeReducer from '../features/darkmodeSlice';

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    darkmode: darkmodeReducer,
  },
});
