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
  background-color: #2c3e50;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 10px 20px;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  margin-right: 20px;

  a {
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: #3498db;
    }
  }

  @media (max-width: 768px) {
    margin: 0;
    margin-bottom: 10px;
    text-align: center;
  }
`;

const NavLinks = styled.div`
  display: flex;

  a {
    margin-right: 20px;
    text-decoration: none;
    font-weight: bold;
    color: #ffffff;
    transition: color 0.3s ease;

    &:hover {
      color: #3498db;
    }

    &.active {
      color: #3498db;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    a {
      margin: 5px 0;
    }
  }
`;


export default Navbar;
