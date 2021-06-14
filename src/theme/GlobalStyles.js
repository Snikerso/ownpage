import { createGlobalStyle } from 'styled-components';
import Monsterrat from '../assets/fonts/Montserrat-Regular.ttf';
import MonsterratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf';

const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: 'monsterrat';
        src: url(${Monsterrat});
        font-display: swap;
    }
    @font-face {
        font-family: 'monsterrat-semibold';
        src: url(${MonsterratSemiBold});
        font-display: swap;
    }
    *,*::before,*::after{ 
        box-sizing:border-box;
        font-family: monsterrat;
        margin:0;
        color:#363636;
        }
    html {
        font-size: 62.5%; 
    }
    body{
        font-size:1.6rem;
        margin:0;    
        
    }
    `;

export default GlobalStyles;
