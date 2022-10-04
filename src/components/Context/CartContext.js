import React, { createContext, useState } from 'react'
import { products } from '../../assests/products';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    const isInCart = (id) => cart.find(product => product.id === id)
    
    const addItem = (item, quantity) =>{
        if (isInCart(item.id)) {
            const newCart = cart.map(product =>{
                if(product.id === item.id) {
                    const newQuantity = product.quantity + quantity
                    return {...product, quantity: newQuantity}
                } else {
                    return product
                }
            })
            setCart(newCart)
        } else {
            const newProduct = {...item, quantity: quantity}
            setCart([...cart,newProduct])
        }

    }
    
    const removeItem = (id) => setCart(cart.filter(prod => prod.id != id))

    const clear = () => setCart([])

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, isInCart, clear }}>
            {children}
        </CartContext.Provider>
    )}

export default CartProvider;