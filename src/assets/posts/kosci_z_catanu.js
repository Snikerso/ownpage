import React from 'react'
import { Paragraph, Comment, Pre, Image} from 'components/atoms/post_components/PostComponents'


const Post= () =>{

    return (
        <>
            <h3>Prawdopodobna kłótnia</h3>

            <Paragraph>
                Podczas gry w trzy osoby w najnowszą wersję gry planszowej "Catan: Gwiezdni osadnicy", wszystko szło dobrze, aż do czasu gdy kumpel zdradził nam swój plan
                jak zwiększa prawdopodobieństwo wygranej.
                <br/><br/>

                Okazało się, że rozkłada wszystkie swoje kolonie jak najbardziej rozrzucone po wszystkich numerach na planszy,
                ignorując zasadę, że przy 6 i 8 jest największe prawdopodobieństwo wylosowania surowców.
                Czyli stara się rozkładać kolonie tak aby miał je przy każdym numerze ( 2,3,4,5,6,8,9,10,11,12 ).
                <br/><br/>
                Jak nam o tym powiedział to przez chwile zwątpiłem. Przecież nawet w instrukcji piszą, że wiekszę prawdopodobieńtwo występuje przy polach 6 i 8, 
                a do tego na planszy numery 6 i 8 są specjalnie pokolorowane na czerwono. Zapominając o zasadach statystycznych już zacząłem rozkminiać, że może specjalnie obciążyli kostki,
                żeby trochę urozmaicić grę ale w końcu moja dziewczyna powiedziała, że tutaj chodzi o zdarzenia i w tym momencie przypomniała mi się cała statystyka.

            </Paragraph>

            <h3>Rzut jedną kością</h3>

            <Paragraph>
                Przy rzucie jedną kością prawdobieństwo wyrzucenia 1 jest równa 1/6 (0.17) ponieważ:

                Patrzymy na wszystkie możliwości jakie mogą zaistnieć przy rzucie sześcienną kością. Jest ich 6. Następnie patrzymy w jakich przypadkach możemy wyrzucić jedynkę - tylko raz.
                
<Pre>
{`
zdarzenia_szukane = 1`} <Comment>{`# przykładawo jeżeli szukamy tylko 1`}</Comment>
{`
zdarzenia_wszystkie = 6 `} <Comment>{`# wszystkie zdarzenia przy rzucie jedną kością`}</Comment>
{`
p = zdarzenia_szukane / zdarzenia_wszystkie
`}      
<Comment>{`p = 0.16666666666666666`}</Comment>
</Pre>


                Gdy chemy poznać jakie jest prawdopodobienstwo wyrzucenia 2 i 3 to bierzemy te dwa zdarzenie i dzielimy przez wszystkie możliwe zdarzenia. czyli 2/6

            </Paragraph>


 
            <h3>Rzut dwoma koścmi</h3>

            <Paragraph>
                W przypadku dwóch kości jest trochę więcej możliwości. 
                <br/><br/>
                Trójkę możemy wyrzucić na 2 sposoby:
                <Image 
                    src={require('assets/posts/images/post_1_kosci_z_catanu/kosci_1.png')}
                    description={'Zdj.1: Wszystkie możliwości zdarzeń przy rzucie dwoma koścmi. Wyrzucenia trójki są zaznaczone na niebiesko.'}
                    alt={"wszystkie możliwości zdarzeń"}/>

                Gdy chemy poznać jakie jest prawdopodobienstwo wyrzucenia trójki przy rzucie dwoma koścmi to bierzemy wszystkie zdarzenia w których występuje dwójka i dzielimy przez 
                wszystkie możliwe zdarzenia 36. czyli 2/36 = 0.0556 (Zdj. 1)

            </Paragraph>

            <h3>Prawdopodobieńtwo przy 6 lub 8</h3>

            <Paragraph>
                Gdybyśmy zapytali jakie jest prawdopodobieństwo wyrzucenia 6 to bierzemy wszystkie zdarzenia w których można uzyskać wartość 6 ( jest to 5 zdarzeń ) i dzielimy przez wszystkie możliwe zdarzenia ( jest to 36 ).

<Pre>
{`
zdarzenia_szukane_6 = 5`} <Comment>{`# jest pięć możliwość wylosowania 6`}</Comment>
{`
zdarzenia_wszystkie = 36 `} <Comment>{`# wszystkie zdarzenia przy rzucie jedną kością`}</Comment>
{`
p = ( zdarzenia_szukane_6 / zdarzenia_wszystkie )
`}      
<Comment>{`p = 0.139`}</Comment>
</Pre>


                <Image 
                    src={require('assets/posts/images/post_1_kosci_z_catanu/kosci_2.png')}
                    description={'Zdj.2: Wszystkie możliwości zdarzeń przy rzucie dwoma koścmi. Wyrzucenia 6 są zaznaczone na niebiesko, a wyrzucenia 8 na czerwono.'}
                    alt={"możliwości zdarzeń"}/>

                A jaka jest różnica między wyrzuceniem 6 a 2 ? 

<Pre>
{`
zdarzenia_szukane_2 = 1`} <Comment>{`# jest jedna możliwość wylosowania 1`}</Comment>
{`
zdarzenia_szukane_6 = 5`} <Comment>{`# jest pięć możliwość wylosowania 6`}</Comment>
{`
zdarzenia_wszystkie = 36 `} <Comment>{`# wszystkie zdarzenia przy rzucie jedną kością`}</Comment>
{`
p_różnica = ( zdarzenia_szukane_6 / zdarzenia_wszystkie ) - ( zdarzenia_szukane_2 / zdarzenia_wszystkie )
`}      
<Comment>{`p = 0.112`}</Comment>
</Pre>

Prawdopodobieństwo wyrzucenia 6 jest takie same jak wyrzucenia 8.

            </Paragraph>
            <h3>Wracając do pierwszej reakcji </h3>

            <Paragraph>
                Zastanawiam się jeszcze jak przy pierwszej chwili usłyszenia o sposobie kumpla, utorowała się moja narracja,
                że w pierwszym momencie pomyślałem o tym, że kostki są oszukane. Moze czytałem za dużo książek o manipulacji i 
                mowie ciała i to zwiększyło prawdopodobieństwo że pomyślałem najpierw o tym że kostki oszukują ?
            </Paragraph>


        </>
    )
}


export default Post