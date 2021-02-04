import React, { useState } from "react";
import styled from "styled-components";
import { Container, Span } from "../../GlobalStyle";
import { Link } from "react-router-dom";
import logo from "./name_logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);

  const onClick = () => setClick(!click);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavbarLogo to="/">
            <BrandLogo src={logo} />
            My<Span>folio.</Span>
          </NavbarLogo>

          <MobileToggle onClick={onClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileToggle>

          <NavbarMenu onClick={onClick} click={click}>
            <MenuItem>
              <NavItemLinks to="/">Home</NavItemLinks>
            </MenuItem>
            <MenuItem>
              <NavItemLinks to="/about">About Me</NavItemLinks>
            </MenuItem>
            <MenuItem>
              <NavItemLinks to="/projects">Projects</NavItemLinks>
            </MenuItem>
            <MenuItem>
              <NavItemLinks to="/contacts">Contact Me</NavItemLinks>
            </MenuItem>
          </NavbarMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

// Navbar style
const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--bg-dark);
  z-index: 999;

  @media screen and (max-width: 960px) {
    padding-right: 5px;
    padding-left: 5px;
    height: 100px;
  }
`;

const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 120px;

  @media screen and (max-width: 960px) {
    height: 100px;
  }
`;

const NavbarLogo = styled(Link)`
  height: 120px;
  width: auto;
  font-size: 3.5rem;
  font-weight: 600;
  color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    height: 100px;
    font-size: 2rem;
  }
`;

const BrandLogo = styled.img`
  height: 75%;
  width: auto;

  @media screen and (max-width: 320px) {
    display: none;
  }
`;

// Mobile Toggle
const MobileToggle = styled.div`
  color: white;
  display: none;

  &:hover {
    color: var(--hight-light);
  }

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.6rem;
    cursor: pointer;
  }
`;

// navbar menu list items;

const NavbarMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 100px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.6s ease-out;
    background: var(--bg-blue);
  }
`;

const MenuItem = styled.li`
  align-self: center;
  height: 120px;
  color: white;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid var(--hight-light);
    color: var(--yellow);
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

const NavItemLinks = styled(Link)`
  color: whitesmoke;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: var(--hight-light);
      transition: all 0.5s ease;
    }
  }
`;

export default Navbar;
