import { BsCartPlus } from 'react-icons/bs'


export function Description() {
  return (
    <div>
      <main className="md:flex-row flex flex-col justify-center gap-15 mt-15 w-full max-w-7xl px-4 mx-auto  ">
        <div className="w-full">
          <img
            className="w-full rounded-lg max-h-65 mb-2"
            src="https://edifier.com.br/pub/media/catalog/product/cache/f1731b22860b0086fc34e14d5ee03543/f/o/fone-bluetooth-on-ear.jpg"
            alt="Logo da iamgem"
          />
        </div>
        <div className='flex gap-3 flex-col'>
          <h1 className="font-medium mt-1 mb-2 text-2xl">Fone de ouvido JBL </h1>
          <span>A descrição é a enumeração das características próprias dos seres, coisas, cenários, ambientes, costumes, impressões etc. A visão, o tato, a audição, o olfato e o paladar constituem a base da descrição.</span>
          <div className='flex gap-2'>
            <strong>
              R$ 100,00
            </strong>
            <strong>
            <button className='bg-zinc-900 p1 rounded cursor-pointer'>
               <BsCartPlus size={20} color='#FFF'/>
             </button>
            </strong>
          </div>
        </div>
      </main>
    </div>
  );
}
