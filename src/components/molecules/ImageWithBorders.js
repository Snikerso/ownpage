import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: relative;
  border:5px solid ${({theme})=> theme.first};
  border-radius:${({theme})=> theme.radius};
  padding:20px 80px 50px 80px;
  margin-bottom:30px;
  
  img{
      width:100%;
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

const ImageWithBorders = ({image}) => {
    console.log(image)
    return(
  <>
    <StyledWrapper>
      <StyledBorders/>
        <img src={require(`assets/images/projects/${image}`)}/>
    </StyledWrapper>
  </>
    )
};

export default ImageWithBorders;
