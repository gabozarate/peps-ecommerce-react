import React from 'react'
import { useState, useEffect } from 'react'
import { products } from '../../../assests/products'
import { ItemDetail } from '../../ItemDetail/ItemDetail';
import { Spinner } from '../../spinner/spinner';
import  styled  from 'styled-components';
import { customFetch } from '../../../assests/utils/customFetch';

const ItemDetailContainer = () => {


const [product, setProduct] = useState ([]);
const [loading, setLoading] = useState({});

useEffect(() => {
  customFetch(products)
    .then((res) => {
    setProduct(res);
    setLoading(false);
  })
}, [])

return (
  <ItemsCont>
  {
  loading  ?
  <Spinner/> 
  :  
  <ItemDetail product={product} />
  }
</ItemsCont>
)
}

export default ItemDetailContainer

const ItemsCont = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%,15rem), 1fr)) ;
    grid-auto-flow: dense;
    grid-template-rows: auto;
    justify-content: center;
    margin: auto;
    padding: 2rem;
    background-image: url(https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80);
    background-size: cover repeat none;
  
`