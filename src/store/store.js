import { configureStore } from '@reduxjs/toolkit';
import songsReducer from './songSlice';
import songDetailReducer from './songDetailSlice';

const store = configureStore({
  reducer: {
    songs: songsReducer,
    songDetail: songDetailReducer,
  },
});

export default store;
