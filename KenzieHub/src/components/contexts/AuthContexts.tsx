import { createContext, ReactNode, useEffect, useState,Dispatch,SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { toastAcess, toastError } from "../../services/toastify";


interface IAuthContexts{
    submitForm(data:data):Promise<void>
    registerUser(data:data):Promise<void>
    removeAll():void
    addTech(data:data):Promise<void>
    deleteTech(id:id):Promise<void>
    user: IUser |null
    techs: ITechs[]
    setUser: IUser|object
    openModal:boolean | null
    setOpenModal:Dispatch<SetStateAction<boolean | null>>
}

export const AuthContexts = createContext<IAuthContexts>({} as IAuthContexts);
type data  = object
type id = string 

interface IAuthProvider{
    children: ReactNode
}
interface IUser{
    name: string 
    course_module: string
}

interface ITechs{
    title: string,
    status:string,
    id:string 
}
interface IData{
    techs: ITechs[],
    name: string,
    course_module: string
}

function AuthProvider({ children }:IAuthProvider) {
    const navigate = useNavigate();
    const [user, setUser] = useState<IUser| null>(null);
    const [openModal, setOpenModal] = useState<null|boolean>(null);
    const [techs, setTechs] = useState<ITechs[]>([]);
    

    useEffect(() => {
        async function listTech():Promise<void> {
            const token = localStorage.getItem("@kenziehub:token");
            const { data } = await api.get<IData>("profile", {
                headers: { Authorization: `Bearer ${token}` }
            });
            const { techs, name, course_module } = data
            setTechs(techs);
            setUser({
                name: name,
                course_module: course_module
            })
            if(token){
                navigate("home")
            }
        }
        listTech();
    }, []);

    async function submitForm(data:data):Promise<void> {
        await api
        .post("sessions", data)
        .then((res) => {
            localStorage.setItem("@kenziehub:token", res.data.token);
            localStorage.setItem("@kenziehub:tokenID", res.data.user.id);
            setTechs(res.data.user.techs)
            setUser(res.data.user);
            navigate("home");
            toastAcess("Login realizado com sucesso");
            
        })

        .catch((error) => {
            toastError(error.response.data.message);
        });
    }
    

    async function registerUser(data:data):Promise<void> {
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

    function removeAll():void {
        localStorage.clear();
        navigate("/");
    }

    async function addTech(data:data):Promise<void> {
        try {
            const token = localStorage.getItem("@kenziehub:token");
            await api.post("users/techs", data, {
                headers: {Authorization: `Bearer ${token}`}
            });
            const { data: { techs } } = await api.get<IData>("profile", {
                headers: {Authorization: `Bearer ${token}`}
            })
            toastAcess("Cadastrado realizado com sucesso");
            setOpenModal(false)
            setTechs(techs)
        } catch (error) {
            toastError("Algo deu errado");
        }
    }

    async function deleteTech(id:id):Promise<void> {
        const token = localStorage.getItem("@kenziehub:token");
        await api
            .delete(`users/techs/${id}`, {
                headers: {Authorization: `Bearer ${token}`}
            })

        .then(async(res) => {
            toastAcess("Deletado com sucesso");
            const { data: { techs } } = await api.get<IData>("profile", {
                headers: {Authorization: `Bearer ${token}`}
            })
            setTechs(techs)
        })
        .catch((error) => {
            toastError("Algo deu errado");
        });
    }

    return (
        <AuthContexts.Provider
        value={{
            submitForm,
            registerUser,
            removeAll,
            addTech,
            deleteTech,
            user,
            techs,
            setUser,
            openModal,
            setOpenModal,
        }}
        >
        {children}
        </AuthContexts.Provider>
    );
}

export default AuthProvider;
