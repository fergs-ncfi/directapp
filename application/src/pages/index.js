import React, { useState } from "react";
import HeroSection from "../components/heroSection";
import InfoSection from "../components/infoSection";
import { Navbar } from "./../components/navbar";
import { Sidebar } from "./../components/sidebar";

import Image1 from "../images/design-notes.svg";
import Image2 from "../images/allsec12.svg";
import InfoSectionLight from "../components/infoSectionLight";
import Services from "../components/services";
import Services2 from "../components/services2";
import Footer from "../components/footer";

document.body.style.backgroundColor = "#000116";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection
        image={Image1}
        id="about"
        subtitle=" "
        title="About NCFI-Guard:"
        text="NCFI-Guard is proudly part of the NCFI group with a specific focus on cyber security services. 
        Our mission is to ensure the continued security of our clients by recognising the challenges they face and building leading solutions to mitigate those risks. With a focus on innovation, collaboration, and client satisfaction, we are committed to delivering world-class security solutions that enable our clients to operate with confidence and peace of mind."
        btnText="Contact Us"
      />
      <Services />
      <InfoSectionLight
        image={Image2}
        id="discover"
        subtitle=" "
        title="Unsure Where To Start ?"
        text="Ever felt like you should be doing more in terms of cyber security but not sure where to start and feel that “Industry Leaders” are not exactly ‘leading’…...         We built a no-nonsense guide to security that’s linked to realistic solutions, services and support which can help beginners to seasons professionals"
        btnText="Find Out More"
      />
      <Services2 
      id="latestnews"
      />
    </>
  );
};
