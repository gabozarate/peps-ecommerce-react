import { useState } from "react"
import { Link } from "react-router-dom"
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
            <button  className="Link" disabled={stock <= 0} onClick={()=> onAdd(count)}>AGREGAR</button>
        </ItemCountCnt>
    )
}

export default ItemCount 

const ItemCountCnt = styled.div`
margin-left: 14rem;
margin-top: 3rem;
display: flex;
align-items: center;

button{
    margin-right: 1rem;
    padding: 3px;
    border-radius: 10px;
    width: 10%;
    font-size: 1rem;
    border: #874356 2px solid;
    background-color: #C65D7B;
    color: #F6E7D8;
}
button:hover{
    cursor: pointer;
    background-color: #874356;
    box-shadow: 0px 1px 5px 1px #F68989;
    transition: 400ms ease;
}
.Link{
    padding: 3px;
    background-color: #C65D7B;
    border: 1px solid black;
    border-radius: 10px;
    width: 25%;
    height: 10%;
    font-size: 1rem; 
    text-decoration: none;
    color: white;
}
.Link:hover{
    background-color: #874356;
    box-shadow: 0px 1px 5px 1px #F68989;
    transition: 400ms ease;
}
`