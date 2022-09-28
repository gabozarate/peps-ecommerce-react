import { Link } from "react-router-dom"
import styled from "styled-components"
import ItemDetail from "../ItemDetail/ItemDetail"



const Item = ({product}) =>{
    const handleClick = (product) => {
        //console.log(product)
        <ItemDetail product = {product} />
    }
    //console.log(product)
    return (
       <>
       <Card>
       <img className="cardImg" src={product.image} />
       <h2 className="prodName">{product.product}</h2>
       <h3>{product.size}</h3>
       <h3>{product.price}</h3>
       <h4>Disponibles: {product.stock}</h4>
       <Link className="Link" to={`/product/${product.id}`} element ={<ItemDetail/>}>DETALLES</Link>
       </Card>
       </>
    )
}
export {Item}

const Card = styled.div`
max-width: 70%;
min-width: 20%;
margin: 10px;
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
.Link{
    margin: 2rem;
    width: 40%;
    border: #874356 2px solid;
    background-color: #C65D7B;
    color: #F6E7D8;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: small;
    text-decoration: none;
}
.Link:hover{
    cursor: pointer;
    background-color: #874356;
    box-shadow: 0px 5px 10px 1px #F68989;
    transition: 400ms ease ;
}
`