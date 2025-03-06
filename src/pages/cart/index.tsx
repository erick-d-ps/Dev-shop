export function Cart() {
    return (
      <div className="w-full max-w-7xl px-2 mx-auto">
        <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>

        <section className="flex items-center justify-between border-b-2 border-gray-300">
          <img 
          src="https://lojaibyte.vteximg.com.br/arquivos/ids/427931-1200-1200/47304-1_47304.jpg?v=638496672672300000" 
          alt="Logo do produto"
          className="w-28"
          />
          <strong>Preço: R$300,00</strong>
          <div className="flex gap-3">
            <button className="bg-slate-600 px-2 rounded text-white font-medium flex  items-center justify-center" >
              -
            </button>
            1
            <button className="bg-slate-600 px-2 rounded text-white font-medium flex  items-center justify-center" >
              +
            </button>
          </div>
         <strong className="float-right">
          SubTotal: R$300,00
         </strong> 
        </section>
        <p className="font-bold mt-4">Total: R$300,00</p>
      </div>
    );
  }