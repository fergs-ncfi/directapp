import React, { useState } from "react";
import HeroSection from "../components/heroSection";
import InfoSection from "../components/infoSection";
import { Navbar } from "./../components/navbar";
import { Sidebar } from "./../components/sidebar";

import Image1 from "../images/design-notes.svg";
import Image2 from "../images/space.svg";
import InfoSectionLight from "../components/infoSectionLight";
import Services from "../components/services";
import Footer from "../components/footer";

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
        title="About NCFI:"
        text="Our mission is to ensure the continued security of our clients by recognising the challenges they face and building leading solutions to mitigate those risks. With a focus on innovation, collaboration, and client satisfaction, we are committed to delivering world-class security solutions that enable our clients to operate with confidence and peace of mind."
        btnText="Contact Us"
      />
      <Services />
      <InfoSectionLight
        image={Image2}
        id="discover"
        subtitle="Morbi iaculis enim"
        title="In hac habitasse"
        text="Phasellus porta sagittis sapien. Nam quis odio eu libero tempus rutrum. Suspendisse nec eros eget ex cursus rhoncus. Proin at velit quis ante pretium porta. Quisque pulvinar, elit et tincidunt ultricies, mauris odio luctus risus, vitae auctor elit risus a tortor. Nunc pulvinar purus id est rutrum vulputate. Mauris venenatis lectus vel nisi semper scelerisque."
        btnText="Explore"
      />
      <Footer />
    </>
  );
};
