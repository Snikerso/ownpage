import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import useCopyToClipBorad from 'hooks/useCopyToClipboard';
import { Head } from 'components/atoms/Heads';

const StyledWrapper = styled.div`
  display: flex;
  position: relative;
  border-radius: 10px;
  padding: 20px;
  border:5px solid ${({theme})=> theme.first};

  @media screen and (max-width:${({theme}) => theme.mediaThourth}){
     width:100%; 
      
  }
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
  


`;


const StyledWrapperTags = styled.div`
  display:flex;
  margin-bottom:10px;
`;

const Tags = styled.p`
  font-size:12px;
  font-weight:bold;
  color:${({theme})=>theme.third};
  margin-right:10px;
`;

const StyledLinkCopy = styled.button`
  display: flex;
  position: absolute;
  width: 100px;
  height: 30px;
  bottom: 8px;
  right: 10px;
  padding:10px;
  background-color: ${(props) => props.theme.white};
  border:4px solid ${(props) => props.theme.second};
  border-radius:8px;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.first};
  font-weight:bold;
  font-size:12px;
  outline: none;

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

const StyledBorders = styled.div`
  position:absolute;
  border:5px solid ${({theme})=> theme.second};
  border-radius:${({theme})=> theme.radius};
  top:-10%;
  left:2%;
  z-index:-1;
  width:103%;
  height: 120%;

  rect{ 
    fill:none;
  }
  
`

function PostItem({ recent = false, post }) {
  const [isCopied, handleCopyToClipBoard] = useCopyToClipBorad();

  let copyLink = 'www.pawel-drojecki.com/blog/' + post.slug
  
  return (
    <>
      <StyledWrapper recent={recent}>
        <StyledBorders/>
      <NavLink to={`/blog/${post.slug}`}>
          <StyledWrapperInner>
            <Head blogpost>{post.title}</Head>
            <StyledWrapperTags>
              {post.tags.map((item) => <Tags>{item}</Tags>)}
            </StyledWrapperTags>
            <p>{post.description}</p>
          </StyledWrapperInner>
        </NavLink>
        <StyledLinkCopy onClick={() => handleCopyToClipBoard(copyLink)}>
          kopiuj link
        </StyledLinkCopy>
        
      </StyledWrapper>
    </>
  );
}

export default PostItem;
