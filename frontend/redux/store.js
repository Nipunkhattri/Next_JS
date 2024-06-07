import { configureStore } from '@reduxjs/toolkit';
import dummyReducer from '../redux/features/Slice.js';

export const store = configureStore({
  reducer: {
    dummy: dummyReducer,
  },
});
