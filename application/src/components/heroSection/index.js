import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { ButtonR } from "../ButtonElements";
import Video from "../../videos/bgvideo.mp4";
import "../../App.css";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <h1 className="h1-hero">
          <span class="h1.text">Finding the </span>
          <span class="text-info">Possible </span>
          <span class="inthe">In Im</span>
          <span class="text-info">possible</span>
        </h1>

        <p className="hero-text"> Cyber Security Solutions and Services Built To Meet The Needs Of Your Business</p>
        <HeroBtnWrapper>
      
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
