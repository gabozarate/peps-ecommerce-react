import styled from "styled-components"
// import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({product}) =>{

    return (
       <>
       <Card>
       <img className="cardImg" src={product.image} />
       <h2 className="prodName">{product.product}</h2>
       <h3>{product.size}</h3>
       <h3>{product.price}</h3>
       <h4>Disponibles: {product.stock}</h4>
       </Card>
       </>
    )
}

export default ItemDetail

const Card = styled.div`
margin: 10px;
width: 70%;
padding: 0.5rem;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
background-image: url(https://images.unsplash.com/photo-1555181937-efe4e074a301?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80);


.prodName {

    font-family: sans-serif;
}
img{

    margin: 1rem;
    width: 95%;
    max-height: 20rem;
    border: #874356 3px solid;
    border-radius: 20px;
}
h2{
    margin-top: 0.2rem;
    margin-bottom: 0.5rem;
    padding: 1rem;
    color: #F6E7D8;
    background-color: #C65D7B;
    font-size: 1.5em;

}
h3{
    margin: 0.2rem;
}
h4{
    margin: 0.2rem;
}
button{
    margin: 2rem;
    width: 40%;
    height: 2rem;
    border: #874356 2px solid;
    background-color: #C65D7B;
    color: #F6E7D8;
}
button:hover{
    cursor: pointer;
    background-color: #874356;
    box-shadow: 0px 5px 10px 1px #F68989;
    transition: 400ms ease ;
}
`