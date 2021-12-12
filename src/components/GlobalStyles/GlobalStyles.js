import {createGlobalStyle} from "styled-components";
import {colors} from "../variables";

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
    font-family: 'Barlow', serif;
    text-decoration: none;
  }

  body {
    background: ${colors.black1};
  }
`