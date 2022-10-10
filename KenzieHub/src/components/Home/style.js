import styled from "styled-components";

export const HomeStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    flex-direction: column;
    min-width: 320px;
 
   
    header{
        display: flex;
        justify-content: space-between;
        width:100%;
        padding:15px 40px;
        margin: 0 auto;
        border-bottom: 1.2px solid var(--grey-3);
        min-width: 320px;
    }
    h1{
        color: var(--color-primary);
        font-size: 24px;
    }
    header button{
        padding:8px;
        border-radius: 4px;
        background-color: var(--grey-2);
        color: var(--grey-0);
        border: 1.2px solid var(--grey-2);
    }
    header button:hover{
        opacity: 0.8;
    }
    h2{
        color: var(--grey-0);
        font-weight: 700;
        font-size: 18px;
        
    }
    .container_user{
        display: flex;
        justify-content: space-between;
        width:100%;
        padding:40px;
        margin: 0 auto;
        border-bottom: 1.2px solid var(--grey-3);
        min-width: 320px;
    }
    .container_user span{
        font-weight: 400;
        font-size: 12px;  
        color: var(--grey-1); 
    }
    .container_info{
     
        width:100%;
        padding:40px;
        border-bottom: 1.2px solid var(--grey-3);
        min-width: 320px;
        
    }
    .container_info p{
        font-weight: 400;
        font-size: 16px;
        color: var(--grey-0);
        
    }
`