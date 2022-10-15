import * as style from "./style";
import { FormStyle } from "../Form/style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { AuthContexts } from "../contexts/AuthContexts";
import { useContext } from "react";


function Register(){
    const {registerUser} = useContext(AuthContexts)

    const formSchema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        password: 
        yup.string().required("Senha obrigatória")
        .matches(/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/, 
        "A senha deve possuir no mínimo 8 caracteres, ter no mínimo uma letra maiscúla e uma letra minuscúla e um caractere especial"),
        confirmPass: yup.string().required("Senha obrigatória").oneOf([yup.ref("password")],"As senhas precisam ser iguais"),
        name: yup.string().required("Nome obrigatório"),
        bio: yup.string().required("Bio obrigatória"),
        contact: yup.string().required("Contato obrigatório"),
        courseModule: yup.string().required()
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    function submit({email,password,contact,name,bio,courseModule}){
        const data = {
            email,password,contact,name,bio,course_module: courseModule
        }
        registerUser(data) 

    }

    return(
        <style.RegisterStyle>
            <header>
                <h1>Kenzie Hub</h1>
                <Link className="button_voltar" to={"/"}>Voltar</Link>
            </header>
            <div className="container_form">
                <FormStyle onSubmit={handleSubmit(submit)}>
                    <h2>Crie sua conta</h2>
                    <span>Rápido e grátis,vamos nessa</span>
                    <label htmlFor="Nome">Nome</label>
                    <input 
                    type="text" 
                    {...register("name")}
                    placeholder="Digite aqui seu nome"
                    />
                    {errors.name?.message}
                    <label htmlFor="Email">Email</label>
                    <input 
                    type="text" 
                    placeholder="Digite aqui seu email"
                    {...register("email")}
                    />
                    {errors.email?.message}
                    <label htmlFor="Senha">Senha</label>
                    <input 
                    type="password" 
                    placeholder="Digite aqui sua senha" 
                    {...register("password")}
                    />
                    {errors.password?.message}
                    <label htmlFor="Confirmar Senha">Confirmar Senha</label>
                    <input 
                    type="password"
                    {...register("confirmPass")}
                    placeholder="Confirme aqui sua senha" 
                    />
                    {errors.confirmPass?.message}

                    <label htmlFor="Bio">Bio</label>
                    <input 
                    type="text" 
                    placeholder="Fale sobre você"
                    {...register("bio")}
                    />

                    {errors.bio?.message}
                    <label htmlFor="Contato">Contato</label>
                    <input 
                    type="text" 
                    placeholder="Opção de contato"
                    {...register("contact")}
                    />
                    {errors.contact?.message}

                    <p>Selecionar módulo</p>
                    <select   {...register("courseModule")} >
                        <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro Módulo</option>
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