import React from 'react';
import styled, { keyframes } from 'styled-components';
import {ReactComponent as ReactIcon} from 'assets/icons/react.svg';
import {ReactComponent as DjangoIcon} from 'assets/icons/django.svg';
import {ReactComponent as JsIcon} from 'assets/icons/js.svg';
import {ReactComponent as PythonIcon} from 'assets/icons/python.svg';
import {ReactComponent as HtmlIcon} from 'assets/icons/html.svg';
import {ReactComponent as CssIcon} from 'assets/icons/css.svg';
import {ReactComponent as RIcon} from 'assets/icons/R.svg';
import {ReactComponent as GatsbyIcon} from 'assets/icons/gatsby.svg';
import { DiRasberryPi, } from 'react-icons/di';


const TechStackItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  font-size: 30px;
`;

const SwitchLogoChanger = (name)=>{
  switch(name){
    case 'react':
      return <ReactIcon/>
    case 'js':
      return <JsIcon/>
    case 'django':
      return <DjangoIcon/>
    case 'typescript':
      return "Ts"
    case 'html':
      return <HtmlIcon/>
    case 'css':
      return <CssIcon/>
    case 'python':
      return <PythonIcon/>
    case 'rb':
      return <DiRasberryPi/>
    case 'gatsby':
      return <GatsbyIcon />
    case 'r':
      return <RIcon/>
    case 'graphql':
      return "Ts"

  }

}

function PortfolioTechStackItem({ children, ...props }) {
  const { name } = props;

  
  return (
    <>
      <TechStackItem>{SwitchLogoChanger(name)}</TechStackItem>
    </>
  );
}

export default PortfolioTechStackItem;
