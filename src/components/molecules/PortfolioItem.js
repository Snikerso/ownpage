import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import { Head } from 'components/atoms/Heads';
import { DiGithubBadge } from 'react-icons/di';
import { MdLanguage } from 'react-icons/md';
import PortfolioTechStack from './PortfolioTechStack';

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
  p{
    padding:15px;
    margin-top:42px;
  }
  h3{
    color:${({theme})=> theme.first};
    font-family: monsterrat-semibold;
  }

 

  @media screen and (max-width:${({theme}) => theme.mediaThourth}){
    flex-direction:column;
    align-items: center;
    p{
      padding:0px;
      order:1;
    }
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
const StyledWrappperImgTechStack = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  > * {
    margin-top:20px;
  }
`;

const StyledWrapperDescriptionMore = styled.section`
  display:flex;

  flex-direction:column;
  order:1;
  margin-left:20px;
 p{
   order:0;
 }
  a{
    display:block;
    margin-left:15px;
    color: ${({theme})=> theme.first};
    font-weight:bold;

  @media screen and (max-width:${({theme}) => theme.mediaThourth}){
    margin-left:0px;
    margin-top:15px;
  }
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

function PortfolioItem({ left, item }) {

    return (
      <>
        <StyledWrapperPortfolioItem>
          {left ? (
            <>
              <StyledWrappperImgTechStack>
              <Head portfolio>{item.title}</Head>
              <Links>
                {item.github != '' && (
                  <a href={item.github} target="_blank">
                    <DiGithubBadge size={33} />
                  </a>
                )}
                {item.page != '' && (
                  <a href={item.page} target="_blank">
                    <MdLanguage size={29} />
                  </a>
                )}
              </Links>
              <StyledWrappperImgLinks>
                <StyledBorders/>
                  <img src={require(`assets/images/projects/${item.image}`)} />
              </StyledWrappperImgLinks>
              <h3>Użyte technologie: </h3>
              <PortfolioTechStack techstack={item.techstack} />
            </StyledWrappperImgTechStack>
            
            <StyledWrapperDescriptionMore>
              <p>{item.description}</p>
              <NavLink to={`/projects/${item.slug}`}>Więcej</NavLink>
            </StyledWrapperDescriptionMore>
            </>
          ):(
            <>
              <StyledWrapperDescriptionMore>
                <p>{item.description}</p>
                <NavLink to={`/projects/${item.slug}`}>Więcej</NavLink>
              </StyledWrapperDescriptionMore>
                <StyledWrappperImgTechStack>
                <Head portfolio>{item.title}</Head>
                <Links>
                    {item.github != '' && (
                      <a href={item.github} target="_blank">
                        <DiGithubBadge size={33} />
                      </a>
                    )}
                    {item.page != '' && (
                      <a href={item.page} target="_blank">
                        <MdLanguage size={29} />
                      </a>
                    )}
                </Links>
                <StyledWrappperImgLinks>
                  <StyledBorders/>
                    <img src={require(`assets/images/projects/${item.image}`)} />
                </StyledWrappperImgLinks>
                <h3>Użyte technologie: </h3>
                <PortfolioTechStack techstack={item.techstack} />
              </StyledWrappperImgTechStack>
            </>
          )}

          
        </StyledWrapperPortfolioItem>
      </>
    );
  }
 


export default PortfolioItem;
