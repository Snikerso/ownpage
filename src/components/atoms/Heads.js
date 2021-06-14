import React from 'react';
import styled, {css} from 'styled-components';

export const Head = styled.h2`
    align-self:flex-start;
    color:${({theme})=>theme.first};
    font-family: monsterrat-semibold;

`
export const HeadWithBorder = styled.h2`
    align-self:flex-start;
    color:${({theme})=>theme.first};
    margin-bottom:5px;
    border:2px solid black;

    ${({blogpost}) =>
        blogpost && css`
            font-size:20px;
            margin-bottom:0px;
        `
    }

`
const StyledWrapperHeadWithUnderLine = styled.div`
    position:relative;
    padding-right:10px;

    svg{
        position:absolute;
        top: 5px;
    }

    
`
export const HeadWithUnderLine = ({text , width}) =>{

    return(
        <StyledWrapperHeadWithUnderLine>
            <h2>{text}</h2> 
            <svg width="270" height="36" viewBox="0 0 270 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="2" y1="33.4688" x2={width} y2="33.4688" stroke="#FACD2D" stroke-width="4" stroke-linecap="round"/>
                <path d={`M${width}.344 32.4871L${width}.344 2.53125`} stroke="#FACD2D" stroke-width="4" stroke-linecap="round" stroke-linejoin="bevel"/>
            </svg>

        </StyledWrapperHeadWithUnderLine>
    )
}
