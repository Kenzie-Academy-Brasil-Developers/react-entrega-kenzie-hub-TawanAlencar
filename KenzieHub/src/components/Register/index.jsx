import * as style from "./style";
import { FormStyle } from "../Form/style";

function Register(){
    return(
        <style.RegisterStyle>
            <header>
                <h1>Kenzie Hub</h1>
                <button>Voltar</button>
            </header>
            <div className="container_form">
                <FormStyle>
                    <h2>Crie sua conta</h2>
                    <span>Rápido e grátis,vamos nessa</span>
                    <label htmlFor="">Nome</label>
                    <input type="text" placeholder="Digite aqui seu nome"/>
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="Digite aqui seu email"/>
                    <label htmlFor="">Senha</label>
                    <input type="password" placeholder="Digite aqui sua senha" />
                    <label htmlFor="">Confirmar Senha</label>
                    <input type="password" placeholder="Confirme aqui sua senha" />
                    <label htmlFor="">Bio</label>
                    <input type="text" placeholder="Fale sobre você"/>
                    <label htmlFor="">Contato</label>
                    <input type="text" placeholder="Opção de contato"/>
                    <p>Selecionar módulo</p>
                    <select name="" id="">
                        <option value="Primeiro módulo (Introdução ao Frontend">Primeiro Módulo</option>
                        <option value="Segundo módulo (Frontend Avançado)">Segundo Módulo</option>
                        <option value="Terceiro módulo (Introdução ao Backend)">Terceiro Módulo</option>
                        <option value="Quarto módulo (Backend Avançado)">Quarto Módulo</option>
                    </select>
                    <button type="submit" id="cadastrar">Cadastrar</button>
                </FormStyle>
            </div>

        </style.RegisterStyle>
    )
}

export default Register