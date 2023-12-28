import { createAction } from "@reduxjs/toolkit";

export const fetchMusic = createAction("fetchMusic");
export const fetchSongDetails = createAction("fetchSongDetails", (songId) => ({
  payload: { songId },
}));
export const deleteMusic = createAction("deleteMusic", (musicId) => ({
  payload: { musicId },
}));
