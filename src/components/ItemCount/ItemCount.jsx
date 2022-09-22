import { useState } from "react"
import  styled  from "styled-components"


export const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(initial)

    const increase = () => count < stock && setCount(count + 1)
    const decrease = () => count > initial && setCount(count - 1)

    return (
        <ItemCountCnt>
            <button disabled={count === initial} onClick={()=>decrease()}>-</button>
            <h3>{count}</h3>
            <button disabled={count === stock} onClick={()=>increase()}>+</button>
            <button>AGREGAR</button>
        </ItemCountCnt>
    )
}

export default ItemCount 

const ItemCountCnt = styled.div`
display: flex;
flex-direction: row;
button{
    padding: 3px;
    border-radius: 10px;
    min-width: 20%;
    font-size: 0.7rem;
}
button:hover{
    transform: scale(1.1);
    transition: 400ms ease;
}


`