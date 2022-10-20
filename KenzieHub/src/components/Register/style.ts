import styled from "styled-components";

export const RegisterStyle =  styled.div`
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    min-width: 320px;
    background-color: var(--grey-4);
    gap: 10px;
    margin-top: 40px;
    
    h1{
        color: var(--color-primary);
        font-size: 24px;
    }
    .container_form{
        background-color: var(--grey-3);
        min-height: 70%;
        width: 25%;
        min-width: 280px;
        display: flex;
        flex-direction: column;

    }
    header{
        display: flex;
        justify-content: space-between;
        width: 25%;
        align-items: center;
        margin-bottom: 20px;
        min-width: 280px;
    }
    .button_voltar{
        padding:8px;
        border-radius: 4px;
        background-color: var(--grey-2);
        color: var(--grey-0);
        border: 1.2px solid var(--grey-2);
    }
    .button_voltar:hover{
        opacity: 0.8;
    }
    span{
        font-weight: 600;
        font-size: 12px;
        color: var(--grey-1);
        text-align: center;
    }
    #cadastrar{
        padding: 11px;
        border-radius: 4px;
        color: var(--grey-0);
        font-size: 16px;
        background-color: var(--color-primary);
        border: solid 1.2px var(--color-primary);
    }
    #cadastrar:hover{
        background-color: var(--color-primary-Negative);
        border: solid 1.2px var(--color-primary-Negative);
    }
    select{
        padding: 12px;
        border-radius: 4px;
        background-color: var(--grey-2);
        border: 1.2px solid var(--grey-0);
        outline: none;
        color: var(--grey-0);
        
    }
    p{
        font-weight: 400;
        font-size: 12.182px;
        line-height: 0px;
    }

`