import React from "react";
import { NavLink } from "react-router-dom";
import styled from '@emotion/styled';

const Navbar = () => {
  return (
    <Container>
      <Logo>
        <NavLink to="/">Music App</NavLink>
      </Logo>
      <NavLinks>
        <NavLink to="/" activeClassName="active">All Music</NavLink>
        <NavLink to="/create" activeClassName="active">Add New</NavLink>
      </NavLinks>
    </Container>
  );
};

const Container = styled.div`
  background-color: #2c3e50; /* Navbar background color */
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  a {
    text-decoration: none;
    color: #ffffff; /* Navbar text color */
  }
`;

const NavLinks = styled.div`
  display: flex;

  a {
    margin-left: 20px;
    text-decoration: none;
    color: #ffffff; /* Navbar text color */
    transition: color 0.3s ease;

    &:hover {
      color: #3498db; /* Navbar text color on hover */
    }

    &.active {
      color: #3498db; /* Active link color */
    }
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default Navbar;
