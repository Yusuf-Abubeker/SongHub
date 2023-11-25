import styled from "@emotion/styled";

export const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

export const Form = styled.form`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333333;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #333333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

export const FileInput = styled.input`
 
`;

export const FileInputLabel = styled.label`
  background-color: #3498db;
  color: #ffffff;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

export const SubmitButton = styled.button`
  background-color: #27ae60;
  color: #ffffff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #219e52;
  }
`;
