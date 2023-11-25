import React from "react";
import * as styles from "../styles/SongDetail";
import { useSelector, useDispatch } from "react-redux";
import {
  setEditedSong,
  setEditError,
  selectSelectedSong,
  setIsEditing,
} from "../store/reducers/songSlice";
import useMusicDetail from "../hooks/useMusicDetail";
import useDeleteMusic from "../hooks/useDeleteMusic";
import apiClient from "../services/api-client";
import SongForm from "./SongForm";

const SongDetail = ({ onClose }) => {
  const selectedSongId = useSelector(selectSelectedSong);
  const editedSong = useSelector((state) => state.songs.editedSong);
  const editError = useSelector((state) => state.songs.editError);
  const isEditing = useSelector((s) => s.songs.isEditing);
  const dispatch = useDispatch();
  const { song, audioUrl, isLoading, error } = useMusicDetail(selectedSongId);
  const { deleteMusic, isDeleting, errors } = useDeleteMusic();

  const handleEditClick = () => {
    dispatch(setIsEditing());
    dispatch(setEditError(null)); // Clear any previous edit errors
  };

  const handleCloseClick = () => {
    onClose();
  };
  const handleFormSubmit = async (formData) => {
    try {
      const response = await apiClient.put(
        `/yusuf/songs/${selectedSongId}`,
        formData
      );
      dispatch(setEditedSong(response.data));
      dispatch(setIsEditing());
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
    <styles.Overlay>
      <styles.Card>
        <styles.CloseButton onClick={handleCloseClick}>X</styles.CloseButton>
        {isEditing ? (
          <div>
            <SongForm initialValues={song} onSubmit={handleFormSubmit} />
            {editedSong ? <p>Song edited successfully</p> : null}
            {editError ? <p>{editError}</p> : null}
          </div>
        ) : (
          <div>
            <styles.Title>Song Details</styles.Title>
            <styles.SongInfo>Title: {song.title}</styles.SongInfo>
            <styles.SongInfo>Artist: {song.artist}</styles.SongInfo>
            <styles.SongInfo>Genre: {song.genre}</styles.SongInfo>
            <styles.SongInfo>Release Year: {song.releaseYear}</styles.SongInfo>

            {audioUrl && <styles.AudioPlayer controls src={audioUrl} />}

            <styles.ButtonContainer>
              <styles.EditButton onClick={handleEditClick}>
                Edit
              </styles.EditButton>

              <styles.DeleteButton
                onClick={() => {
                  deleteMusic(song._id);
                  window.location.reload();
                }}
              >
                {isDeleting ? "Deleting" : "Delete"}
              </styles.DeleteButton>
            </styles.ButtonContainer>
          </div>
        )}
      </styles.Card>
    </styles.Overlay>
  );
};

export default SongDetail;
