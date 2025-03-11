import { createContext, ReactNode, useState } from "react";
import { ProdutoProps } from "../pages/Home";

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItemCart: (newItem: ProdutoProps) => void;
  removeItemCart: (item: CartProps) => void;
  total: string;
}

interface CartProps {
  id: string;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContex = createContext({} as CartContextData);

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([]);
  const [total, setTotal] = useState("")

  function addItemCart(newItem: ProdutoProps) {
    const indexItem = cart.findIndex((item) => item.id === newItem.id); //posição do item

    if (indexItem !== -1) {
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount + 1;
      cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList);
      totalResultCart(cartList)
      return;
    }

    let data = {
      ...newItem,
      amount: 1,
      total: newItem.price,
    };

    setCart((products) => [...products, data]);
    totalResultCart([...cart, data])
  }

  function removeItemCart(item: CartProps){
    const indexItem = cart.findIndex(product => product.id === item.id)


    if(cart[indexItem]?.amount > 1){
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount -1;
      cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price

      setCart(cartList);
      totalResultCart(cartList);
      return
    }

    const removeItem = cart.filter(product => product.id !== item.id)
    setCart(removeItem);
    totalResultCart(removeItem);
  }


  function totalResultCart(items: CartProps[]){
    let myCart = items;
    let result = myCart.reduce((acc, obj)=> {return acc + obj.total}, 0)
    const resulFormated = result.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
    setTotal(resulFormated);
  }

  return (
    <CartContex.Provider
      value={{
        cart,
        cartAmount: cart.length,
        addItemCart,
        removeItemCart,
        total,
      }}
    >
      {children}
    </CartContex.Provider>
  );
}

export default CartProvider;
