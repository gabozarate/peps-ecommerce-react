import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ItemList } from '../components/ItemList'
import { products } from '../assests/products'
import { customFetch } from '../assests/utils/customFetch'
import { Spinner } from '../components/spinner/spinner'


const ItemListContainer = ({ greeting }) => {

  const [listProducts, setListProduts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    customFetch(products)
      .then(res => {
        setListProduts(res);
        setLoading(false)
      })
  }, [])

  return (
    <>

      <TitleContainer>
        <h1>{greeting}</h1>
      </TitleContainer>
      <ItemsCont>
        {
        loading  ?
        <Spinner/> 
        :  
        <ItemList listproducts={listProducts} />
        }
      </ItemsCont>

    </>
  )
}

export default ItemListContainer

const TitleContainer = styled.nav`
  h1{
    display: inline-block;
    margin-left: 10.5em ;
    padding-left: 1rem;
    padding-right: 1rem;
    align-items: center;
    justify-content: center;
    font-size: 3.5em;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: #874356;
    background-image: url(https://images.unsplash.com/photo-1555181937-efe4e074a301?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80);
    border-bottom: 3px solid #F68989 ;
    border-radius: 20px;
    box-shadow: 0px 5px 10px 1px #F68989;
  }
  background-image: url(https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80);
`
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