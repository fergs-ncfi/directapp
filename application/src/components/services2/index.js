import React from "react";
import {Services2Container, Services2H1, Services2Wrapper, Services2Card, Services2Icon, Services2H2, Services2P} from "./ServicesElements2";
import Icon1 from "../../images/consult1.svg"
import Icon2 from "../../images/VM.svg"
import Icon3 from "../../images/MDR1.svg"
import { Link } from "react-router-dom";
import "./styles.css"; 

const Services2 = () => {
  return (
    <Services2Container id="services">
      <Services2H1>Latest News</Services2H1>

      <Services2Wrapper>

        <Services2Card>
        <Link to="/contact-form">
          <Services2Icon src={Icon1} />
          <Services2H2>What is MDR/EDR/XDR and what is the right choice for your business </Services2H2>
          <Services2P>
          The history of Anti-Virus and the reality of where the market stands today
          </Services2P>
          </Link>
        </Services2Card>

        <Services2Card>
        <Link to="/contact-form">
          <Services2Icon src={Icon2} />
          <Services2H2>Why Your Asset Management Is Failing</Services2H2>
          <Services2P>
          Lessons learned from 13 years of asset management
          </Services2P>
          </Link>
        </Services2Card>

        <Services2Card>
        <Link to="/contact-form">
          <Services2Icon src={Icon3} />
          <Services2H2>Managed Detection & Response</Services2H2>
          <Services2P>
          Defend against the most sophisticated malware threats with the most advanced solutions
          </Services2P>
          </Link>
        </Services2Card>

      </Services2Wrapper>

    </Services2Container>
  );
};

export default Services2;
