import { createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "songs",
  initialState: {
    songs: [],
    selectedSong: null,
    editedSong: null, // Add this property
    editError: null, // Add this property
    isLoading: true,
    error: null,
    isDeleting: false,
    errors: null,
  },
  reducers: {
    setSongs: (state, action) => {
      state.songs = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setSongsLoading: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    setSongError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    selectSong: (state, action) => {
      state.selectedSong = action.payload;
    },
    setEditedSong: (state, action) => {
      state.editedSong = action.payload;
    },
    setEditError: (state, action) => {
      state.editError = action.payload;
    },
    setDeleting: (state) => {
      state.isDeleting = true;
      state.errors = null;
    },
    setDeleteError: (state, action) => {
      state.isDeleting = false;
      state.errors = action.payload;
    },
    clearDeleteStatus: (state) => {
      state.isDeleting = false;
      state.errors = null;
    },
  },
});

export const {
  setSongs,
  setSongsLoading,
  setSongError,
  selectSong,
  setEditedSong,
  setEditError,
  setDeleting,
  setDeleteError,
  clearDeleteStatus,
} = songsSlice.actions;
export const selectAllSongs = (state) => state.songs.songs;
export const selectSelectedSong = (state) => state.songs.selectedSong;

export default songsSlice.reducer;
