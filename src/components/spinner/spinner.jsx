import React from 'react'
import styled from 'styled-components'

export const Spinner = () => {
  return (
    <>
    <SpinnerCont>
    <h1>. . .CARGANDO PRODUCTOS. . .</h1>
    </SpinnerCont>
    </>
  )
}

const SpinnerCont = styled.div`
h1{
    display: flex;
    width: 40%;
    margin: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: #F6E7D8;
    background-color: #874356;
    border: 3px solid #F68989 ;
    border-radius: 20px;
    box-shadow: 0px 5px 10px 1px #F68989;
  
}
`

