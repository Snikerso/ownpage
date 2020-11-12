import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { PostsContext } from 'context/PostsContext';
import { BsLink45Deg } from 'react-icons/bs';
import { HeadWithItem } from 'components/atoms/Wrappers';
import PostItem from '../molecules/PostItem';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns:1fr 1fr;

  column-gap:200px;
  @media screen and (max-width:${({theme})=>theme.mediaThird}){
    grid-template-columns:1fr;
    padding:50px;
    row-gap:90px;
  }
  @media screen and (max-width:${({theme})=>theme.mediaThourth}){
    grid-template-columns:1fr;
    padding:0px;
    column-gap:0px;
    row-gap:90px;
  }
`;
const StyledWrapperInner = styled.div`
  display:flex;
  flex-direction:column;
  gap:80px;
  
  @media screen and (max-width:600px){
    grid-template-columns:1fr;
    column-gap:0px;
    row-gap:70px;
  }
`;
const StyledWrapperWelcomeWords = styled.div`
    display: grid;
    text-align:justify;
    gap:0px;

  
  @media screen and (max-width:600px){
    grid-template-columns:1fr;
    row-gap:10px;
  }
`;
const StyledWrapperAside = styled.div`
  display: flex;
  flex-direction: column;
  min-width:300px;
  gap:25px;


  h3{
    margin-bottom:20px;
    margin-left:5px;
    }
  
  p{
    margin-left:5px;
    }
  
  div {
    display:flex;
    align-items:center;
    
  }
  div a {
    display:flex;
    align-items:center;
    height:100%;
    margin:20px;
    color:${({ theme }) => theme.first};
    text-decoration:none;
    :hover{
      position:relative;
      left:-10px;
      div{
        background-color:${({ theme }) => theme.second};
        color:${({ theme }) => theme.first};
      }

    }
    
  }
  div a div{
      background-color:${({ theme }) => theme.first};
      height:100%;
      font-size:25px;
      padding:3px;
      justify-items:center;
      align-items:center;
      color: ${({ theme }) => theme.second};
      border-radius:5px 0px 0px 5px;
      :hover{

      }

  }
`;
const StyledWrapperRecentPostList = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 8px 8px 16px #808080, -8px -8px 16px #ffffff;
  padding: 0px;
  border-radius: 5px;
  margin: 0 auto;
  row-gap:30px;
  width:400px;
  padding:20px 20px;

  @media screen and (max-width:${({theme})=>theme.mediaThourth}){
  width:100%;
  }
`;



const news = [
  { id: 1, title: 'Ruszyliśmy z sekcją UX/UI w Toruńskim Kole Kognitywistycznym', link: 'https://www.facebook.com/TKK.UMK/' },
  { id: 2, title: 'Wreszcie licencjat skończony. Po kliknieciu możesz przeczytać', link: 'https://kentcdodds.com/' },
  { id: 3, title: 'Konferencja eyetrakingowa ETRA', link: 'https://etra.acm.org/2021/' },
];

function HomePage() {
  const { posts } = useContext(PostsContext);

  return (
    <>
      <Helmet>
        <title>HomePage</title>
      </Helmet>
      <StyledWrapper>
        <StyledWrapperInner>
          <HeadWithItem>
            <h2>Co tu znajdziesz ? </h2>
            <p>
              Znajdziesz tu tematy związane z kognitywistyką, UX'em i
              Reinforcement Learningiem. Również nie zabraknie abstrakcyjnie
              filozoficznych rozważań.
            </p>
          </HeadWithItem >

          <StyledWrapperRecentPostList>
          <h2> Recent Posts</h2>
            {posts.reverse().slice(0, 3).map((item) => <PostItem recent key={item.id} post={item} />)}
         </StyledWrapperRecentPostList>
        </StyledWrapperInner>
        <StyledWrapperAside>
          <h3>Nowinki z mojego świata</h3>

          {news.map((item) => (
            <div>
              <a href={item.link}  target="_blank">
                <div><BsLink45Deg /></div>
                <p>{item.title}</p>
              </a>

            </div>
          ))}
        </StyledWrapperAside>
      </StyledWrapper>
    </>
  );
}

export default HomePage;
