import React from 'react'
import { useState, useEffect } from 'react'
import { products } from '../../../assests/products'
import { ItemDetail } from '../../ItemDetail/ItemDetail';
import { Spinner } from '../../spinner/spinner';
import  styled  from 'styled-components';


const ItemDetailContainer = () => {
 
  const getItem = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
        resolve(products[1])
        }, 2000)
    })
}

const [product, setProduct] = useState ([]);
const [loading, setLoading] = useState({});

useEffect(() => {
 getItem(products[1])
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
`