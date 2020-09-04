import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body {
    height: 100%;
  }

  body {
    font-family: 'Sarala', sans-serif;
    font-weight: 200;
    color: ${theme.offblack};
    background: ${theme.offwhite};
  }

  body, #root, main {
    height: 100%;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  a {
    color: ${theme.offwhite};
  }

  main {
    max-width: ${theme.desktop};
    margin: auto;
  }

`;

export default GlobalStyle;
