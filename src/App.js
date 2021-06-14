import React, { Suspense } from 'react';
import styled, {keyframes} from 'styled-components';
import { BrowserRouter} from 'react-router-dom';
import { PostsContext} from 'context/PostsContext';
import { ProjectsContext} from 'context/ProjectsContext';
import {ReactComponent as LogoFinished} from 'assets/icons/logo_finished_correct.svg';
import { posts , projects} from "constants/data";

const UnauthenticatedApp = React.lazy(() => {
  return new Promise(resolve => {
    
    setTimeout(() => resolve(import("apps/UnauthenticatedApp")), 1500);
  });
});

const dash = keyframes`
 100%{
   stroke-dashoffset:0;
 }
`
const StyledLogoFinished = styled(LogoFinished)`
  position:fixed;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:200px;  
   path{
    stroke-dasharray: 3400;
    stroke-dashoffset: 3400;
    animation: ${dash} 4s linear forwards;
    fill:none;
  }
`;


function App() {
  

  return (

          <PostsContext.Provider value={{posts}}>
            <ProjectsContext.Provider value={{projects}}>
              <BrowserRouter basename="/">
                  <Suspense fallback={<StyledLogoFinished/>}>
                    <UnauthenticatedApp />
                  </Suspense>
              </BrowserRouter>
            </ProjectsContext.Provider>
          </PostsContext.Provider>
  );
}
export default App;
