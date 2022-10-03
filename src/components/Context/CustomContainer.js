import React, { createContext, useState } from 'react'

export const Context = createContext();

export const CustomProvider = ({ children }) => {
    const [cart, setCart] = useState([{nombre: 'juan'}]);
    
    const addItem = (product, count) =>{
        console.log('añadir prod')
        console.log(product)
        console.log(count)
    }
    const deleteItem = (id) =>{
        console.log('borrar item')
    }
    const repeat = (id) => {
        console.log('no repetir items')
    }
    const reset = ()=> {
        setCart([])
    }

    return (
        <Context.Provider value={{ cart, addItem, deleteItem, repeat, reset }}>
            {children}
        </Context.Provider>
    )
}

export default CustomProvider;