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
            <Link to="/" style={{ color: "#fff", padding: "25px",textAlign: "center", display: "inline-block", textDecoration: "none", transition: "all 0.2s ease-in-out" }}>
                Home
              </Link>
            </NavItem>
            <NavItem>
            <Link to="about" style={{ color: "#fff", padding: "25px",textAlign: "center", display: "inline-block", textDecoration: "none", transition: "all 0.2s ease-in-out" }}>
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link to="services" style={{ color: "#fff", padding: "25px",textAlign: "center", display: "inline-block", textDecoration: "none", transition: "all 0.2s ease-in-out"  }}>
                Services
              </Link>
            </NavItem>
            <NavItem>
              <Link to="discover" style={{ color: "#fff", padding: "25px",textAlign: "center", display: "inline-block", textDecoration: "none", transition: "all 0.2s ease-in-out"  }}>
                Insights
              </Link>
            </NavItem>
            <NavItem>
            <Link to="/Blogs" style={{ color: "#fff", padding: "25px", textAlign: "center", display: "inline-block", textDecoration: "none", transition: "all 0.2s ease-in-out" }}>
                Latest News
              </Link>
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
