import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';



export const NavBlogsLink = styled(LinkR)`
  color: #fff;
  padding: 25px;
  text-align: center;
  display: inline-block;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #57DFF7;
  }
`;



export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000116' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem; 
    position: sticky;
    top: 0;
    z-index: 10;
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
    
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: #57DFF7;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    transition: all ease 0.2s;

    &:hover {
        color: #5EC7CD;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        font-weight: bold;
        margin-top: auto;
        margin-bottom: auto;
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    height: 80px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    
`;





export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    text-decoration: none;
    background: #5EC7CD;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 1rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    font-weight: 900;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #5EC7CD;
    }
`;
