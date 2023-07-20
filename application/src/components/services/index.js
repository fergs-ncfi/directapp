import React from "react";
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from "./ServicesElements";
import Icon1 from "../../images/NetworkServices.svg"
import Icon2 from "../../images/online.svg"
import Icon3 from "../../images/real-time.svg"

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Core Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Consultancy Services</ServicesH2>
          <ServicesP>
            Professional Consultants with years of industry experience ready to help you with any task 
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Vulnerability Management</ServicesH2>
          <ServicesP>
            Donec nec maximus sapien. Aenean edgfbfgbfficitur urna sed felis varius, 
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Managed Detection & Response</ServicesH2>
          <ServicesP>
            Aenean in egestas lectus. Pellentesque habitant morbi tristique
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Email & Cloud Security</ServicesH2>
          <ServicesP>
            Fusce fringilla est ut velit finibus ultricies. Pellentesque id
            eleifend erat.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Cyber Compliance & Governance</ServicesH2>
          <ServicesP>
            Donec nec maximus sapien. Aenean efficitur urna sed felis varius, ut
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>SIEM</ServicesH2>
          <ServicesP>
            Aenean in egestas lectus. Pellentesque habitant morbi tristique ddgdfag adfgd dgfd fadfg
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
