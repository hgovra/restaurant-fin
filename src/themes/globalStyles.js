import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html {
    overflow: hidden;
  }
  
  body {
    font-family: 'IBM Plex Sans', sans-serif;
  }
`;
 
export default GlobalStyle;