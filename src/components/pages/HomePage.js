import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { PostsContext } from 'context/PostsContext';
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


const StyledWrapperAside = styled.aside`
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
    color:${({ theme }) => theme.second};
    text-decoration:none;

    :hover{
      position:relative;
      left:-10px;
      div{
        background-color:${({ theme }) => theme.second};
        color:${({ theme }) => theme.first};
      }

      svg{
        fill:${({ theme }) => theme.first};
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
      svg{
        fill:${({ theme }) => theme.second};
      }
  }

`;
const StyledWrapperRecentPostList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  border-radius: 5px;
  margin: 0 auto;
  row-gap:30px;
  width:400px;
  > * {
    margin-bottom:25px;
  }
  @media screen and (max-width:${({theme})=>theme.mediaThourth}){
  width:100%;
  }
`;



const news = [
  { id: 1, title: 'Ruszyliśmy z sekcją UX/UI w Toruńskim Kole Kognitywistycznym', link: 'https://www.facebook.com/TKK.UMK/' },
  // { id: 2, title: 'Wreszcie licencjat skończony. Po kliknieciu możesz przeczytać', link: 'https://kentcdodds.com/' },
  { id: 3, title: 'Konferencja eyetrakingowa ETRA', link: 'https://etra.acm.org/2021/' },
];

function HomePage() {
  const { posts } = useContext(PostsContext);

  return (
    <>
      <Helmet>
        <title>HomePage</title>
      </Helmet>
      
      {/* <TicTacToeAdapter/> */}

      <StyledWrapper>
        <StyledWrapperInner>
          <HeadWithItem>
            <h2>Co tu znajdziesz ? </h2>
            <p>
              Tematy związane z kognitywistyką, UX'em, programowaniem, analizą i
              reinforcement rearningiem. Również nie zabraknie abstrakcyjnie
              filozoficznych rozważań.
            </p>
          </HeadWithItem >

          <StyledWrapperRecentPostList>
          <h2> Najnowsze posty</h2>
            {posts.reverse().slice(0, 3).map((item) => <PostItem recent key={item.id} post={item} />)}
         </StyledWrapperRecentPostList>
        </StyledWrapperInner>

        <StyledWrapperAside>
          <h3>Nowinki z mojego świata</h3>
          {news.map((item) => (
            <div>
              <a href={item.link}  target="_blank">
                <div><svg stroke="currentColor"  stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4.715 6.542L3.343 7.914a3 3 0 104.243 4.243l1.828-1.829A3 3 0 008.586 5.5L8 6.086a1.001 1.001 0 00-.154.199 2 2 0 01.861 3.337L6.88 11.45a2 2 0 11-2.83-2.83l.793-.792a4.018 4.018 0 01-.128-1.287z"></path><path d="M5.712 6.96l.167-.167a1.99 1.99 0 01.896-.518 1.99 1.99 0 01.518-.896l.167-.167A3.004 3.004 0 006 5.499c-.22.46-.316.963-.288 1.46z"></path><path d="M6.586 4.672A3 3 0 007.414 9.5l.775-.776a2 2 0 01-.896-3.346L9.12 3.55a2 2 0 012.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 00-4.243-4.243L6.586 4.672z"></path><path d="M10 9.5a2.99 2.99 0 00.288-1.46l-.167.167a1.99 1.99 0 01-.896.518 1.99 1.99 0 01-.518.896l-.167.167A3.004 3.004 0 0010 9.501z"></path></svg></div>
                <p>{item.title}</p>
              </a>
            </div>
          ))}

          <div class="fb-page" data-href="https://www.facebook.com/optymalista/" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/optymalista/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/optymalista/"></a></blockquote></div>
        </StyledWrapperAside>
        
      </StyledWrapper>
    </>
  );
}

export default HomePage;
