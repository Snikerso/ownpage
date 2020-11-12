import React, {
    useState,
    createContext,
    Children,
    useContext,
  } from "react";
  import styled, {keyframes, css} from "styled-components";
import {ReactComponent as Arrow } from 'assets/icons/arrow_acordeon.svg'

  const collapse = () => keyframes`
  0% {

  }
  100% {

  }
`
const Details = styled.div`
    width: 327px;
    margin-bottom:50px;
    border-radius:5px;
    @media screen and (max-width:600px){
        width: 90%;
      }
    summary {
        display:flex;
        align-items:center;
        justify-content:space-between;
        list-style: none;
        padding: 6px 12px;
        background-color: ${(props) => props.isActive ? props.theme.first : props.theme.third} ;
        color:  ${(props) => props.isActive ? props.theme.second : props.theme.first} ;
        border:3px solid ${({theme})=>theme.first};
        border-radius: ${({theme})=>theme.radius};
        font-weight:bold;
        min-height:43px;
        cursor: pointer;
        list-style: none;
        z-index:2;
    }
    
    summary::-webkit-details-marker {
      display: none;
    }

    p{
      border:3px solid ${({theme})=>theme.first};
      border-top:none;
      margin-top:-15px;
      border-radius:0px 0px 14px 14px;
      padding:30px 15px 20px ;
      animation: 0.5s ${collapse(`200px`)} linear forwards;
      z-index:-1;
    }
  `

const StyledArrow = styled(Arrow)`
  
  margin-right:20px;
  ${({isActive})=>
    isActive &&
    css`
      transform:rotate(180deg);
      path{stroke:${({theme})=>theme.second};}
    `}
`
  
  const WizzardContext = createContext({
    currentElement: -1,
    setCurrentElement: () => {},
  });
  
  const Detail = (props) => {
    const {title,descripition,index,isActive} = props;
    const {currentElement, setCurrentElement} = useContext(
        WizzardContext
      );
    
    const handleToogleDetail = (index) =>{
      if(index != currentElement){
        setCurrentElement(index)
      }else{
        setCurrentElement(null)
      }
    }

    return (
      <Details isActive={isActive}>
        <>
          <summary onClick={()=> handleToogleDetail(index)} >{title}<StyledArrow isActive={isActive}/></summary>
            {isActive ? (
              <p>{descripition}</p>
            ): null}
        </>
      </Details>
    )
  };

  const Wizzard= ({ children }) => {
    const [currentElement, setCurrentElement] = useState(null);
    const childrenWithProps = Children.map ( children , (child, index) => { 
        return React.cloneElement (child , { 
          index,
          isActive: index === currentElement,
        }); 
      }); 

    return (
      <WizzardContext.Provider
        value={{  currentElement, setCurrentElement }}>
         {childrenWithProps}
      </WizzardContext.Provider>
    );
  };
  

  
  export { Detail, Wizzard };
  