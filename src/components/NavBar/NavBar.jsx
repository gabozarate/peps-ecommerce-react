
import React, { useState } from 'react'
import styled from 'styled-components'
import HomeBtn from '../HomeBtn/HomeBtn'


export const NavBar = () => {
  return (
    <>
      <NavContainer>
        <h2>MANJULA</h2>
        <div>
          <a href="/">Home</a>
          <a href="/">Shop</a>
          <a href="/">Sales</a>
          <a href="/">Contact</a>
          <a href="/">About</a>
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
h2{
  color: rgb(228, 209, 146);
  font-size: 2em;
  font-weight: 600;
}
padding: 2rem;
background-color: #80558C;
display: flex;
align-items: center;
justify-content: space-between;

a{
  color:rgb(228, 209, 146);
  font-size: 1.5em;
  text-decoration: none;
  margin-right: 1rem;
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