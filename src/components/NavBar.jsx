import React from "react";
import { NavLink } from "react-router-dom";
import icon from "/musicIcon.jpg";
import styled from "@emotion/styled";

const Navbar = () => {
  return (
    <Container>
      <Logo>
        <img src={icon} alt="Music App Icon" />
        <NavLink to="/">Song Hub</NavLink>
      </Logo>
      <NavLinks>
        <NavLink to="/" activeClassName="active">
          All Music
        </NavLink>
        <StyledNavLink to="/create" activeClassName="active">
          +
        </StyledNavLink>
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
  display: flex;
  align-items: center;
  font-size: 24px;
  margin-right: 20px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-right: 10px;
    transition: transform 0.7s ease;

    &:hover {
      transform: rotate(360deg);
    }
  }

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
const StyledNavLink = styled(NavLink)`
  position: fixed;
  bottom: 70px;
  right: 20px;
  text-decoration: none;
  font-weight: bold;
  z-index: 999;
  color: #ffffff;
  background: linear-gradient(to right, #2ecc71, #2c3e50);
  font-size: 30px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: center;
  animation: rotate 5s linear infinite;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Navbar;
