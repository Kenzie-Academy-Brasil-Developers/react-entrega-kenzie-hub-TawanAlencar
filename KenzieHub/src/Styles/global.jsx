import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        list-style: none;
        text-decoration:none;
    }
    :root{
        --color-primary:            #FF577F;
        --color-primary-Focus:      #FF427F;
        --color-primary-Negative:   #59323F;
        --grey-0:                   #F8F9FA;
        --grey-1:                   #868E96;
        --grey-2:                   #343B41;
        --grey-3:                   #212529;
        --grey-4:                   #121214;
        --sucess:                   #3FE864;
        --negative:                 #E83F5B;
        
    }

    button{
        cursor: pointer;
    }
    
    body{
        background-color: var(--grey-4)
    }
    
`;
export default GlobalStyle;