import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: relative;
  border:5px solid ${({theme})=> theme.first};
  border-radius:${({theme})=> theme.radius};
  padding:20px 80px 50px 80px;
  margin-bottom:30px;
  
  h3{
    padding-bottom:40px;
  }

  @media screen and (max-width:${({theme})=>theme.mediaThourth}){
    margin-left:0px;
    padding:30px;
  }
  @media screen and (max-width:${({theme})=>theme.mediaFifth}){
    margin-left:0px;
    padding:0px 30px;
  }

`;
const StyledBorders = styled.div`
  position:absolute;
  border:5px solid ${({theme})=> theme.second};
  border-radius:${({theme})=> theme.radius};
  top:-9%;
  left:2%;
  z-index:1;
  width:101%;
  height: 118%;
  rect{ 
    fill:none;
  }

  @media screen and (max-width:${({theme})=>theme.mediaThourth}){
    width:102%;
    height: 109%;
    top:-4.5%;

  }
  @media screen and (max-width:${({theme})=>theme.mediaFifth}){
    width:103%;
    height: 107%;
    top:-3.5%;
  }

  
`

const StyledWrapperText = styled.div`
  display:flex;
  flex-direction:column;
  gap:40px;
  margin-top:20px;
  z-index:100;
`;

const AvatarExplain = () => (
  <>
    <StyledWrapper>
      <StyledBorders/>
        <StyledWrapperText>
          <h2>Kilka słów o mnie</h2>  
          <p>
              Większość życia spędziłem na próbowaniu wielu rzeczy.
              Można powiedzieć, że miałem słomiany zapał, co kiedyś myślałem że jest 
              złe, dlatego że wpoiłem sobię że trzeba znaleźć to coś co muszę robić całe życie. 
              To mnie odstraszało od kontynuowania jednej rzeczy. 
              Gdy przestałem myśleć w ten sposób i zmieniłem taktykę działania to... zaczęło działać.
              Zamiast zaczynać od podstaw nowy pomysł, próbuje go łączyć z tymi, które
              aktualnie realizuje, tak żeby je zlepić jak kulę snieżną.
              Z perspektywy czasu cieszę się, że miałem słomiany zapał. Myślę że pozwala mi to teraz
              patrzeć z wielu perspektyw i jestem osobą o wielu zainteresowaniach.
          </p>
        </StyledWrapperText>
    </StyledWrapper>
    
  </>
);

export default AvatarExplain;
