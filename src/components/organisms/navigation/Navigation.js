import React, { useState } from 'react';
import styled from 'styled-components';
import { MdMenu } from 'react-icons/md';
import NavItem from 'components/atoms/NavItem';

const NavBar = styled.nav`
  display: flex;
  width: 180px;
  justify-content: space-between;
  .active {
    border-bottom: 3px solid ${({theme})=>theme.second};
  }
  @media screen and (max-width: ${({theme})=>theme.mediaThourth}){
    display: none;
  }
  
`;

const NavHamburger = styled.nav`
  display:none;

  @media screen and (max-width:600px){
    display: block;
  }
`;
const NavHamburgerMenu = styled.nav`
  display:none;
  position:fixed;
  justify-content:center;
  align-content:center;
  align-items:center;
  text-align:center;
  width:100%;
  height:190px;
  color:red;
  .active {
    border-bottom: 3px solid ${({theme})=>theme.second};
  }

  @media screen and (max-width:600px){
    display:flex;
    flex-direction:column;
    top:94px;
    padding:20px;
    z-index:2;
    background-color:${({theme}) =>theme.third};
    border-top:3px solid ${({theme}) =>theme.first};
    border-bottom:3px solid ${({theme}) =>theme.first};
    left:0%;
    a:first-child{
      margin-bottom:25px;
    }
  }

`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavHamburger>
        <MdMenu size={40} color={isOpen ? '#FFBA08': '#363636'} onClick={() => setIsOpen(!isOpen)} />
        {isOpen && (

          <NavHamburgerMenu onMouseLeave={() => setIsOpen(false)}>
            <NavItem onClick={() => setIsOpen(false)}  to="/" text="O mnie" />
            <NavItem onClick={() => setIsOpen(false)} exact to="/projects" text="Projekty" />
          </NavHamburgerMenu>
        )}
      </NavHamburger>
      <NavBar >
        <NavItem exact to="/" text="O mnie" />
        <NavItem to="/projects" text="Projekty" />
      </NavBar>
    </>
  );
};

export default Navigation;
