import { createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "songs",
  initialState: {
    songs: [],
    selectedSong: null,
    editedSong: null,
    editError: null,
    isLoading: true,
    error: null,
    isDeleting: false,
    isEditing: false,
    errors: null,
    isSongDetailOpen:false
  },
  reducers: {
    addSong: (state, action) => {
      state.songs.push(action.payload);
    },
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
    setIsEditing:(state) => {
      state.isEditing = true;
    },
    setDeleteError: (state, action) => {
      state.isDeleting = false;
      state.errors = action.payload;
    },
    clearDeleteStatus: (state) => {
      state.isDeleting = false;
      state.errors = null;
    },
    setIsSongDetailOpen: (state) => {
      state.isSongDetailOpen = true;
    },
    fetchMusic: (state) => ({ type: 'fetchMusic', payload: state }),

  },
});

export const {
  addSong,
  setSongs,
  setSongsLoading,
  setSongError,
  selectSong,
  setEditedSong,
  setEditError,
  setDeleting,
  setIsEditing,
  setDeleteError,
  clearDeleteStatus,
  setIsSongDetailOpen,
  fetchMusic
} = songsSlice.actions;
export const selectAllSongs = (state) => state.songs.songs;
export const selectSelectedSong = (state) => state.songs.selectedSong;

export default songsSlice.reducer;
