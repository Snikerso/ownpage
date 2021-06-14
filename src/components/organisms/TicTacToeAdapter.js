import React, { useState } from 'react';

const Board = ({state}) =>(state.map(item =>{
    return <div key={item.id}>{item.id}</div>
}))


const init = [{
    id:1, answer:0,
}]
const TicTacToeAdapter = () =>{
    const [adapterState, adapterDispatch] = useState(init)

    return <Board state={adapterState}/>
}

export default TicTacToeAdapter