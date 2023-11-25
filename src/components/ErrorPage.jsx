import React from "react";
import styled from '@emotion/styled';

const ErrorPage = () => {
  return (
    <Container>
      <Message>
        <h2>Oops! Something went wrong.</h2>
        <p>We apologize for the inconvenience. Please try again later.</p>
      </Message>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Message = styled.div`
  text-align: center;
  color: #333333; /* Message text color */
`;

export default ErrorPage;
