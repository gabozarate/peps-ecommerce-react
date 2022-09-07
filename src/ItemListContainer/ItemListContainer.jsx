import React from 'react'
import styled from 'styled-components'

const ItemListContainer = ({ greeting }) => {
  return (
    <TitleContainer>
      <h1>{greeting}</h1>
    </TitleContainer>
  )
}

export default ItemListContainer
const TitleContainer = styled.nav`
  h1{
    display: inline-block;
    margin-left: 9.8em ;
    padding-left: 1rem;
    padding-right: 1rem;
    align-items: center;
    justify-content: center;
    font-size: 3.5em;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: #80558C;
    background-color: #e4d1927b;
    border-bottom: 3px solid #80558C ;
    border-radius: 20px;
    box-shadow: 0px 5px 10px 1px #814bbb;

  }
`