
import { useNavigate } from "react-router-dom";
import * as style from "./style";

function Home(){
    const navigate = useNavigate()
    const name        = localStorage.getItem("@kenziehub:tokenName")
    const courseModule = localStorage.getItem("@kenziehub:tokenCourse_module")

    function removeAll(){
        localStorage.clear()
        navigate("/")
    }

    
    
    return(
        <style.HomeStyle>
            <header>
                <h1>Kenzie Hub</h1>
                <button onClick={removeAll} className="Sair" >Sair</button>
            </header>
            <div className="container_user">
                <h2>Olá, {name}</h2>
                <span >{courseModule}</span>
            </div>
            <div className="container_info">
                <h2>Que pena! Estamos em desenvolvimento :(</h2>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </div>
        </style.HomeStyle>
    )
}

export default Home