import {React,useState, useEffect} from 'react';
import styled from 'styled-components';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from "./ServicesElements";
import Icon1 from "../../images/consult1.svg"
import Icon2 from "../../images/VM.svg"
import Icon3 from "../../images/MDR1.svg"
import Icon4 from "../../images/EmailSecurity1.svg"
import Icon5 from "../../images/Consultancy.svg"
import Icon6 from "../../images/SIEM1.svg"

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
import Sidebar from './Sidebar'; // Import the Sidebar component

document.body.style.backgroundColor = "#000116";


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
      </MasterContainer>

      {/*                       IDENTIFY                            */}
      <ServicesContainer id="Identify">
      <ServicesH1>Identify:</ServicesH1>
      <ServicesH2>Understanding Your Environment:</ServicesH2>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Consultancy Services</ServicesH2>
          <ServicesP>
          Engage Professional Consultants With Years Of Industry Experience
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Vulnerability Management</ServicesH2>
          <ServicesP>
          Identify, Contextualise and Remediate Vulnerabilities Within Your Environment
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Managed Detection & Response</ServicesH2>
          <ServicesP>
          Defend against the most sophisticated malware threats with the most advanced solutions
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>

    {/*                       Protect                            */}
    <ServicesContainer id="Protect">
      <ServicesH1>Protect:</ServicesH1>
      <ServicesH2>Understanding Your Environment:</ServicesH2>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Consultancy Services</ServicesH2>
          <ServicesP>
          Engage Professional Consultants With Years Of Industry Experience
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Vulnerability Management</ServicesH2>
          <ServicesP>
          Identify, Contextualise and Remediate Vulnerabilities Within Your Environment
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Managed Detection & Response</ServicesH2>
          <ServicesP>
          Defend against the most sophisticated malware threats with the most advanced solutions
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>Email & Cloud Security</ServicesH2>
          <ServicesP>
          The most advanced protection for end users to prevent phishing, malware etc..
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon5} />
          <ServicesH2>Cyber Compliance & Governance</ServicesH2>
          <ServicesP>
          All Your Compliance, Reporting, Policy and Procedure Requirements Met In One Place
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon6} />
          <ServicesH2>SIEM</ServicesH2>
          <ServicesP>
          Gain complete visibility of your environment with SIEM solutions built your business requirements
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>

      {/*                       Detect                            */}
      <ServicesContainer id="Detect">
      <ServicesH1>Detect:</ServicesH1>
      <ServicesH2>Understanding Your Environment:</ServicesH2>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Consultancy Services</ServicesH2>
          <ServicesP>
          Engage Professional Consultants With Years Of Industry Experience
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Vulnerability Management</ServicesH2>
          <ServicesP>
          Identify, Contextualise and Remediate Vulnerabilities Within Your Environment
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Managed Detection & Response</ServicesH2>
          <ServicesP>
          Defend against the most sophisticated malware threats with the most advanced solutions
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>


      {/*                       Respond                            */}
      <ServicesContainer id="Respond">
      <ServicesH1>Respond:</ServicesH1>
      <ServicesH2>Understanding Your Environment:</ServicesH2>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Consultancy Services</ServicesH2>
          <ServicesP>
          Engage Professional Consultants With Years Of Industry Experience
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Vulnerability Management</ServicesH2>
          <ServicesP>
          Identify, Contextualise and Remediate Vulnerabilities Within Your Environment
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Managed Detection & Response</ServicesH2>
          <ServicesP>
          Defend against the most sophisticated malware threats with the most advanced solutions
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>

      {/*                       Recover                            */}
      <ServicesContainer id="Recover">
      <ServicesH1>Recover:</ServicesH1>
      <ServicesH2>Understanding Your Environment:</ServicesH2>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Consultancy Services</ServicesH2>
          <ServicesP>
          Engage Professional Consultants With Years Of Industry Experience
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Vulnerability Management</ServicesH2>
          <ServicesP>
          Identify, Contextualise and Remediate Vulnerabilities Within Your Environment
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Managed Detection & Response</ServicesH2>
          <ServicesP>
          Defend against the most sophisticated malware threats with the most advanced solutions
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>

    <Sidebar/>


    </>
  );
};

export default PageServices;
