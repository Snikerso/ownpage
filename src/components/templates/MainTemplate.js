import React, {useReducer} from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyles';
import { theme } from 'theme/MainTheme';
import LanguageReducer from 'reducers/LanguageReducer';
import { LanguageContext} from 'context/LanguageContext';
import { ENG, PL } from 'theme/LanguageTheme';


function MainTemplate({ children }) {

  const [languageState, languageDispatch] = useReducer(LanguageReducer, {
    language: 'ENG',
    data: ENG,
  });

  return (
    <>
      <GlobalStyle />
      <LanguageContext.Provider value={{languageState, languageDispatch}}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </LanguageContext.Provider>
    </>
  );
}

export default MainTemplate;
