import React from 'react';
import {Paragraph} from 'components/atoms/post_components/PostComponents';

const Project = () =>{

    return (
        <>
            
            <h3>Dlaczego użyłem takich technologii ?</h3>
            <Paragraph>
                Moim zadaniem było zmodyfikowanie wyglądu strony i musiałem użyć tego aktualnej technologii czyli Wordpress'a.
            </Paragraph>

            <h3>Czego nowego się nauczyłem ?</h3>
            <Paragraph>
                Nauczyłem się dobrej obsługi WordPressa.
            </Paragraph>

            <h3>Jakie problemy napotkałem ?</h3>
            <Paragraph>
                Nie miałem dostępu do PHP, więc miałem trochę problem, żeby zmodyfikować wygląd, ale ostatecznie sobie poradziłem.
            </Paragraph>

            <h3>Dlaczego podobał mi się ten projekt ?</h3>
            <Paragraph>
                Mogłem tworzyć stronę kognitywistyki i przyczynić się do jej rozwoju.
            </Paragraph>

        </>
    )
}

export default Project