import * as style from "./style";
import { FormStyle } from "../Form/style";
import { useContext } from "react";
import { AuthContexts } from "../contexts/AuthContexts";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

function Modal({ setOpenModal }) {
  const { addTech } = useContext(AuthContexts);

  const formSchema = yup.object().shape({
    title: yup.string().required("Título obrigatório"),
    status: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function closeModal() {
    setOpenModal(false);
  }

  return (
    <style.ModalStyle>
      <FormStyle onSubmit={handleSubmit(addTech)}>
        <div className="close">
          <h3>Cadastrar Tecnologia</h3>
          <button onClick={closeModal} type="button">
            X
          </button>
        </div>
        <label htmlFor="Nome">Nome</label>
        <input 
        type="text" 
        placeholder="Digite uma tecnologia" 
        {...register("title")}
        />
        {errors.title?.message}
        <label htmlFor="Selecionar status">Selecionar status</label>

        <select   {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <button type= "submit" id="cadastrar">Cadastrar Tecnologia</button>
      </FormStyle>
    </style.ModalStyle>
  );
}

export default Modal;
