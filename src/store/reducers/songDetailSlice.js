import { createSlice } from "@reduxjs/toolkit";

const songDetailSlice = createSlice({
  name: "songDetail",
  initialState: {
    song: null,
    audioUrl: null,
    isLoading: true,
    error: null,
    isSongDetailOpen: false,
  },
  reducers: {
    setSongDetail: (state, action) => {
      state.song = action.payload.song;
      state.audioUrl = action.payload.audioUrl;
      state.isLoading = false;
      state.error = null;
    },
    setSongDetailLoading: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    setSongDetailError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    fetchSongDetailss: (state, action) => {
      // You can update the state here based on the payload if needed
      state.someAdditionalState = action.payload;
    },
    
  },
});

export const {
  setSongDetail,
  setSongDetailLoading,
  setSongDetailError,
  fetchSongDetailss,
} = songDetailSlice.actions;
export const selectedSong = (state) => state.songDetail.song._id;
export default songDetailSlice.reducer;
