import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { toastAcess, toastError } from "../../services/toastify";

export const AuthContexts = createContext({});

    function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [openModal, setOpenModal] = useState(null);

    async function listTech() {
        const token = localStorage.getItem("@kenziehub:token");
        const list = await api.get("profile", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        });

        setUser(list.data);
    }

    async function submitForm(data) {
        await api
        .post("sessions", data)
        .then((res) => {
            localStorage.setItem("@kenziehub:token", res.data.token);
            localStorage.setItem("@kenziehub:tokenID", res.data.user.id);
            setUser(res.data.user);
            navigate("home");
            toastAcess("Login realizado com sucesso");
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

    async function addTech(data) {
        const token = localStorage.getItem("@kenziehub:token");
        const techs = await api
        .post("users/techs", data, {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => {
            toastAcess("Cadastrado realizado com sucesso");
            listTech();
            setOpenModal(false)
        })
        .catch((error) => {
            toastError("Algo deu errado");
        });
    }

    async function deleteTech(id) {
        const token = localStorage.getItem("@kenziehub:token");
        const deletar = await api
        .delete(`users/techs/${id}`, {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        })

        .then((res) => {
            toastAcess("Deletado com sucesso");
            listTech();
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
            setUser,
            listTech,
            openModal,
            setOpenModal,
        }}
        >
        {children}
        </AuthContexts.Provider>
    );
    }

export default AuthProvider;
