import { Link } from "react-router-dom";

export function Notfound(){
    return(
        <div className="flex">
            <h1>Ops não encotrado...</h1>
            <Link to="/">
            Emcontre seu produto aqui!
            </Link>
        </div>
    )
}