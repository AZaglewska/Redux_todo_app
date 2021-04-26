import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
padding: 0;
margin: 0;
box-sizing: border-box;
}

 body{
    font-family: 'Montserrat', sans-serif;
    background-color: #efefef;


 
}

 button {
        cursor: pointer;
    }

`;

export default GlobalStyle;
