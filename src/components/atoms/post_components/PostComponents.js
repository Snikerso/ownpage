import React from 'react';
import styled from 'styled-components';


export const Pre = styled.pre`
    padding:20px  5px;
    border-radius:15px;
    display: block;
    font-family: monospace;
    white-space: pre;
    margin: 2em 0;
    overflow-x: scroll;
`
export const Paragraph = styled.p`
    margin: 20px 0px 50px 0px;
    letter-spacing:0.8px;

`
export const Comment = styled.span`
    color:${({theme}) => theme.third};
    font-family: monospace;
    white-space: pre;
    margin: 1em 0;
`

const StyledWrapperImage = styled.div`
    margin:20px auto;
    width: ${({width})=>width}px;
    img{
        width: ${({width})=>width}px;
    }
    p{
        text-align:justify;
        font-size:12px;
    }


 
`

export const Image = ({alt, description, src,width=300}) =>{

    return(
        <>
            <StyledWrapperImage width={width}>
                <img src={src} alt={alt}/>
                <p>{description}</p>
            </StyledWrapperImage>
        </>
    )
}
