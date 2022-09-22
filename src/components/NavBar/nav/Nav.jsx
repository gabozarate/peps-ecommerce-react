import { style } from '@mui/system'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const categorias = [
    {id: 0, nombre: 'arrivals', ruta:'/categoria/destacados'},
    {id: 1, nombre: 'on sale', ruta:'/categoria/sales'},
    {id: 2, nombre: 'men', ruta:'/categoria/men'},
    {id: 3, nombre: 'women', ruta:'/categoria/women'}
];

const Nav = ({categorias}) => {
  return (
    <nav>
        {categorias.map((categoria) => {
            return <Link>key={categoria.id} style={StyleSheet.links} to={categoria.ruta} > {categoria.nombre}  </Link>
        })}

        )
    </nav>
  );
};

export default Nav