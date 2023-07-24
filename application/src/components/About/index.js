// pages/About.js
import React from 'react';
import styled from 'styled-components';
import InfoSection from "../../components/infoSection";
import Image1 from "../../images/design-notes.svg";

document.body.style.backgroundColor = "#000116"; 

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000116;
`;

const AboutContent = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #FFF;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #000116;
`;

const Title = styled.h1`
  padding: 20px;
  color: #B05FFD;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;



const About = () => {
  return (
    <InfoSection
        image={Image1}
        id="about"
        subtitle=" "
        title="About NCFI-Guard:"
        text="NCFI-Guard is proudly part of the NCFI group with a specific focus on cyber security services. 
        Our mission is to ensure the continued security of our clients by recognising the challenges they face and building leading solutions to mitigate those risks. With a focus on innovation, collaboration, and client satisfaction, we are committed to delivering world-class security solutions that enable our clients to operate with confidence and peace of mind."
        btnText="Contact Us"
      />
  );
};

export default About;
