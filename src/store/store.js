import { configureStore } from '@reduxjs/toolkit';
import songsReducer from './songSlice';
import songDetailReducer from './songDetailSlice';

const store = configureStore({
  reducer: {
    songs: songsReducer, // Replace with your slice reducer
    songDetail: songDetailReducer,
  },
});

export default store;
