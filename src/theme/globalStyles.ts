// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
h1,h2,h3,h4,h5{
  font-weight: 700;
  font-size: 120%;
  color: #ce1212;
}
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
