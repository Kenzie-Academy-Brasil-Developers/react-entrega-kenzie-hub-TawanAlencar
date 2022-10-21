
import styled from "styled-components";

export const FormStyle:any =  styled.form`
    display: flex;
    flex-direction: column;
    padding:20px;
    gap: 20px;
    margin-top: 30px;
    color: var(--grey-0);
    border-radius: 4px;
    width: 100%;
    height: 100%;
    
    h2{
        font-weight: 700;
        font-size: 18px;
        text-align: center;
    }

    label{
        font-weight: 400;
        font-size: 12px;
    }

    input{
        padding: 12px;
        border-radius: 4px;
        background-color: var(--grey-2);
        border: 1.2px solid var(--grey-0);
        outline: none;
        color: var(--grey-0);
    }

`