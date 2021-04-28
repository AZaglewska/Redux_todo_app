import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
padding: 0;
margin: 0;
box-sizing: border-box;
}

 body{
    font-family: 'Roboto', sans-serif;
    background-image: linear-gradient(to bottom, #d2a5be, #cca3c6, #c3a3cf, #b6a3d7, #a5a5df, #97ade6, #88b4ea, #7abbeb, #7cc8ea, #87d3e7, #99dde3, #aee6e1);
    height:100vh;
 
 
}

 button {
        cursor: pointer;
    }

`;

export default GlobalStyle;
