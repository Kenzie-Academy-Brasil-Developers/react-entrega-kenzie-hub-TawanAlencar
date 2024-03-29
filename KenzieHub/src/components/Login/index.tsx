import * as Style from "../Form/style";
import * as yup from "yup";
import * as style from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContexts } from "../contexts/AuthContexts";


function Login() {
    const {submitForm} = useContext(AuthContexts)

    const formSchema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        password: yup.string().required("Senha obrigatória"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    
    return (
        <style.LoginStyle>
        <header>
            <h1>Kenzie Hub</h1>
        </header>
        <div className="container_form">
            <Style.FormStyle onSubmit={handleSubmit(submitForm)}>
                <h2>Login</h2>
                <label htmlFor="">Email</label>
                <input
                    type="text"
                    {...register("email")}
                    placeholder="Digite aqui seu email"
                />
                {errors.email?.message}
                <label htmlFor="">Senha</label>
                <input
                    type="password"
                    {...register("password")}
                    placeholder="Digite aqui sua senha"
                />
                {errors.password?.message}
                <button type="submit" className="entrar" id="entrar">
                    Entrar
                </button>
                <div className="ir_cadastro">
                    <span>Ainda não possui uma conta?</span>
                    <Link
                    to={"register"}
                    className="ir_cadastro_button"
                    id="ir_cadastro"
                    >
                    Cadastre-se
                    </Link>
                </div>
            
       
            </Style.FormStyle>
        </div>
        </style.LoginStyle>
    );
    }

export default Login;
