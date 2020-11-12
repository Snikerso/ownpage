import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import useCopyToClipBorad from 'hooks/useCopyToClipboard';
import { Head } from 'components/atoms/Heads';

const StyledWrapper = styled.div`
  display: flex;
  position: relative;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  box-shadow: 5px 5px 10px #666666, -5px -5px 10px #ffffff;
  border-radius: 5px;
  padding: 20px;
  overflow: hidden;
  
  @media screen and (max-width:${({theme}) => theme.mediaThourth}){
     width:100%; 
      
  }

  ${({ recent }) => recent
    && css`
      min-height: 100px;
      min-width:100px;
      padding: 8px;
     
      @media screen and (max-width:${({theme}) => theme.mediaThourth}){
        min-width:200px;
      }
      @media screen and (max-width:${({theme}) => theme.mediaFifth}){
        min-width:0px;
        width:100%;
        
        
  }

    `}

  a {
    text-decoration: none;
    color: ${(props) => props.theme.black};
  }
`;
const StyledWrapperInner = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 40px;
  border-radius: 5px;
  

  ${({ recent }) => recent
    && css`
      gap: 0px;
    `}
`;

const StyledImg = styled.div`
  width: 200px;
  height: 100px;
  border: 2px solid black;
  margin-bottom:20px;

  
`;
const StyledWrapperTags = styled.div`
  display:flex;
  margin-bottom:10px;
`;
const Tags = styled.p`
  font-size:12px;
  font-weight:bold;
  color:#1982C4;
  margin-right:10px;

`;
const StyledLinkCopy = styled.button`
  display: flex;
  position: absolute;
  width: 80px;
  height: 30px;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.first};
  text-align: center;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 6px;
  color: ${(props) => props.theme.second};
  font-weight:bold;
  outline: none;
  border: none;
  cursor: copy;
  :hover{
    background-color: ${(props) => props.theme.second};
    color: ${(props) => props.theme.first};
  }
  :active {
    color: ${(props) => props.theme.white};
  }
  p {
    opacity: 0.9;
  }
`;

function PostItem({ recent = false, post }) {
  const [isCopied, handleCopyToClipBoard] = useCopyToClipBorad();

  return (
    <>
      <StyledWrapper recent={recent}>
      <NavLink to={`/blog/${post.slug}`}>
          <StyledWrapperInner>
            <Head blogpost>{post.title}</Head>
            <StyledWrapperTags>
              {post.tags.map((item) => <Tags>{item}</Tags>)}
            </StyledWrapperTags>
            {recent ? null : <StyledImg />}
            <p>{post.description}</p>
          </StyledWrapperInner>
        </NavLink>
        <StyledLinkCopy onClick={() => handleCopyToClipBoard(post.slug)}>
          copy link
        </StyledLinkCopy>
      </StyledWrapper>
    </>
  );
}

export default PostItem;
