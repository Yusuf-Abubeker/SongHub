import React, { useState } from "react";
import "../styles/SongForm.css";

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
    <div className="song-form-container">
      <form onSubmit={handleSubmit}>
        <h2 className="song-form-title">Song Form</h2>
        <div>
          <label className="song-form-label" htmlFor="title">
            Title:
          </label>
          <input
            className="song-form-input"
            type="text"
            id="title"
            name="title"
            required
            value={songData.title || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="song-form-label" htmlFor="artist">
            Artist:
          </label>
          <input
            className="song-form-input"
            type="text"
            id="artist"
            name="artist"
            required
            value={songData.artist || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="song-form-label" htmlFor="genre">
            Genre:
          </label>
          <input
            className="song-form-input"
            type="text"
            id="genre"
            name="genre"
            required
            value={songData.genre || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="song-form-label" htmlFor="releaseYear">
            Release Year:
          </label>
          <input
            className="song-form-input"
            type="number"
            id="releaseYear"
            name="releaseYear"
            required
            value={songData.releaseYear || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="song-form-label" htmlFor="songFile">
            Audio File:
          </label>
          <label className="song-form-file-label" htmlFor="songFile">
            Choose File
          </label>
          <input
            className="song-form-file-input"
            type="file"
            id="songFile"
            name="songFile"
            required
            accept="audio/*"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <button className="song-form-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SongForm;
