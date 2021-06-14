import React from 'react';
import {Paragraph} from 'components/atoms/post_components/PostComponents';

const Project = () =>{

    return (
        <>
            
            <h3>Dlaczego użyłem takich technologii ?</h3>
            <Paragraph>
                Planuje zrobić sporą aplikację opartą o Reinforcement Learning. Chciałem przećwiczyć dotychczas znane mi technologie w mniejszej skali.
            </Paragraph>

            <h3>Czego nowego się nauczyłem ?</h3>
            <Paragraph>
                Pisania dużej ilości treści i rozwijaniu swoich myśli. Kiedyś zawsze miałem problem, żeby zmieścić się w minimalnej ilości słów.
                <br/>
                Szukania i czytania artykułów naukowych. Przeczytałem ich sporo na tematy związane z wprowadzaniem wzrokowym, a przy okazji zahaczyłem o artykuły związane z User Experience i postanowiłem że dalej będę się rozwijał w tym temacie.
                <br/>
                Przeprowadzania badań. Przeprowadziłem badania na 37 osób po 1 do 1,5 godziny każde.
                <br/>
                Analizy danych statystycznych w R takich jak
                - PairWise Wilcox
                - Anova
                - Regresja liniowa
            </Paragraph>

            <h3>Jakie problemy napotkałem ?</h3>
            <Paragraph>
                Największym problemem było obliczenie regresji liniowej zaraz po wrzuceniu zdjęć i odesłanie wyniku.
            </Paragraph>

            <h3>Dlaczego podobał mi się ten projekt ?</h3>
            <Paragraph>
                Postawiłem pierwszy krok w tworzeniu aplikacji z Machine Learning'iem. Początkowo było dla mnie wyzwaniem zrobienie takiego połączenia. Nie wiedziałem jak się do tego zabrać ale ostatecznie się udało. Gdy będę robił kolejną tego typu stronę,to będzie oparta na dynamicznym uczeniu się Reinforcement Learning'u.
            </Paragraph>

        </>
    )
}

export default Project