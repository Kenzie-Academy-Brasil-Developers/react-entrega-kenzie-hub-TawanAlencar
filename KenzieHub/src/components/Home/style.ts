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
        padding:15px 150px;
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
        padding:40px 150px;
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
        padding:40px 150px;
        min-width: 320px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center
        
    }
    .container_info h3{
        font-weight: 600;
        font-size: 16px;
        color: var(--grey-0);
    }
    .adicionar{
        width: 32px;
        height: 32px;
        font-size: 18px;
        padding:4px;
        border-radius: 4px;
        background-color: var(--grey-2);
        color: var(--grey-0);
        border: 1.2px solid var(--grey-2);
    }
    .adicionar:hover{
        opacity: 0.8;
    }
    h3{
        color: var(--grey-0);
        font-weight: 700;
        font-size: 14.21px;
    }
    .container_list{
        width:100%;
        padding: 15px;
        min-width: 250px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: 20px;
        background-color: var(--grey-3);
        margin-top: 30px;
      
        
        
    }
    .remover_item{
        display: flex;
        gap: 20px;
        align-items: center;
    }
    .remover_item span{
        font-weight: 400;
        font-size: 12.182px;
    }
    .container_list li{
        display: flex;
        width: 100%;
        justify-content: space-between;
        background-color: var(--grey-4);
        height: 49px;
        padding: 10px;
        align-items: center;
    
    }
    .remover_item button{
        background-color: transparent;
        color: var(--grey-0);
        border: transparent;
    }
    .remover_item button:hover{
        color: red;
    }
    .remover_item span{
        color: var(--grey-1);
        font-weight: 400;
        font-size: 12.182px;
    }
    .container_list li:hover{
        background-color: var(--grey-2);
    }
   @media  (max-width: 768px){
        header{
            padding: 15px 20px;
        }
        .container_user{
            flex-direction: column;
            padding:20px;
        }
        .container_info{
            padding: 20px;
            margin:  auto;
        }
   }
`