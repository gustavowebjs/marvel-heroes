// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #1B1717;
    color: #EEEBDD;
    font-family: 'Poppins', sans-serif;  }
    a{
      text-decoration: none;
      color: #fff;
    }
`;

export default GlobalStyle;
