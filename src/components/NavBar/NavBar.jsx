
import React, { useState } from 'react'
import styled from 'styled-components'
import HomeBtn from './HomeBtn/HomeBtn'
import CartWid from './CartWidget/CartWid'


export const NavBar = () => {
  return (
    <>
      <NavContainer>
        <h2 href="/">MANJULA</h2>
        <div>
          <a href="/">Shop</a>
          <a href="/">Sales</a>
          <a href="/">Contact</a>
          <a href="/">About</a>
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
  color: rgb(228, 209, 146);
}
.cart:hover{
  cursor: pointer;
  color: #AF7AB3;
  transition: 400ms ease;
}
h2{
  margin: 0.5rem;
  padding: 0.5rem;
  color: rgb(228, 209, 146);
  border: #80558C 0.5px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 3.5em;
  font-weight: 600;
}
h2:hover{
  cursor: pointer;
  border: #AF7AB3;
  border-radius: 20px;
  color: rgb(228, 198, 99);
  background-color: #af7ab336;
  box-shadow: 0px 10px 10px 1px #814bbb;
  transition: 800ms ease;
}
padding: 1rem;
background-color: #80558C;
display: flex;
align-items: center;
justify-content: space-between;

a{
  color:rgb(228, 209, 146);
  font-size: 1.5em;
  text-decoration: none;
  margin-right: 2rem;
}
a:hover{
  color: #AF7AB3;
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
.links.active{
  width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
.Hbtn{
  @media(min-width: 768px){
      display: none;
    }
  }
  
`