import { configureStore } from '@reduxjs/toolkit';
import songsReducer from './reducers/songSlice';
import songDetailReducer from './reducers/songDetailSlice';

const store = configureStore({
  reducer: {
    songs: songsReducer,
    songDetail: songDetailReducer,
  },
});

export default store;
