import { useState, useEffect } from 'react';
import { BsCartPlus } from 'react-icons/bs'

import { api } from "../../services/api"

interface ProdutoProps{
  id: string;
  title: string;
  description: string;
  price: number
  cover: string
}

export function Home() {
  const [products, setProducts] = useState <ProdutoProps[]>([])


  useEffect(() => {
    async function getProducts(){
      const response = await api.get("/products")
      setProducts(response.data)
    } 

    getProducts();
  }, [])

  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto">
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">
          Produtos em alta
        </h1>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5'>
         {products.map((item) => (
           <section key={item.id} className="w-full">
           <img
           className="w-full rounded-lg max-h-70 mb-2"
             src={item.cover}
             alt={item.title}
           />
           <p className="font-medium mt-1 mb-2">{item.title}</p>
           <div className='flex gap-3 items-center'>
             <strong className='text-zinc-700/90'>
             {item.price.toLocaleString("pt-Br",{
              style: "currency",
              currency: "BRL"
             })}
             </strong>
             <button className='bg-zinc-900 p1 rounded'>
               <BsCartPlus size={20} color='#FFF'/>
             </button>
           </div>
         </section>
         ))}
        </div>
      </main>
    </div>
  );
}
