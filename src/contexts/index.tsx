import { createContext, ReactNode, useState } from "react";
import { ProdutoProps } from "../pages/Home";

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItemCart: (newItem: ProdutoProps) => void;
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

  function addItemCart(newItem: ProdutoProps) {
    const indexItem = cart.findIndex((item) => item.id === newItem.id); //posição do item

    if (indexItem !== -1) {
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount + 1;
      cartList[indexItem].total =
        cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList);
      return;
    }

    let data = {
      ...newItem,
      amount: 1,
      total: newItem.price,
    };

    setCart((products) => [...products, data]);
  }

  return (
    <CartContex.Provider
      value={{
        cart,
        cartAmount: cart.length,
        addItemCart,
      }}
    >
      {children}
    </CartContex.Provider>
  );
}

export default CartProvider;
