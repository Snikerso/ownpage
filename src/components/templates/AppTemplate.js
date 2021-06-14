import React from 'react';
import styled from 'styled-components';
import Header from 'components/organisms/header/Header';
import Footer from 'components/organisms/footer/Footer';

const StyledWrapper = styled.div`
  display:flex;
  flex-direction:column;
  min-height:1vh;
`;
const Main = styled.main`
  margin: 100px auto;
  width: 800px;
  min-height: 40vh;

  @media screen and (max-width:900px){
    width:100%;
    padding: 0px 30px;
  }
  @media screen and (max-width:600px){
    width:100%;
    padding: 20px 20px;
  }
`;


function AppTemplate({ children }) {
  return (
    <>
      <StyledWrapper>
        <Header />
        <Main>{children}</Main>
        <Footer/>
      </StyledWrapper>
    </>
  );
}

export default AppTemplate;
