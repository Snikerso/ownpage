import React from 'react';
import {Pre, Paragraph, Comment, Image} from 'components/atoms/post_components/PostComponents';

const Post = () =>{

    return (
        <>

            <h3>Na początek</h3>

            <Paragraph>
                W tym artykule skupiłem się bardziej na kodzie niż na teorytycznym omówieniu algorytmu, dlatego że teorytycznego omówienia jest w internecie całkiem sporo, a kod często tłumaczą niezrozumiale, więc chciałem dodać swoją cegiełke od tej strony. Jeżeli chcesz się dowiedzieć więcej wystarczy wpisać w wyszukiwarke frazę "wyszukiwanie binarne".
            </Paragraph>


            <h3>Czym jest algorytm binarny</h3>

            <Paragraph>
                Algorytm binarny jest jednym z najszybszych sposobów wyszukiwania elementu w liście i z założenia jest bardzo prosty. Jest tak ponieważ z każdą iteracją ( krokiem ) 
                dzieli listę, którą chcemy przeszukać na pół i robi tak dopóki nie napotka 
                docelowego elementu. Jedynym warunkiem żeby użyć tego algorytmu jest posortowana lista ponieważ dzięki temu algorytm wie czy musi wziąć większe liczby czy mniejsze.

            </Paragraph>


            <Image 
                    src={require('assets/posts/images/post_2_wyszukiwanie_binarne/zdj1.png')}
                    description={'Zdj.1: Przykładowa lista wrzucona do algorutmu binarnego. W pierwszej iteracji mamy 8 elementów i wybieramy środkowy element, po czym jeżeli to nie jest ten element, a wiemy że jest mniejszy od tego który znaleźliśmy (dzieki temu że jest posortowana lista) to bierzemy kolejną połówkę i tak dalej. '}
                    alt={"algorytm krok po korku"}/>

            <h3>Kodzik</h3>

<Pre>
            {`
uczniowie = ["Alicja","Bartek","Gniewomir","Grzegorz","Iza","Jacek","Małgorzata","Kamila","Tomek","Paweł"]  `} <Comment>{`# lista uczniów, w której bedziemy szukać jednego ucznia (jest nie posortowana)`}</Comment>

{`

uczniowie.sort() `} <Comment>{`# tym sposobem sortujemy listę (o algorytmie sortowanie kiedy indziej)`}</Comment>

{`



def wyszukiwanie_binarne(lista, cel):`} <Comment>{`# deklarujemy funkcję w której przekazujemy w naszym przypadku listę uczniów oraz cel czyli ucznia, którego chcemy znaleźć`}</Comment>

    {`

    najmniejszy_element = 0 `} <Comment>{`# na początek ustawiamy najmniejszy element na zero później będzie się zmieniał w zależności po której połowie znajduję się nasz cel`}</Comment>

    {`

    najwiekszy_element = len(uczniowie) - 1 `} <Comment>{`# tak samo jak w najmniejszy_element ustawiamy maksymalnie możliwy do wyszukiwania element i bedzie się zmieniał w zależności po której stronie znajduję się nasz cel`}</Comment>
    
    {`



    while najmniejszy_element  <= najwiekszy_element: `} <Comment>{`# tworzymy pętle, która się przerwie jeżeli dojdzie do sytuacji, że nie można już podzielić listy na pół`}</Comment>

        {`

        srodkowy_element = int(round(( najmniejszy_element + najwiekszy_element ) / 2 )) `} <Comment>{`# wybieramy aktualny srodkowy element i zaokrąglamy go w dół jeżeli zajdzie taka potrzeba`}</Comment>

        {`

        wybrany_element = lista[srodkowy_element] `} <Comment>{`# wybieramy środkowy element z listy `}</Comment>

        {` 


        if wybrany_element == cel: `} <Comment>{`# jeżeli wybrany element to nasz cel... `}</Comment>

            {`

            return srodkowy_element `} <Comment>{`# ...to kończymy zabawe i zwracamy nasz element którego szukaliśmy`}</Comment>
        {`


        if wybrany_element > cel: `} <Comment>{`# jeżeli wybrany element jest większy od naszego celu...`}</Comment>

        {`

            najwiekszy_element = srodkowy_element - 1 `}<Comment>{`# ...to zmniejszamy naszą listę o połowe (od góry)`}</Comment>
        {`


        else:
            najmniejszy_element = srodkowy_element + 1 `}<Comment>{`# jeżeli wybrany element jest mniejszy od naszego celu to zmniejszamy naszą listę o połowe (od dołu)`}</Comment>

    {`

    return None `} <Comment>{`# jeżeli lista jest nie posortowana albo nie ma w niej elementu to pętla zwraca nam None`}</Comment>
    
    
    {`



wyszukiwanie_binarne(uczniowie,"Bartek")`} <Comment>{`# wywołujemy wczesniej przygotowaną funkcję i sprawdzamy czy wychodzi ;d`}</Comment>

    

</Pre>

        </>
    )
}

export default Post