
import React, { useState } from 'react'
import styled from 'styled-components'
import HomeBtn from './HomeBtn/HomeBtn'
import CartWid from './CartWidget/CartWid'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
      <NavContainer>
        <h2 href="/">Pep`s</h2>
        <div>
          <Link to={"/"}>Arrivals</Link>
          <Link to={"/"}>Sales</Link>
          <Link to={"/"}>Men</Link>
          <Link to={"/"}>Women</Link>
        </div>
        <div className='cart' href="/">
        <CartWid/>
        </div>
        <div className='Hbtn'>
          <HomeBtn />
        </div>
      </NavContainer>

    </>
  )
}

export default NavBar

const NavContainer = styled.nav`
.cart{
  color: #F6E7D8;
  border-radius: 10px;

}
.cart:hover{
  cursor: pointer;
  color: #874356;
  transition: 400ms ease;
}
h2{
  margin: 0.5rem;
  padding: 0.5rem;
  color: #874356;
  border: #F5F0BB;
  border-radius: 20px;
  background-color: #F6E7D8;
  box-shadow: 0px 3px 5px 1px #874356;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 3.5em;
  font-weight: 600;
}
h2:hover{
  cursor: pointer;
  border: #AF7AB3;
  border-radius: 20px;
  color: #F6E7D8;
  background-color: #af7ab336;
  box-shadow: 0px 3px 5px 1px #F6E7D8;
  transition: 800ms ease;
}
padding: 1rem;
background-color: #C65D7B;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

a{
  color: #F6E7D8;
  font-size: 1.5em;
  text-decoration: none;
  margin-right: 2rem;
}
a:hover{
  color: #874356;
  transition: 400ms ease;
}
.links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }

.Hbtn{
  @media(min-width: 768px){
    color: #F5F0BB;
      display: none;
    }
  }
  
`