import { Link } from "react-router-dom";

export function Notfound(){
    return(
        <div className="flex items-center justify-center flex-col gap-3 mt-7">
            <h1 className="font-medium mt-1 mb-2 text-2xl"> Não encotrado...</h1>
            <Link 
            className="bg-slate-600 text-white rounded-md p-1 px-2 my-2"
            to="/">
            Emcontre seu produto aqui!
            </Link>
        </div>
    )
}