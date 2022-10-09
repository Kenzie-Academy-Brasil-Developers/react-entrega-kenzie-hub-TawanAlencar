import { FormStyle } from "../Form/style";
import * as style from "./style";

function Login(){
    return(
        <style.LoginStyle>
            <header>
                <h1>Kenzie Hub</h1>
            </header>
            <div className="container_form">
                <FormStyle>
                    <h2>Login</h2>
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="Digite aqui seu email"/>
                    <label htmlFor="">Senha</label>
                    <input type="password" placeholder="Digite aqui sua senha" />
                    <button type="submit" id="entrar">Entrar</button>
                    <div className="ir_cadastro">
                        <span>Ainda não possui uma conta?</span>
                        <button type="submit" id="ir_cadastro">Cadastre-se</button>
                    </div>
                </FormStyle>
            </div>

        </style.LoginStyle>

    )
}

export default Login