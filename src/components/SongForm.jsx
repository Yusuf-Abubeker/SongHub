import React, { useState } from "react";
import * as styles from "../styles/SongForm"; // Update the path based on your file structure

const SongForm = ({ onSubmit, initialValues }) => {
  const [songData, setSongData] = useState(initialValues || {});
  const [audioFile, setAudioFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSongData({
      ...songData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAudioFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("songFile", audioFile);

    formData.append("title", songData.title);
    formData.append("artist", songData.artist);
    formData.append("genre", songData.genre);
    formData.append("releaseYear", songData.releaseYear);

    // Pass the FormData to the onSubmit callback
    onSubmit(formData);
  };

  return (
    <styles.FormContainer>
      <styles.Form onSubmit={handleSubmit}>
        <styles.Title>Song Form</styles.Title>
        <styles.FormGroup>
          <styles.InputLabel htmlFor="title">Title:</styles.InputLabel>
          <styles.Input
            type="text"
            id="title"
            name="title"
            required
            value={songData.title || ""}
            onChange={handleChange}
          />
        </styles.FormGroup>
        <styles.FormGroup>
          <styles.InputLabel htmlFor="artist">Artist:</styles.InputLabel>
          <styles.Input
            type="text"
            id="artist"
            name="artist"
            required
            value={songData.artist || ""}
            onChange={handleChange}
          />
        </styles.FormGroup>
        <styles.FormGroup>
          <styles.InputLabel htmlFor="genre">Genre:</styles.InputLabel>
          <styles.Input
            type="text"
            id="genre"
            name="genre"
            required
            value={songData.genre || ""}
            onChange={handleChange}
          />
        </styles.FormGroup>
        <styles.FormGroup>
          <styles.InputLabel htmlFor="releaseYear">Release Year:</styles.InputLabel>
          <styles.Input
            type="number"
            id="releaseYear"
            name="releaseYear"
            required
            value={songData.releaseYear || ""}
            onChange={handleChange}
          />
        </styles.FormGroup>
        <styles.FormGroup>
          <styles.InputLabel htmlFor="songFile">Audio File:</styles.InputLabel>
          <styles.FileInput
            type="file"
            id="songFile"
            name="songFile"
            required
            accept="audio/*"
            onChange={handleFileChange}
          />
        </styles.FormGroup>
        <styles.FormGroup>
          <styles.SubmitButton type="submit">Submit</styles.SubmitButton>
        </styles.FormGroup>
      </styles.Form>
    </styles.FormContainer>
  );
};

export default SongForm;
