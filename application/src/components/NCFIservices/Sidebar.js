import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';


const SidebarContainer = styled.div`
  position: fixed;
  top: 60%;
  left: 0px;
  transform: translateY(-50%);
  background-color: #000;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  z-index: 100;
`;

const SidebarItem = styled(Link)`
color: ${({ isHovered }) => (isHovered ? 'transparent' : '#57DFF7')};  
  font-size: 18px;
  margin: 5px;
  text-decoration: none;
  display: ${({ isHovered }) => (isHovered ? 'none' : 'block')};
  pointer-events: ${({ isHovered }) => (isHovered ? 'none' : 'auto')};

  @media screen and (min-width: 768px) {
    display: block;
  }
`;


const SidebarItemLink = styled(Link)`
  color: #57dff7; /* Set the text color to white */
  text-decoration: none;
  position: relative;

  &:hover {
    text-decoration: underline;
    color: #57dff7;
    
  }
`;

const SidebarItemExpanded = styled.div`
  color: #57dff7;
  font-size: 18px;
  margin: 5px;
  display: ${({ isHovered }) => (isHovered ? 'block' : 'none')};
  pointer-events: ${({ isHovered }) => (isHovered ? 'auto' : 'none')};
`;

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered((prev) => !prev);
  };

   const handleScrollTo = (elementId) => {
    scroll.scrollTo(`#${elementId}`, {
        duration: 200,
        offset: -0, // Adjust the offset based on your layout
        smooth: true,
      });
    };


  return (
    <SidebarContainer onMouseEnter={handleHover} onMouseLeave={handleHover}>

        
      <SidebarItem to="/NCFIservices#Identify" isHovered={isHovered}>
        I
      </SidebarItem>
      <SidebarItemExpanded 
      isHovered={isHovered}
      onClick={() => handleScrollTo("Identify")}
      >
      <SidebarItemLink to="/NCFIservices#Identify">Identify</SidebarItemLink>
      </SidebarItemExpanded>



      <SidebarItem to="/NCFIservices#Protect" isHovered={isHovered}>
        P
      </SidebarItem>
      <SidebarItemExpanded 
      isHovered={isHovered}
      onClick={() => handleScrollTo('Protect')}>
      <SidebarItemLink to="/NCFIservices#Protect">Protect</SidebarItemLink>
      </SidebarItemExpanded>


      <SidebarItem to="/NCFIservices#Detect" isHovered={isHovered}>
        D
      </SidebarItem>
      <SidebarItemExpanded isHovered={isHovered}>
      <SidebarItemLink to="/NCFIservices#Detect">Detect</SidebarItemLink>
      </SidebarItemExpanded>
      

      <SidebarItem to="/NCFIservices#Respond" isHovered={isHovered}>
        R
      </SidebarItem>
      <SidebarItemExpanded isHovered={isHovered}>
      <SidebarItemLink to="/NCFIservices#Respond">Respond</SidebarItemLink>
      </SidebarItemExpanded>



      <SidebarItem to="/NCFIservices#Recover" isHovered={isHovered}>
        R
      </SidebarItem>
      <SidebarItemExpanded isHovered={isHovered}>
      <SidebarItemLink to="/NCFIservices#Recover">Recover</SidebarItemLink>
      </SidebarItemExpanded>

      {/* Add other links as needed */}
    </SidebarContainer>
  );
};

export default Sidebar;
