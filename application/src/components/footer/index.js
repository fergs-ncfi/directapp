import React from "react";
import {
  FooterContainer,
  FooterH2,
  FooterLink,
  FooterWrapper,
} from "./FooterElements";
import "./../../App.css";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper className="container py-5">
        <div className="row gx-5 px-4 gy-4">
          <div className="col-lg-3 col-sm-6">
            <FooterH2>About Us</FooterH2>
            <FooterLink href="#">Clients</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
          </div>
          <div className="col-lg-3 col-sm-6">
            <FooterH2>Contact Us</FooterH2>
            <FooterLink href="#">Contact</FooterLink>
            <FooterLink href="#">Support</FooterLink>
          </div>
          <div className="col-lg-3 col-sm-6">
            <FooterH2>Follow Us</FooterH2>
            <FooterLink href="https://www.facebook.com/ncfi.fb" target="_blank">Facebook</FooterLink>
            <FooterLink href="https://www.linkedin.com/company/92817447" target="_blank">LinkedIn</FooterLink>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-5 ">
            <h1 className="logo-text gray-text center-align text-muted">- NCFI -</h1>
          </div>
        </div>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
