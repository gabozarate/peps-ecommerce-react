import {useState, useEffect, useContext} from 'react'
import { Link, useParams } from "react-router-dom"; 
import styled from "styled-components"
import { customFetch } from '../../assests/utils/customFetch'
import { ItemCount } from "../ItemCount/ItemCount"
import { products } from '../../assests/products'
import { CartContext } from '../Context/CartContext';


export const ItemDetail = ({product}) =>{
    
    const { cart, addItem } = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(product, quantity);
        setgoToCart(true)
    };

    const [goToCart, setgoToCart] = useState(false)
    

    return (
        <>
            {
                    <CardDetail>
                            <img className="cardImg" src={product.image} />
                        <Details>
                            <h2><h2 className="prodNameD">{product.brand}</h2> </h2>
                            <h2 className="prodNameD">{product.product}</h2>
                            <h3>{product.size}</h3>
                            <h3>${product.price}</h3>
                            <h4>Disponibles: {product.stock}</h4>
                            {
                                goToCart
                                    ? <><Link className='Link' to={'/cart'}>Finalizar Compra</Link><Link className='Link' to={'/'}>Seguir Comprando</Link></>
                                    : <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
                            }

                        <h4>{product.description}</h4>
                        </Details>
                    </CardDetail>
            }

        </>
    )
}

export default ItemDetail


const CardDetail = styled.div`
margin: auto;
width: 70%;
min-height: 20rem;
padding: 3rem;
display: flex;
flex-direction: row;
align-items: center;
text-align: center;
background-image: url(https://images.unsplash.com/photo-1603513492128-ba7bc9b3e143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=786&q=80);

.prodNameD {
    font-family: sans-serif;
}
img{
    margin-right: 1rem;
    width: 40%;
    min-height: 20%;
    border: #874356 3px solid;
    border-radius: 20px;
}
img:hover{
    box-shadow: 0px 5px 10px 1px #F68989;
    transform: scale(1.2);
    transition: 400ms ease;
}

h2{
    margin-top: 0.2rem;
    margin-bottom: 0.5rem;
    padding: 0.2rem;
    color: #F6E7D8;
    background-color: #C65D7B;
    font-size: 1em;

}
h3{
    margin: 0.2rem;
    margin-bottom: 1rem;
    font-size:1.2em ;
    text-decoration: #874356 underline;
}
h4{
    margin: 0.2rem;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    font-size: 0.8em;
}
.Link{
    margin-right: 1rem;
    margin-left: 1rem;
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

const Details = styled.div`
margin: auto;
padding: 1rem;
width: 70%;

`