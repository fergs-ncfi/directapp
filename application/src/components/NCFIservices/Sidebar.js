import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

  return (
    <SidebarContainer onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <SidebarItem to="/Identify" isHovered={isHovered}>
        I
      </SidebarItem>
      <SidebarItemExpanded isHovered={isHovered}>
        Identify
      </SidebarItemExpanded>


      <SidebarItem to="/Protect" isHovered={isHovered}>
        P
      </SidebarItem>
      <SidebarItemExpanded isHovered={isHovered}>
        Protect
      </SidebarItemExpanded>

      <SidebarItem to="#" isHovered={isHovered}>
        D
      </SidebarItem>
      <SidebarItemExpanded isHovered={isHovered}>
        Detect
      </SidebarItemExpanded>

      <SidebarItem to="#" isHovered={isHovered}>
        R
      </SidebarItem>
      <SidebarItemExpanded isHovered={isHovered}>
        Respond
      </SidebarItemExpanded>

      <SidebarItem to="#" isHovered={isHovered}>
        R
      </SidebarItem>
      <SidebarItemExpanded isHovered={isHovered}>
        Recover
      </SidebarItemExpanded>




      {/* Add other links as needed */}
    </SidebarContainer>
  );
};

export default Sidebar;
