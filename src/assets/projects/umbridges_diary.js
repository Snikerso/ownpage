import React from 'react';
import {Paragraph} from 'components/atoms/post_components/PostComponents';

const Project = () =>{

    return (
        <>
            
            <h3>Dlaczego użyłem takich technologii ?</h3>
            <Paragraph>
                Użyłem Django, dlatego że nadaje się do tworzenia portali społecznościowych. Ta aplikacja jest zalążkiem portalu społecznościowego, który mam w planach stworzyć.
            </Paragraph>

            <h3>Czego nowego się nauczyłem ?</h3>
            <Paragraph>
            *   Obsługi stanu za pomocą useReducer i useContext.
            *   Łączności z backendem za pomocą RestApi oraz tworzenia systemu logowania ( na backendzie i frontendzie)
            *   Wyświetlania danych tylko zalogowanego użytkownika.
            </Paragraph>

            <h3>Jakie problemy napotkałem ?</h3>
            <Paragraph>
                Największym problemem było zrozumienie systemu logowania i wypracowanie prostej metody jej tworzenia. Ostatecznie zdecydowałem się na użycie do tego Context Api.
            </Paragraph>

            <h3>Dlaczego podobał mi się ten projekt ?</h3>
            <Paragraph>
                Wreszcie okiełznałem system logowania co blokowało mnie w tworzeniu bardziej rozwiniętych aplikacji.
            </Paragraph>

        </>
    )
}

export default Project