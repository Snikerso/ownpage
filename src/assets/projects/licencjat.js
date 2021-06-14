import React from 'react';
import {Paragraph} from 'components/atoms/post_components/PostComponents';

const Project = () =>{

    return (
        <>
            
            <h3>Dlaczego użyłem takich technologii ?</h3>
            <Paragraph>
                Moim głównym zadaniem programistycznym było przeanalizowanie danych eyetrackingowych i z ankiety użyteczności (SUS). Użyłem do tego języka R, dlatego że wraz z promotorem uznaliśmy, że oboje nauczymy się języka R ponieważ jest znany stosowania go do analizy danych. Uważam że to był dobry wybór ponieważ w R dużo łatwiej się robi obliczenia statystyczne i obróbkę danych niż w Pythonie.


            </Paragraph>

            <h3>Czego nowego się nauczyłem ?</h3>
            <Paragraph>
                Nauczyłęm się lepszej obsługi zdjęć i danych po stronie backendu oraz frontendu oraz regresji liniowej obliczanej w Django.
            </Paragraph>

            <h3>Jakie problemy napotkałem ?</h3>
            <Paragraph>
                Największym problemem było zinterpretowanie wyników modeli hierarchicznych dlatego zrezygnowałem z tego na rzecz testu nieparametrycznego Kruskalla-Wallisa.
            </Paragraph>

            <h3>Dlaczego podobał mi się ten projekt ?</h3>
            <Paragraph>
                Był wyzwaniem Spędziłem nad nim kupe roboczo godzin i nauczyłem się wielu nowych umiejętności, które mi się przydają. Podoba mi się że wszedłem w świat nauki od tego experymentu, ponieważ dało mi to dobry początek do tworzenia kolejnych badań.
            </Paragraph>
            <h3>Co dalej ?</h3>
            <Paragraph>
                Kolejnym etapem jest zgłoszenie badania na konferencji ETRA oraz dalsze testowanie metod ale pod kątem Stering Law. 
            </Paragraph>
        </>
    )
}

export default Project