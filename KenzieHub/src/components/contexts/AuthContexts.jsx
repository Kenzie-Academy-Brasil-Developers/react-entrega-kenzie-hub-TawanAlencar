import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { toastAcess, toastError } from "../../services/toastify";

export const AuthContexts = createContext({});

function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [lista, setLista] = useState([])
    
    useEffect(()=>{
        async function listTech(){
            const token = localStorage.getItem("@kenziehub:token");
            const list = await api.get("profile",{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setLista(list.data.techs)
        }

        listTech()
    },[])

    async function submitForm(data) {
        await api
        .post("sessions", data)
        .then((res) => {
            localStorage.setItem("@kenziehub:token", res.data.token);
            localStorage.setItem("@kenziehub:tokenID", res.data.user.id);
            localStorage.setItem("@kenziehub:tokenName", res.data.user.name);
            localStorage.setItem(
            "@kenziehub:tokenCourse_module",
            res.data.user.course_module
            );

            if (res.data.token) {
            navigate("home");
            toastAcess("Login realizado com sucesso");
            }
        })

        .catch((error) => {
            toastError(error.response.data.message);
        });
    }

    async function registerUser(data) {
        await api
        .post("users", data)
        .then((res) => {
            if (res) {
                navigate("/");
                toastAcess("Cadastrado realizado com sucesso");
            }
        })
        
        .catch((error) => {
            toastError(error.response.data.message);
        });
    }

    function removeAll() {
        localStorage.clear();
        navigate("/");
    }

    async function addTech(data){
        const token = localStorage.getItem("@kenziehub:token");
        const techs = await api.post("users/techs",data,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            if (res) {
                toastAcess("Cadastrado realizado com sucesso");
                setTimeout(() => {
                    window.location.reload();
                },2000)
            }
        })
        .catch((error) => {
            toastError("Algo deu errado");
        });
        
    }

    async function deleteTech(id){
        const token = localStorage.getItem("@kenziehub:token");
        const deletar  = await api.delete(`users/techs/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            } 
        })

        .then(res=>{
            toastAcess("Deletado com sucesso");
            setTimeout(() => {
                window.location.reload();
            },2000)
        })
        .catch((error)=>{
            toastError("Algo deu errado")
        })

    }
    

    return (
        <AuthContexts.Provider
         value=
         {{ submitForm, registerUser, removeAll,lista,addTech,deleteTech}}>
            {children}
        </AuthContexts.Provider>
    );
}

export default AuthProvider;
