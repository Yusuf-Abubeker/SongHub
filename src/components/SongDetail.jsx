import React, { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setEditedSong,
  setEditError,
  selectSelectedSong,
  
} from "../store/songSlice";
import useMusicDetail from "../hooks/useMusicDetail";
import useDeleteMusic from "../hooks/useDeleteMusic";
import apiClient from "../services/api-client";
import SongForm from "./SongForm";
import "../styles/SongDetail.css";

const SongDetail = () => {
  const selectedSong = useSelector(selectSelectedSong);

  const {song, audioUrl, isLoading, error } = useMusicDetail(selectedSong);
  const { deleteMusic, isDeleting, errors } = useDeleteMusic();
  const [isEditing, setIsEditing] = useState(false);
  const editedSong = useSelector((state) => state.songs.editedSong);
  const editError = useSelector((state) => state.songs.editError);
  const dispatch = useDispatch();

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    dispatch(setEditError(null)); // Clear any previous edit errors
  };

  const handleFormSubmit = async (formData) => {
    try {
      const response = await apiClient.put(`/yusuf/songs/${selectedSong}`, formData);
      setEditedSong(response.data);
      setIsEditing(false);
      // Refresh the page after editing
      window.location.reload();
    } catch (error) {
      console.error(error);
      setEditError("Error occurred while updating the song.");
    }
  };

  if (!song) {
    return <div>Select a song to view details</div>;
  }
  if (isLoading) return <p>Loading ...</p>;

  return (
    <div className="song-detail-modal-overlay">
      <div className="song-detail-card">
        <button onClick={() => window.location.reload() } className='x-button'> X </button>
        <h2 className="song-detail-title">Song Details</h2>
        <p>Title: {song.title}</p>
        <p>Artist: {song.artist}</p>
        <p>Genre: {song.genre}</p>
        <p>Release Year: {song.releaseYear}</p>

        {audioUrl && (
          <audio className="song-detail-audio" controls src={audioUrl} />
        )}

        <div className="song-detail-button-container">
          {isEditing ? (
            <div>
              <SongForm initialValues={song} onSubmit={handleFormSubmit} />
              {editedSong ? <p>Song edited successfully</p> : null}
              {editError ? <p>{editError}</p> : null}
            </div>
          ) : (
            <button
              className="song-detail-edit-button"
              onClick={handleEditClick}
            >
              Edit
            </button>
          )}

          <button
            className="song-detail-delete-button"
            onClick={() => {
              deleteMusic(song._id);
              window.location.reload();
            }}
          >
            {isDeleting ? "Deleting" : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SongDetail;
