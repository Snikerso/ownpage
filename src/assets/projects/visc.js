import React from 'react';
import {Paragraph} from 'components/atoms/post_components/PostComponents';

const Project = () =>{

    return (
        <>
            
            <h3>Dlaczego użyłem takich technologii ?</h3>
            <Paragraph>
                Zdecydowałem się na Gatsby'ego, ponieważ projekt miał być typową reprezentacyjną stroną internetową z możliwością dodawanie aktualności, a Gatsby idealnie się nadaje do takich stron. Jako CMS użyłem headless GraphCMS, dlatego że wydawał się najłatwiejszą opcją na moje umiejetności.
            </Paragraph>

            <h3>Czego nowego się nauczyłem ?</h3>
            <Paragraph>
            *   Tworzenia od podstaw strony w React i Gatsby
            *   zaczytywania danych z headless CMS.

            </Paragraph>

            <h3>Jakie problemy napotkałem ?</h3>
            <Paragraph>
                Największym problemem było zaczytywanie danych z headless CMS'a i zrozumienie GraphQL.
            </Paragraph>

            <h3>Dlaczego podobał mi się ten projekt ?</h3>
            <Paragraph>
                Pierwszy raz w praktyce i komercyjnie wykorzystałem Reacta i na dodatek podłączyłem go do CMSs'a, to było sporym wyzwaniem.
            </Paragraph>

        </>
    )
}

export default Project