import * as style from "./style";
import { FormStyle } from "../Form/style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toastAcess, toastError } from "../../services/toastify";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

function Register(){
    const navigate   = useNavigate()

    const formSchema = yup.object({
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        password: 
        yup.string().required("Senha obrigatória")
        .matches(/^(?=.[A-Za-z])(?=.[0-9])(?=.*[!@#$%^&*])/, 
        "A senha deve possuir no mínimo 8 caracteres, ter no mínimo uma letra maiscúla e uma letra minuscúla e um caractere especial"),
        confirmPass: yup.string().required("Senha obrigatória").oneOf([yup.ref("password")],"As senhas precisam ser iguais"),
        name: yup.string().required("Nome obrigatório"),
        bio: yup.string().required("Bio obrigatória"),
        contact: yup.string().required("Contato obrigatório").matches(/^([0-9]{2})([0-9]{4,5})([0-9]{4})$/, "Digite um número válido"),
        course_module: yup.string().required("Selecione seu módulo")
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    function submitForm(data) {
        api
        .post("users", data)
        .then((res) => {
            localStorage.setItem("@kenziehub:token", res.data.token)
            if(res.data.token){
                navigate("/")
                toastAcess("Cadastrado realizado com sucesso");
            }
        })
    
        .catch((error) => {
            toastError(error.response.data.message);
        });
    }

    return(
        <style.RegisterStyle>
            <header>
                <h1>Kenzie Hub</h1>
                <Link className="button_voltar" to={"/"}>Voltar</Link>
            </header>
            <div className="container_form">
                <FormStyle onSubmit={handleSubmit(submitForm)}>
                    <h2>Crie sua conta</h2>
                    <span>Rápido e grátis,vamos nessa</span>
                    <label htmlFor="">Nome</label>
                    <input 
                    type="text" 
                    {...register("name")}
                    placeholder="Digite aqui seu nome"
                    />
                    {errors.name?.message}
                    <label htmlFor="">Email</label>
                    <input 
                    type="text" 
                    placeholder="Digite aqui seu email"
                    {...register("email")}
                    />
                    {errors.email?.message}
                    <label htmlFor="">Senha</label>
                    <input 
                    type="text" 
                    placeholder="Digite aqui sua senha" 
                    {...register("password")}
                    />
                    {errors.password?.message}
                    <label htmlFor="">Confirmar Senha</label>
                    <input 
                    type="text"
                    {...register("confirmPass")}
                    placeholder="Confirme aqui sua senha" 
                    />
                    {errors.confirmPass?.message}

                    <label htmlFor="">Bio</label>
                    <input 
                    type="text" 
                    placeholder="Fale sobre você"
                    {...register("bio")}
                    />

                    {errors.bio?.message}
                    <label htmlFor="">Contato</label>
                    <input 
                    type="text" 
                    placeholder="Opção de contato"
                    {...register("contact")}
                    />
                    {errors.contact?.message}

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