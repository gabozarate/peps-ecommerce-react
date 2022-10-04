import { useState } from "react"
import { Link } from "react-router-dom"
import  styled  from "styled-components"


export const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(initial)

    const increase = () => count < stock && setCount(count + 1)
    const decrease = () => count > initial && setCount(count - 1)

    return (
        <ItemCountCnt>
            <h3>Agregar: {count}</h3>
            <div className="btns">
                <button disabled={count === initial} onClick={() => decrease()}>-</button>
                <button disabled={count === stock} onClick={() => increase()}>+</button>
                <button className="Link" disabled={stock <= 0} onClick={() => onAdd(count)}>COMPRAR</button>
            </div>
        </ItemCountCnt>
    )
}

export default ItemCount 

const ItemCountCnt = styled.div`
margin:auto;
margin-top: 3rem;
display: flex;
flex-direction: column;
align-items: center;

.btns{
    display: flex;
    flex-direction: row;
button{
    margin-right: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 10px;
    width: 100%;
    font-size: 0.8rem;
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
    padding: 0.5rem;
    background-color: #C65D7B;
    border: 1px solid black;
    border-radius: 10px;
    width: 100%;
    height: 10%;
    font-size: 0.8rem; 
    text-decoration: none;
    color: white;
}
.Link:hover{
    background-color: #874356;
    box-shadow: 0px 1px 5px 1px #F68989;
    transition: 400ms ease;
}
}
h3{
    margin: auto;
    margin-bottom: 1rem;
}

`