import React from 'react';
import {Paragraph} from 'components/atoms/post_components/PostComponents';

 




const Project = () =>{

    return (
        <>
            <h3>Dlaczego użyłem takich technologii ?</h3>
            <Paragraph>
                Użyłem Reacta bo go lubię i chciałem w nim stworzyć swoją stronę. Myślałem nad użyciem Gatsby albo Next.Js ale postanowiłem nie zaczytywać danych z backendu
                , a dać je wszystkie na Front End. Póki co nie ma ich na tyle, żeby generowały wysokie opóźnienia. 
                W przyszłości chce zrobić własnego CMS'a, do którego bym podłączył stronę.

            </Paragraph>

            <h3>Czego nowego się nauczyłem ?</h3>
            <Paragraph>
                Nauczyłem się tworzyć Compound Components, które wykorzystałem do zrobienia rozwijanych list.
            </Paragraph>

            <h3>Jakie problemy napotkałem ?</h3>
            <Paragraph>
                Przebieg tworzenia strony przebiegł pomyślnie.
            </Paragraph>

            <h3>Dlaczego podobał mi się ten projekt ?</h3>
            <Paragraph>
            Bardzo podoba mi się projekt strony, który stworzyła dla mnie UX designerka, z którą współpracuję.
            </Paragraph>

  
        </>
    )
}

export default Project