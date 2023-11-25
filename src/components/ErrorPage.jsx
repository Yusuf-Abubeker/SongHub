import React from "react";
import styled from "@emotion/styled";
import Navbar from "./NavBar";
import Footer from "./Footer";

const ErrorPage = () => {
  return (
    <>
    <Navbar/>
      <Container>
        <Message>
          <h2>Oops! Something went wrong.</h2>
          <p>We apologize for the inconvenience. Please try again later.</p>
        </Message>
      </Container>
      <Footer/>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(250, 143, 143);
  height: 100vh;
`;

const Message = styled.div`
  text-align: center;
  color: #333333; /* Message text color */
`;

export default ErrorPage;
