import { createSlice } from "@reduxjs/toolkit";

const songDetailSlice = createSlice({
  name: "songDetail",
  initialState: {
    song: null,
    audioUrl: null,
    isLoading: true,
    error: null,
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
  },
});

export const { setSongDetail, setSongDetailLoading, setSongDetailError } = songDetailSlice.actions;
export const selectSong = (state) => state.songDetail.song._id;
export default songDetailSlice.reducer;
