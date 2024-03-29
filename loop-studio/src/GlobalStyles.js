import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 *{
    box-sizing:border-box;
    padding: 0;
    margin: 0;
    
 }

 body, html{
   overflow-x:hidden
 }

 h1,h2,h3,h4,h5,h6{
   font-family: 'Alata', sans-serif;
 }

 p, li {

    font-size: 16px;
    font-family: 'Josefin Sans', sans-serif;
    }

`;

export default GlobalStyle;
