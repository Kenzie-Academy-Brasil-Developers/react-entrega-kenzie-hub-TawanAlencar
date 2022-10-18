import { useContext, useState } from "react";
import { AuthContexts } from "../contexts/AuthContexts";
import * as style from "./style";
import { BiTrash } from "react-icons/bi";
import Modal from "../Modal";

function Home() {
    const { removeAll, deleteTech, user, listTech, setOpenModal, openModal } =
        useContext(AuthContexts);

    function open() {
        setOpenModal(true);
    }
    listTech();

    return (
        <style.HomeStyle>
        <header>
            <h1>Kenzie Hub</h1>
            <button onClick={removeAll} className="Sair">
            Sair
            </button>
        </header>
        <div className="container_user">
            <h2>Olá, {user.name}</h2>
            <span>{user.course_module}</span>
        </div>
        <div className="container_info">
            <h3>Tecnologias</h3>
            <button onClick={open} className="adicionar">
            +
            </button>
            {openModal && <Modal />}
            <ul className="container_list">
            {user.techs?.map((element, index) => (
                <li key={index}>
                <h3>{element.title}</h3>
                <div className="remover_item">
                    <span>{element.status}</span>
                    <button onClick={() => deleteTech(element.id)}>
                    <BiTrash />
                    </button>
                </div>
                </li>
            ))}
            </ul>
        </div>
        </style.HomeStyle>
    );
}

export default Home;
