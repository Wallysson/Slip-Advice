import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  body {
    background: #c57aff;
    -webkit-font-smoothing: antialiased;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
`

