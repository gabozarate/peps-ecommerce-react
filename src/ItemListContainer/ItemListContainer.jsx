import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ItemList } from '../components/ItemList'
import { products } from '../assests/products'
import { customFetch } from '../assests/utils/customFetch'
import { Spinner } from '../components/spinner/spinner'
import { useParams } from 'react-router-dom'




const ItemListContainer = ({ greeting }) => {

  let { IdCateg } = useParams();

  const [listProducts, setListProduts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    customFetch(products)
      .then(res => {
        setListProduts(res);
        setLoading(false)
        if (IdCateg) {
          const categories = products.filter(products => products.category === IdCateg)
          setListProduts(categories)
        }
        else {
          setListProduts(products)
        }
        // setListProduts(res);
        // setLoading(false)
      })
  }, [IdCateg])

  return (
    <>

      <TitleContainer>
        <h1>{greeting}</h1>
      </TitleContainer>
      <ItemsCont>
        {
          loading ?
            <Spinner />
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
    display: flex;
    width: 30%;
    height: 3rem;
    margin: auto;  
    margin-top  :1rem ;
    padding-left: 1rem;
    padding-right: 1rem;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: #874356;
    background-image: url(https://images.unsplash.com/photo-1555181937-efe4e074a301?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80);
    border-bottom: 3px solid #F68989 ;
    border-radius: 20px;
    box-shadow: 0px 5px 10px 1px #F68989;
  }
 
`
const ItemsCont = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%,15rem), 1fr)) ;
    grid-auto-flow: dense;
    grid-template-rows: auto;
    justify-content: center;
    margin: auto;
    padding: 2rem;
   
    background-size: cover repeat none;
  
`