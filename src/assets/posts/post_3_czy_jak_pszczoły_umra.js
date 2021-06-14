import React from 'react'
import styled from 'styled-components'
import {Pre, Paragraph, Comment} from 'components/atoms/post_components/PostComponents'






const Post= () =>{

    return (
        <>
            <h3>Czy jak pszczoły umrą to ludzkość wyginie</h3>

            <Paragraph>
                Ten temat jest podobny do efektu mandeli gdzie nie pytasz kogoś czy 
                Tutaj jest podobnie ale efekt mandeli jest połączyny z efektem 
            </Paragraph>

            <Pre>
            {`
uczniowie = ["Alicja"]
            
def wyszukiwanie_binarne(lista, cel):`} <Comment>{`# dsadsa`}</Comment>
    {`
    pass `} <Comment>{`# dsadsa`}</Comment>
            {`
uczniowie = ["Alicja"]
            
def wyszukiwanie_binarne(lista, cel):`} <Comment>{`# dsadsa`}</Comment>
    {`
    pass `} <Comment>{`# dsadsa`}</Comment>

            </Pre>
        </>
    )
}


export default Post