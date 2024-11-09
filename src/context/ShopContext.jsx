import React, { createContext, useState } from "react";
import all_products from '../assets/all_product'

export const ShopContext = createContext(null)
const getDefaultCart =()=>{
    let cart = {}
    for (let index = 0; index < all_products.length; index++) {
        cart[index] = 0
        }
        return cart
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())
    
    const addToCart =(itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
        
    }

    const getTotalCartAmount =()=>{
        let amount = 0
        for(const item in cartItems){
            if (cartItems[item]>0) {
                let itemInfo = all_products.find((product)=>product.id===Number(item))
                amount+= itemInfo.new_price* cartItems[item]
            }
            return amount
        }
    }
    
    const removeFromCart =(itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }

const getTotalCartItems =()=>{
    let total = 0;
    for( const item in cartItems){
        if (cartItems[item]>0) {
            total+= cartItems[item]
        }
    }
    return total
}

    const contextValue = {getTotalCartAmount,all_products , cartItems, addToCart ,removeFromCart, getTotalCartItems}
    
    return (
        <ShopContext.Provider value={contextValue}>
{props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;