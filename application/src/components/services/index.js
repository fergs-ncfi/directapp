import React from "react";
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from "./ServicesElements";
import Icon1 from "../../images/consult1.svg"
import Icon2 from "../../images/VM.svg"
import Icon3 from "../../images/MDR1.svg"
import Icon4 from "../../images/EmailSecurity1.svg"
import Icon5 from "../../images/Consultancy.svg"
import Icon6 from "../../images/SIEM1.svg"

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Core services</ServicesH1>
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
  );
};

export default Services;
