import React, { useState } from "react";
import apiClient from "../services/api-client";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import SongForm from "./SongForm";

const UploadPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (formData) => {
    try {
      setIsSubmitting(true);

      const response = await apiClient.post("/yusuf/songs", formData);
      response.data;
      setIsSubmitting(false);
      navigate("/");
    } catch (error) {
      console.error(error);

      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <h1>Upload New Music</h1>
      <SongForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
`;

export default UploadPage;
