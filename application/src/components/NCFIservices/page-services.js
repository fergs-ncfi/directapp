import React from 'react';
import styled from 'styled-components';

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  MasterContainer,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  IdentifySection,
  IdentifyTitle,
} from "./PSElements";
import Video from '../../videos/bgvideo.mp4';
import '../../App.css';
import ServicesSection from '../NCFIservices/ServicesSection';

const PageServices = () => {
  return (
    <>
    <MasterContainer>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <div className="container mt-5">
            <div className="d-flex justify-content-center mb-4"></div> {/* Add spacing*/}
            <div className="d-flex justify-content-center mb-4"></div> {/* Add spacing*/}
            <div className="d-flex justify-content-center"> {/* Center the h1 element */}
              <h1 className="text-info">NCFI Guard Services</h1>
            </div>
            <div style={{ height: '10px' }} /> {/* Add some space after the button */}
            <div style={{ height: '10px' }} /> {/* Add some space after the button */}
          </div>
        </HeroContent>
      </HeroContainer>
      <ServicesSection>
        {/* Your ServicesSection content */}
      </ServicesSection>

      <IdentifySection>
        <IdentifyTitle>Identify</IdentifyTitle>
        {/* Content specific to the Identify section */}
      </IdentifySection>

      {/* Add sections for "Protect," "Response," and "Recover" here */}
      
      {/* Additional content specific to PageServices */}
      </MasterContainer>

    </>
  );
};

export default PageServices;
