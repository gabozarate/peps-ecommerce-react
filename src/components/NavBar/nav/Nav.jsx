import { style } from '@mui/system'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'



const Nav = ({ categories }) => {
  return (
    <nav>
      {categories.map((category) => {
        return <NavLink key={category.id} style={StyleSheet.links} to={category.ruta}>{category.nombre} </NavLink>
      })}
    </nav>
  );
};

export default Nav

