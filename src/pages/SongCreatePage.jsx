import React, { useState } from "react";
import SongForm from "../components/SongForm";
import apiClient from "../services/api-client";
import { useNavigate } from "react-router-dom";

const SongCreatePage = () => {
  const [createdSong, setCreatedSong] = useState(null);
  const navigate = useNavigate();

  // Define a function to handle form submission
  const handleFormSubmit = async (formData) => {
    try {
      const response = await apiClient.post("/yusuf/songs", formData);

      // Assuming the server responds with the created song object
      setCreatedSong(response.data);
      //window.location.reload();
      navigate("/");
    } catch (error) {
      console.error(error);
      <p>error ocur in uploading music</p>;
    }
  };

  return (
    <div>
      <h2>Create a New Song</h2>
      {createdSong ? (
        <div>
          
              <p>Song successfully created!</p>;
           
              <p>Title: {createdSong.title}</p>;
            
              <p>Artist: {createdSong.artist}</p>;
            
        </div>
      ) : (
        <SongForm onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default SongCreatePage;
