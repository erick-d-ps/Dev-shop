import { useContext, useEffect, useState } from "react";
import { CartContex } from "../../contexts";
import { api } from "../../services/api";
import { Link, useParams } from "react-router-dom";
import {ProdutoProps} from '../Home'

import toast from "react-hot-toast";

import { BsCartPlus } from "react-icons/bs";

export function Description() {
  const {addItemCart} = useContext(CartContex)
  const { id } = useParams();
  const [product, setProduct] = useState<ProdutoProps>();

  useEffect(() => {
    async function getProduct() {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
    }

    getProduct();
  }, [id]);

  function handleAddCartItem(product: ProdutoProps){
    addItemCart(product)
    toast.success("Produto adiciona ao carrinho!")
  }

  return (
    <div>
        {product && (
      <main className="md:flex-row flex flex-col justify-center gap-15 mt-15 w-full max-w-7xl px-4 mx-auto  ">
          
            <div className="w-full">
              <img
                className="w-full rounded-lg max-h-65 mb-2"
                src={product?.cover}
                alt={product?.title}
              />
            </div>

            <div className="flex gap-3 flex-col">
              <h1 className="font-medium mt-1 mb-2 text-2xl">
                {product?.title}
              </h1>
              <span>
                {product?.description}
              </span>
              <div className="flex gap-2">
                <strong>{product?.price.toLocaleString("pt-BR", {style: "currency", currency:"BRL"})}</strong>
                <strong>
                  <Link to="/cart">
                  <button 
                  onClick={() => handleAddCartItem(product)}
                  className="bg-zinc-900 p1 rounded cursor-pointer">
                    <BsCartPlus size={20} color="#FFF" />
                  </button>
                  </Link>
                </strong>
              </div>
            </div>
          
      </main>
        )}
    </div>
  );
}
