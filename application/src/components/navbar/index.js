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
  NavBlogsLink,
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
  }, []);

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
            <NavBlogsLink to="/">Home</NavBlogsLink>
            </NavItem>
            <NavItem>
            <NavBlogsLink to="/NCFIservices">Services</NavBlogsLink>
            </NavItem>
            <NavItem>
            <NavBlogsLink to="/About">About</NavBlogsLink>
            </NavItem>
            <NavItem>
            <NavBlogsLink to="/insights">Insights</NavBlogsLink>
            </NavItem>
            <NavItem>
            <NavBlogsLink to="/Blogs">Latest News</NavBlogsLink>
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
