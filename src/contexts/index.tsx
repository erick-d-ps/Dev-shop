import { createContext, ReactNode, useState } from "react"

interface CartContextData{
   cart: CartProps[];
   cartAmount: number;
}

interface CartProps{
    id: string;
    title: string;
    description: string;
    price: number;
    cover: string;
    amount: number;
    total: number;
}

interface CartProviderProps{
    children: ReactNode
}

export const CartContex = createContext({} as CartContextData)


function CartProvider({children}: CartProviderProps){

    const [cart, setCart] = useState<CartProps[]>([])


    return(
       <CartContex.Provider value={{ cart, cartAmount: cart.length }}>
        {children}
       </CartContex.Provider>
    )
}

export default CartProvider;