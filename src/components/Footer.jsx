import React from "react";
import styled from '@emotion/styled';

const Footer = () => {
  return (
    <Container>
      <p>&copy; 2023 Music App. All rights reserved.</p>
    </Container>
  );
};

const Container = styled.div`
  background-color: #2c3e50; /* Footer background color */
  color: #ffffff; /* Footer text color */
  padding: 10px;
  text-align: center;
  bottom: 0;
  width: 100%;
`;

export default Footer;
