import styled from "styled-components";

export const LoginStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    min-width: 320px;
    background-color: var(--grey-4);
    gap: 20px;
    
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

    .ir_cadastro{
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 10px;
    }
    button{
        padding: 11px;
        border-radius: 4px;
        color: var(--grey-0);
        font-size: 16px;
    }
    #entrar{
        background-color: var(--color-primary);
        border: solid 1.2px var(--color-primary);
       
        
    }
    #ir_cadastro{
        background-color: var(--grey-1);
        border: solid 1.2px var(--grey-1);
    }
    span{
        font-weight: 600;
        font-size: 12px;
        color: var(--grey-1);
        text-align: center;
    }
    #entrar:hover{
        background-color: var(--color-primary-Negative);
        border: solid 1.2px var(--color-primary-Negative);
    }
    #ir_cadastro:hover{
        opacity: 0.8;
    }
   
    
`