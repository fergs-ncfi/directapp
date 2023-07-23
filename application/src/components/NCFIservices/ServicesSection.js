import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ServicesContainer = styled.div`
  background: #fff; /* Change the background color to white */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const ServicesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
  display: flex;
  justify-content: center; /* Center the items horizontally */
  align-items: center; /* Center the items vertically */
  flex-wrap: wrap; /* Allow items to wrap to the next line on smaller screens */
  max-width: 600px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ServiceLink = styled(Link)`
  color: #000; /* Change the text color to black */
  text-decoration: none;
  display: flex;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #5EC7CD;
  }
`;

const ServicesSection = () => {
  return (
    <ServicesContainer>
      <ServicesWrapper>
        <ServiceLink to="#">Identify</ServiceLink>
        <ServiceLink to="#">Protect</ServiceLink>
        <ServiceLink to="#">Detect</ServiceLink>
        <ServiceLink to="#">Respond</ServiceLink>
        <ServiceLink to="#">Recover</ServiceLink>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default ServicesSection;
