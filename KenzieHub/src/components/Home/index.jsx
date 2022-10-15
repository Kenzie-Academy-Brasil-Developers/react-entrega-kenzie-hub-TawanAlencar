import { useContext, useState } from "react";
import { AuthContexts } from "../contexts/AuthContexts";
import * as style from "./style";
import {BiTrash} from "react-icons/bi"
import Modal from "../Modal";


function Home(){
    const name = localStorage.getItem("@kenziehub:tokenName")
    const courseModule = localStorage.getItem("@kenziehub:tokenCourse_module")
    const {removeAll,lista,deleteTech} =  useContext(AuthContexts)
    const [openModal, setOpenModal] = useState(null)
    

    function open(){
        setOpenModal(true)
    }

    return(
        <style.HomeStyle >
            <header>
                <h1>Kenzie Hub</h1>
                <button onClick={removeAll} className="Sair" >Sair</button>
            </header>
            <div className="container_user">
                <h2>Olá, {name}</h2>
                <span >{courseModule}</span>
            </div>
            <div className="container_info">
                <h3>Tecnologias</h3>
                <button onClick={open} className="adicionar">+</button>
                {openModal && <Modal setOpenModal={setOpenModal}/>}
            <ul className="container_list">
                {lista.map((element,index)=>(
                    <li key={index}>
                        <h3>{element.title}</h3>
                        <div className="remover_item">
                            <span>{element.status}</span>
                            <button onClick={()=> deleteTech(element.id)}>
                                <BiTrash/>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            </div>
        </style.HomeStyle>
    )
}

export default Home