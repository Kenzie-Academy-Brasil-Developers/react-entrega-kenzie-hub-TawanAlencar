
import * as style from "./style";

function Home(){
    return(
        <style.HomeStyle>
            <header>
                <h1>Kenzie Hub</h1>
                <button className="Sair" >Sair</button>
            </header>
            <div className="container_user">
                <h2>Olá, Pessoa</h2>
                <span>Primeiro módulo  (Introdução ao Frontend)</span>
            </div>
            <div className="container_info">
                <h2>Que pena! Estamos em desenvolvimento :(</h2>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </div>
        </style.HomeStyle>
    )
}

export default Home