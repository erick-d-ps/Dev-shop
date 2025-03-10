import { useContext } from 'react';

import {CartContex} from '../../contexts'
import { Link } from 'react-router-dom';

export function Cart() {
  const {cart} = useContext(CartContex);

    return (
      <div className="w-full max-w-7xl px-2 mx-auto">
        <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>

        {cart.length === 0 && (
          <div className='flex items-center justify-center flex-col'>
            <p className='font-medium'>Ops seu carrinho está vasio...</p>
            <Link 
            to="/"
            className='bg-slate-600 text-white rounded-md p-1 px-2 my-2'
            >
            Acessar produtos
            </Link>
          </div>
        )}

       {cart.map((item) => (
         <section key={item.id} className="flex items-center justify-between border-b-2 border-gray-300">
         <img 
         src={item.cover}
         alt={item.title}
         className="w-28"
         />
         <strong>{item.price.toLocaleString("pt-BR", {
          style:"currency",
          currency: "BRL"
         })}</strong>
         <div className="flex gap-3">
           <button className="bg-slate-600 px-2 rounded text-white font-medium flex  items-center justify-center" >
             -
           </button>
           {item.amount}
           <button className="bg-slate-600 px-2 rounded text-white font-medium flex  items-center justify-center" >
             +
           </button>
         </div>
        <strong className="float-right">
         SubTotal: {item.total.toLocaleString("pt-Br", {
          style:"currency",
          currency: "BRL"
         })}
        </strong> 
       </section>
       ))}


        {cart.length !== 0 && <p className="font-bold mt-4">Total: R$300,00</p>}
      </div>
    );
  }