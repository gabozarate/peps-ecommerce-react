import React from 'react'
import { useState, useEffect } from 'react'
import { products } from '../../../assests/products'
import { ItemDetail } from '../../ItemDetail/ItemDetail';
import { Spinner } from '../../spinner/spinner';
import styled from 'styled-components';
import { db } from '../../firebase/firebase';
import { getDoc, doc, collection } from "firebase/firestore";
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

  const { IdProduc } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const prodCollection = collection(db, "products");
    const refDoc = doc(prodCollection, IdProduc);
    getDoc(refDoc)
      .then((result) => {
        setProduct(
          {
            id: result.id,
            ...result.data(),
          });
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
        console.log(product)
      })

  }, [IdProduc]);

  return (
    <ItemsCont>
      {
        loading ?
          <Spinner />
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