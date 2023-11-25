import React from "react";
import apiClient from "../services/api-client";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import SongForm from "./SongForm";

const UploadPage = () => {
  const navigate = useNavigate();
  const handleSubmit = async (formData) => {
    try {
      const response = await apiClient.post("/yusuf/songs", formData);
      response.data;
      navigate("/");
    } catch (error) {
      console.error(error);
      <p>error ocur in uploading music</p>;
    }
  };

  return (
    <Container>
      <h1>Upload New Music</h1>
      <SongForm onSubmit={handleSubmit} />
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
`;

export default UploadPage;
