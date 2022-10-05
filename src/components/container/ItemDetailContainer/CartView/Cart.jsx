import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../../Context/CartContext'; 
import styled from 'styled-components';



export const Cart = () => {

  const { cart, totalPrice, removeItem, clear } = useContext(CartContext);
  console.log(cart)

  return (
    <>
      {cart.map(prod =>
        <CardDetail>
              <CartImage>
                <img className="cardImg" src={prod.image} />
              </CartImage>
              <CartInfo>
                <h2><h2 className="prodNameD">{prod.brand}</h2> </h2>
                <h2 className="prodNameD">{prod.product}</h2>
                <h3>Cantidad: {prod.quantity}</h3>
                <h3>Talle: {prod.size}</h3>
                <h3>{prod.price}</h3>
                <button onClick={()=> removeItem(prod.id) } >QUITAR</button>
              </CartInfo>
       </CardDetail>
      )}
        <TotalInfo>
                <h2>Precio total: ${totalPrice()}</h2>
                <button onClick={clear}>VACIAR CARRITO</button>
        </TotalInfo>
    </>
  )
}

export default Cart


//contenedor carro
const CardDetail = styled.div`
margin: auto;
margin-top: 2rem;
width: 50%;
min-height: 10rem;
padding: 1rem;
display: flex;
flex-direction: row;
align-items: center;
text-align: center;
border: 2px solid  #874356  ;
background-image: url(https://images.unsplash.com/photo-1603513492128-ba7bc9b3e143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=786&q=80);`

//imagen carrito
const CartImage = styled.div`
margin-right: 10rem;
img{
    width: 100%;
    height: 20rem;
    border: #874356 3px solid;
    border-radius: 20px;
}
`
//info carrito
const CartInfo = styled.div`
.prodNameD {
    font-family: sans-serif;
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
button{
    margin: auto;
    padding: 5px;
    background-color: #C65D7B;
    border: 1px solid black;
    border-radius: 10px;
    height: 10%;
    text-decoration: none;
    color: white;
}
button:hover{
    cursor: pointer;
    background-color: #874356;
    box-shadow: 0px 1px 5px 1px #F68989;
    transition: 400ms ease;
}
`
const TotalInfo = styled.div`
display: flex;
flex-direction: column;
width: 40%;
margin: auto;
align-items: center;

h2{
  padding-left: 1rem;
  padding-right: 2rem;
  color: #F6E7D8;
  background-color: #C65D7B;
  border: #874356 2px solid ;
  border-radius: 10px;
}
button{
  margin: auto;
    padding: 5px;
    background-color: #C65D7B;
    border: 1px solid black;
    border-radius: 10px;
    width: 25%;
    height: 10%;
    text-decoration: none;
    color: white;
}
button:hover{
    cursor: pointer;
    background-color: #874356;
    box-shadow: 0px 1px 5px 1px #F68989;
    transition: 400ms ease;
}
`