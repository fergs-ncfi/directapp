import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import "./../../App.css";

export const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
      window.addEventListener('scroll', changeNav);      
  }, [])

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/">
            <h1 className="logo-text">N.C.F.I</h1>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
            <NavLinks onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
    Home
  </NavLinks>
            </NavItem>
            
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="discover">Insights</NavLinks>
            </NavItem>

            <NavItem>
              <Link to="/Blogs">Blogs</Link>
            </NavItem>

          </NavMenu>

          <NavBtn>
            <NavBtnLink to="/contact-form">Contact Us</NavBtnLink>
          </NavBtn>
          
        </NavbarContainer>
      </Nav>
      
    </>
  );
  
};
