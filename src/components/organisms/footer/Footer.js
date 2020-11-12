import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Logo} from 'assets/icons/logo.svg';
import {ReactComponent as Line} from 'assets/icons/line.svg';
import {ReactComponent as Phone} from 'assets/icons/phone.svg';
import {ReactComponent as Mail} from 'assets/icons/mail.svg';

const StyledWrapperFooter = styled.footer`
  position: relative;
  display:flex;
  align-items:center;
  justify-content: space-around;
  height:250px;
  width:100%;
  overflow:hidden;
  @media screen and (max-width:${({theme})=>theme.mediaThird}){
    height:400px;
  }
  @media screen and (max-width:${({theme})=>theme.mediaFifth}){
   
  }
`;
const StyledWrapperFooterInner = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:flex-end;
  width:800px;
  margin:0 auto;
  height:100%;
  gap:100px;

  @media screen and (max-width:${({theme})=>theme.mediaThird}){
    flex-direction:column;
    gap:20px;
    justify-content:flex-start;
    text-align:center;
  }
  @media screen and (max-width:${({theme})=>theme.mediaThourth}){

  }

`;
const ContactItem = styled.p`
  display:flex;
  align-items:center;
  gap:20px;
  font-family: 'monsterrat-semibold';
  color: ${(props) => props.theme.first};
  
`;
const FooterInfo = styled.div`
    display:flex;
    flex-direction:column;
    font-weight:bold;
    text-align:left;
    font-family: 'monsterrat-semibold';
    p{
      width:200px;
      color: ${(props) => props.theme.first};
      font-size:16px;
    }
    h2{
      color: ${(props) => props.theme.second};
    }
    @media screen and (max-width:${({theme})=>theme.mediaThird}){
      text-align:center;
      align-items:center;
    }

`;
const FooterContact = styled.div`
  display:flex;
  flex-direction:column;
  gap:20px;

  @media screen and (max-width:${({theme})=>theme.mediaThird}){
    align-items:center;
  }

`;
const StyledLogo = styled(Logo)`
  position:absolute;
  width:450px;
  height:450px;
  
  left:-200px;
  bottom:-200px;
  path {
    stroke:${({theme})=> theme.first};
  }

  @media screen and (max-width:${({theme})=>theme.mediaThird}){
    left:50%;
    bottom:-50%;
    transform:translate(-50%, 30%)
  }
`
const StyledLine = styled(Line)`
  position:absolute;
  right:0px;
  top:30px;

  @media screen and (min-width:1400px){
    right:0px;
  }
  @media screen and (max-width:1250px){
    right:-200px;
  }
  @media screen and (max-width:1050px){
    right:-350px;
  }

  @media screen and (max-width:${({theme})=>theme.mediaThird}){
    display:none;
  }

`
const Footer = () => (
  <StyledWrapperFooter>
    <StyledLogo/>
    <StyledWrapperFooterInner>
      <StyledLine/>
      <FooterInfo>
        <p>Pytania, uwagi, chęci do wspólnego działania ?</p>
        <h2>Skontaktuj się ze mną</h2>
      </FooterInfo>
      <FooterContact>
        <ContactItem>
          <Mail  color="#FFBA08" />
          <p>snikersdro@gmail.com</p>
        </ContactItem>
        <ContactItem>
          <Phone  color="#FFBA08" />
          <p> 663 406 297 </p>
        </ContactItem>
      </FooterContact>

    </StyledWrapperFooterInner>
    
  </StyledWrapperFooter>
);

export default Footer;
