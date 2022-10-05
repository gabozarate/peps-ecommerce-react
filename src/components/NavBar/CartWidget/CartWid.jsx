import React from 'react'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext';
import styled from 'styled-components';

const CartWid = () => {

  const { totalQuantity } = useContext(CartContext);

  return (
    <>
      <Quantity>
      <LocalMallOutlinedIcon sx={{ fontSize: 45 }} />
        <h4>{totalQuantity()}</h4>
      </Quantity>
    </>

  )
}

export default CartWid

const Quantity = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin: auto;

h4{
  font-size: 2rem;
  margin-left: 1rem;
}
`