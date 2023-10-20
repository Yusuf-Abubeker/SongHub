import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllSongs, selectSelectedSong } from "../store/songSlice"; // Import your Redux selectors
import { selectSong } from "../store/songSlice"; // Import your Redux action

import "../styles/SongList.css";

const SongList = () => {
  const songs = useSelector(selectAllSongs);
  const selectedSong = useSelector(selectSelectedSong);
  const dispatch = useDispatch();

  return (
    <div className="song-list-container"> 
      <h2 className="song-list-title">Song List</h2>
      <ul>
        {songs.map((song) => (
          <li
            key={song._id}
            className={`song-list-item ${song._id === selectedSong ? "selected" : ""}`}
            onClick={() => {
              dispatch(selectSong(song._id)); // Dispatch the action to select the song
            }}
          >
            {song.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
