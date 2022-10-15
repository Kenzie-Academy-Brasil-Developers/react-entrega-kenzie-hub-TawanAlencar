import styled from "styled-components";

export const ModalStyle = styled.div`
    display: flex;
    width: 100%;
    position: fixed;
    background-color:  rgba(0,0,0,0.5);
    justify-content: center;
    align-items: center;
    top: 0;
    min-height: 100vh;    
    left: 0;
    padding: 0 1rem;
    
    h3{
        font-weight: 700;
        font-size: 14px;
        color: var(--grey-0);
        border-radius: 4px 4px 0px 0px;
    }
    
    form{
        width: 100%;
        max-width: 500px;
        margin: 0px;
        background-color: var(--grey-3);

    }
    .close{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--grey-2);
        padding:12px;
    }
    .close button{
        background-color: transparent;
        border: none;
        color: var(--grey-1);
        font-weight: 600;
        font-size: 16px;
    }
    select{
        padding: 12px;
        border-radius: 4px;
        background-color: var(--grey-2);
        border: 1.2px solid var(--grey-0);
        outline: none;
        color: var(--grey-0);
        
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
`

