import { useState } from "react"
import { Styled } from "styled-components"


export const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(initial)

    const increase = () => count < stock && setCount(count + 1)
    const decrease = () => count > initial && setCount(count - 1)

    return (
        <div>
            <button disabled={count === initial} onClick={()=>decrease()}>-</button>
            <h3>{count}</h3>
            <button disabled={count === stock} onClick={()=>increase()}>+</button>
            <button>AGREGAR A CARRITO</button>
        </div>
    )
}

export default ItemCount 