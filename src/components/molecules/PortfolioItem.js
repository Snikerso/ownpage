import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import { Head } from 'components/atoms/Heads';
import { DiGithubBadge } from 'react-icons/di';
import PortfolioTechStack from './PortfolioTechStack';
import IconLink from '../atoms/Icons/IconLink';

const StyledWrapperPortfolioItem = styled.section`
  display: flex;
  flex-direction:row;
  align-items: flex-start;
  justify-content:center;
  text-align: left;

  img {
    width: 300px;
    border-radius: 5px;
    z-index: 1;
  }
  @media screen and (max-width:${({theme}) => theme.mediaThourth}){
    flex-direction:column;
    align-items: center;
    img{
      order:0;
    }
  }
  @media screen and (max-width:${({theme}) => theme.mediaFifth}){
 
    img{
      width:100%;
    }
  }

`;
const StyledWrapperTitleAndSubtitle = styled.section`
  margin-bottom:30px;

`;
const StyledWrapperTechStack = styled.div`
  margin-top:30px;
`;
const StyledWrappperImgTechStack = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledWrapperDescriptionMore = styled.section`
  display:flex;
  flex-direction:column;
  align-self:center;
  height:100%;
  order:1;
  margin-left:20px;

  p {
    order:0;
  }

  a {
    display:block;
    align-self:flex-end;
    color: ${({theme})=> theme.first};
    font-weight:bold;
  }
  
`;

const StyledWrappperImgLinks = styled.section`
  border:5px solid ${({theme})=> theme.first};
  border-radius:${({theme})=> theme.radius};
  padding:20px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`;

const Links = styled.section`
  display: flex;
  align-items: center;
  text-align: center;
  position: absolute;
  border-radius: 0px 0 5px 5px;
  border-top: none;
  right:-15px;
  padding: 0px 0px 0px 0px;
  z-index: 0;

  a {
    :hover {
      cursor: pointer;
      color: ${({ theme }) => theme.second};
    }
    color: ${({ theme }) => theme.first};
    width: 35px;
    width: 35px;
  }
`;
const StyledBorders = styled.div`
  position:absolute;
  border:5px solid ${({theme})=> theme.second};
  border-radius:${({theme})=> theme.radius};
  top:-10%;
  left:2%;
  z-index:1;
  width:103%;
  height: 120%;

  rect{ 
    fill:none;
  }
  
`


function PortfolioItem({ item }) {

    return (
      <>
        <StyledWrapperPortfolioItem>
              <StyledWrappperImgTechStack>
                <StyledWrapperTitleAndSubtitle>
                  <Head>{item.title}</Head>
                  <p>{item.subtitle}</p>
                </StyledWrapperTitleAndSubtitle>
              <Links>
                {item.github != '' && (
                  <a href={item.github} target="_blank">
                    <DiGithubBadge size={33} />
                  </a>
                )}
                {item.page != '' && (
                  <a href={item.page} target="_blank">
                    <IconLink size={29} />
                  </a>
                )}
              </Links>
              <StyledWrappperImgLinks>
                <StyledBorders/>
                  <img src={require(`assets/images/projects/${item.image}`)} />
              </StyledWrappperImgLinks>
              <StyledWrapperTechStack>
                <h3>Użyte technologie: </h3>
                <PortfolioTechStack techstack={item.techstack} />
              </StyledWrapperTechStack>
            </StyledWrappperImgTechStack>
            <StyledWrapperDescriptionMore>
              <p>{item.description}</p>
              {item.slug &&<NavLink to={`/projekty/${item.slug}`}>Więcej</NavLink> }
              </StyledWrapperDescriptionMore>
        </StyledWrapperPortfolioItem>
      </>
    );
  }
 


export default PortfolioItem;
