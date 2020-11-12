import React, { Suspense } from 'react';
import styled, {keyframes} from 'styled-components';
import { BrowserRouter} from 'react-router-dom';
import { PostsContext} from 'context/PostsContext';
import { ProjectsContext} from 'context/ProjectsContext';
import {ReactComponent as LogoFinished} from 'assets/icons/logo_finished_correct.svg';

// const UnauthenticatedApp = React.lazy(() => import('apps/UnauthenticatedApp'));

const UnauthenticatedApp = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("apps/UnauthenticatedApp")), 1500);
  });
});
const posts = [
  {id:1,title:"Reinforcement Learning", source:"rl _podstawowe_pojęcia.md", description:"Poznasz podstawowe pojęcia dotyczące RL i jego historie.", slug:"reinforcement", tags:["rl","teoria"]},
  {id:2,title:"Persony - teoria", source:"rl _podstawowe_pojęcia.md", description:"Dowiesz się od strony teorytyczniej co to jest Persona, jak ją zrobić.", slug:"persony-teoria", tags:["ux","research"]},
  {id:3,title:"Persony - teoria", source:"rl _podstawowe_pojęcia.md", description:"Dowiesz się od strony teorytyczniej co to jest Persona, jak ją zrobić.", slug:"persony-teoria", tags:["ux","research"]},
  {id:4,title:"Usuwanie wartości odstających", source:"rl _podstawowe_pojęcia.md", description:"Porównuje usuwanie wartości odstających do sytuacji w filmie WestWorld", slug:"persony-teoria", tags:["analiza","filozoficznie"]},
]
const projects = [
  // {
  //   id: 7, title: 'Wordy', github: '', page: '', description: 'Początkowo jest to strona zrobiona do portfolio. Wykorzystałem w niej wszystkie umiejętności jakie są potrzebne na Między innymi TypeScript Redux, StoryBook, ', data: '01.12.2020', techstack: [{ id: 1, name: 'r' }],
  // },
  {
    id: 6, image:"licencjat.png", source:"licencjat.md",  slug: 'licencjat', type:'RESEARCH', title: 'Licencjat', github: '', page: '', description: "Wraz z promotorem przeprowadziliśmy eksperyment, w którym porównaliśmy trzy metody aktywacji przycisków za pomocy spojrzenia (metoda wykorzystująca czas spojrzenia, wykorzystująca wykrywanie fiksacji oraz gesty wzrokowe) oraz dwa układy klawiatury numerycznej. Przebadaliśmy zdrowe osoby, z których każda wprowadzała czterocyfrowe numery PIN w każdym z sześciu warunków eksperymentu. Okazało się, że najgorzej wypadła metoda wykorzystująca gesty wzrokowe. Eksperyment pozwolił jednak na ustalenie problemów związanych z jej użyciem, które pomogą w dalszym jej rozwoju.", data: '01.12.2020', techstack: [{ id: 1, name: 'r' }],
  },
  {
    id: 0, image:"wlasna_strona.png", source:"wlasna_strona.md",  slug: 'wlasna-strona',  type:'PAGE', title: 'Własna strona', github: '', page: 'https://pawel-drojecki.netlify.app/', description: "Celem stworzenia tej strony było zaprezenotwanie swoich prac, umiejętności oraz swojej osoby przyszłemu pracodawcy. W kolejnym etapie rozwoju mam zaplanowane dodanie bloga o tematyce związanej z Reinforcement Learning'iem, UX'em , programowani'em i filozoficznymi rozważaniami.", data: '', techstack: [{ id: 1, name: 'react' }, { id: 2, name: 'html' }, { id: 3, name: 'css' }, { id: 4, name: 'js' }],
  },
  {
    id: 1,image:"neurodio.png", source:"staz_neurodio.md",  slug: 'staz-neurodio',  type:'PAGE', title: 'Staż Neurodio', github: '', page: 'http://neurodio.com/en/download-our-games/', description: "Staż zdobyłem w ramach konkursu organizowanego przez UMK i trwał on jeden miesiąc. W ramach stażu stworzyłem frontend za pomocą React'a podłączonego do wcześniej stworzonego REST Api w ASP.Net Core. Oprócz trenowania wcześniejszych umiejętności podczas tworzenia tej strony nauczyłem się dwóch kolejnych bibliotek: React Query i React Formik oraz rozwinąłem swoje umiejętności w tworzeniu własnych hooków. Pracowalimy przy tym projekcie zdalnie w grupie czterech osób.", data: '', techstack: [{ id: 1, name: 'react' }, { id: 2, name: 'html' }, { id: 3, name: 'css' }, { id: 4, name: 'js' }],
  },
  {
    id: 2, image:"guesswho.png", source:"guess_who.md",  slug: 'guess-who', type:'PAGE', title: 'GuessWho', github: '', page: 'https://guess-whoo.netlify.app/', description: 'Celem tego projektu było nauczenie się łączenia frontendu z obliczeniami Machine Learning po stronie backendu. Aplikacja polega na wrzuceniu 7 zdjęć po stronie frontendu i przeliczeniu podobieństwa przez regresje liniową, tak żeby stworzyć najlepszą podobiznę zdjęcia targetowego - taki Regression Fake.', data: '', techstack:  [{ id: 1, name: 'react' }, { id: 2, name: 'django' }, { id: 3, name: 'html' }, { id: 4, name: 'css' },{id: 5, name:'python',},],
  },
  {
    id: 3,image:"umbridge_diary.png", source:"umbridges_diary.md",  slug: 'umbridges-diary', type:'PAGE', title: 'Ubridge’s Diary', github: '', page: 'https://umbridge-diary.netlify.app/', description: 'Jest to aplikacja internetowa, którą zrobiłem dla treningu i do portfolio. Nauczyłem się przy niej tworzyć Rest Api w Django oraz rozwinąłem swoje umiejętności w React.js m.in.: w zarządzaniu stanem za pomocą hooków useReducer i useContect, tworzeniu systemu logowania oraz Styled Components.', data: '', techstack: [{id: 1, name:'react'},{id: 2, name:'django'},{id: 3, name:'css'},{id: 4, name:'html'},{id: 5, name:'python'},],
  },
  {
    id: 5,image:"umk.png", source:"kognitywistyka_umk.md",  slug: 'kognitywistyka-umk', type:'PAGE', title: 'Kognitywistyka UMK', github: '', page: 'https://kognitywistyka.umk.pl/', description: 'Celem tego komercyjnego projektu było poprawienie strony internetowej od strony wizualnej. Strona została zbudowana w WordPress. Aktualnie poprawiam SEO oraz wrzucam aktualności na stroną.', techstack: [{ id: 1, name: 'html' }, { id: 2, name: 'css' }],
  },
  {
    id: 4,image:"visc.png", source:"visc.md",  slug: 'visc', type:'PAGE', title: 'Visc', github: '', page: 'http://visc.umk.pl/', description: 'Przy tym projekcie użyłem pierwszy raz komercyjnie React.js i Gatsby.js. Strona jest prostą wizytówką reprezentującą grupę badawczą w Interdyscyplinarnym Centrum Nowoczesnych Technologii i została podłączona do headless GraphCMS. Przy tej stronie zapoczątkowałem współprace z UX Designerem, z którym wpółpracuje, aż do dzisiaj.', techstack: [{ id: 1, name: 'react' }, { id: 2, name: 'gatsby' }, { id: 3, name: 'html' }, { id: 4, name: 'css' },],
  },
];

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
