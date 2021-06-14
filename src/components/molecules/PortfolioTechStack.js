import React from 'react';
import styled, { keyframes,css } from 'styled-components';
import PortfolioTechStackItem from '../atoms/PortfolioTechStackItem';

const breatheAnimation = keyframes`
 0% {  opacity: 0; }
 100% {  opacity: 1; }
`;
const StyledWrapper = styled.div`
  display: flex;
  align-self:flex-start;
  flex-wrap: wrap;
  margin-top:5px;
  animation: ${breatheAnimation} 2s;
  > div{
    margin-right:10px;
    margin-bottom:10px;

  }
  ${({main}) =>
        main && css`
          margin-top:0px;
          flex-direction:row;
        `
    }
`;


const PortfolioTechStack = ({techstack, main}) => {

  return (
    <StyledWrapper main={main}>
      {techstack.map((item) => {
        return (
          <PortfolioTechStackItem
            key={item.id}
            name={item.name}
          />
        );
      })}
    </StyledWrapper>
  );
};

export default PortfolioTechStack;