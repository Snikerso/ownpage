import React from 'react';
import {Paragraph} from 'components/atoms/post_components/PostComponents';

const Project = () =>{

    return (
        <>
            
            <h3>Dlaczego użyłem takich technologii ?</h3>
            <Paragraph>
                Początkowo aplikacja była napisana w framework'u Blazor. Stwierdziłem, że jest to nowy framework na rynku i będzie ciężko szybko go poznać, a staż trwał 1 miesiąc. Na dodatek nie znałem dobrze C#, więc uznałem że React będzie pewniejszym pomysłem i że zdziałam więcej w tak krótkim czasie. Choć gdyby nie było dużo zmian w funkcjonowaniu aplikacji, a była by tylko konieczność korekty wyglądu to zdecydowałbym się na pozostaniu przy Blazor.
            </Paragraph>

            <h3>Czego nowego się nauczyłem ?</h3>
            <Paragraph>
                Najbardziej jestem zadowolony, że nauczyłem się dwóch fajnych bibliotek: React Query oraz Formik, który przyspieszył mi pracę z formularzami. Do tego pierwszy raz pracowałem zdalnie w trzy osobowym zespole. Prawie codziennie mieliśmy kilku minutowe spotkanie przed i po pracy, aby omówić co będziemy robić albo z czym mieliśmy problem.

            </Paragraph>

            <h3>Jakie problemy napotkałem ?</h3>
            <Paragraph>
                Największym problemem było pobranie danych z API. Problem występował przez certyfikat SSL i przez to, że aplikacja React była na innym porcie. To blokowało mi dostęp do API. Przez kilka dni zgłębiałem backend napisany w ASP net core i szukałem rozwiązania. W końcu wpadłem na to, żeby stworzyć serwer proxy, który symuluje port, który akceptuje backend.

            </Paragraph>

            <h3>Dlaczego podobał mi się ten projekt ?</h3>
            <Paragraph>
                Podobała mi się współpraca w zespole i miałem okazję wykorzystać nowo poznane biblioteczki.
            </Paragraph>

        </>
    )
}

export default Project