import React from 'react';
import styled from 'styled-components';
import Navigation from 'components/organisms/navigation/Navigation';
import {ReactComponent as Logo} from 'assets/icons/logo.svg';
import { NavLink } from 'react-router-dom';

const StyledWrapperHeader = styled.div`
  position:relative;
  display: flex;
  width: 100%;
  background-color: ${({theme}) => theme.white};
  height: 100px;
`;
const StyledWrapper = styled.header`
  display: flex;
  margin: auto auto;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  a {
    text-decoration: none;
    color: ${({theme}) => theme.first};
    font-weight:bold;
  }

  @media screen and (max-width: 900px){
    padding: 0px 40px;
  }
  @media screen and (max-width: 600px){
    padding: 0px 40px;
    width:100%;
  }

  @media screen and (max-width:${({theme})=>theme.mediaFifth}){
    padding: 0px 10px;
  }

`;
const StyledHead = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  text-align: center;

  h1{
    font-size:25px;
    
    color:${({theme})=> theme.first};
  }
  @media screen and (max-width:${({theme})=>theme.mediaThourth}){
    position:absolute;
    left:50%;
    top:25%;
    transform:translate(-50%);
    flex-direction:column;
  }

  @media screen and (max-width:${({theme})=>theme.mediaFifth}){
    gap:2px;
    align-items: space-between;
  }
`;
const StyledLogo = styled(Logo)`
  width:65px;
  height:65px;
  
  path {
    stroke:${({theme})=> theme.first};
  }
`;
const Header = () => (
  <StyledWrapperHeader>
    <StyledWrapper>

      <NavLink to="/">
        <StyledHead>
          <StyledLogo src={Logo} alt="Paweł Drojecki" />
          <div>
            <h1>Paweł Drojecki</h1>
          </div>
        </StyledHead>
      </NavLink>

      <Navigation />
    </StyledWrapper>
  </StyledWrapperHeader>
);

export default Header;
