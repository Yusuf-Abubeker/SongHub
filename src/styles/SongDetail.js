import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 100%;

  @media (max-width: 600px) {
    max-width: 75%;
    box-shadow: none;
  }
`;

export const CloseButton = styled.button`
  top: 10px;
  right: 10px;
  background-color: red;
  border-radius: 4px;
  color: white;
  border: none;
  font-size: 18px;
  cursor: pointer;
  
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333333;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const SongInfo = styled.p`
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const AudioPlayer = styled.audio`
  width: 100%;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const EditButton = styled.button`
  background-color: #3498db;
  color: #ffffff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 10px;
  }
`;

export const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: #ffffff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 10px;
  }
`;
