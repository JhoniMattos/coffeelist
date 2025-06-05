import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme["white-100"]};
    color: ${(props) => props.theme["gray-300"]};
  
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;    
  }

  body, input, text-area, button {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
  }

  button {
    background: transparent;
    border: 0;
    cursor: pointer;
    line-height: 0;
     border-radius: 2px;
}
`;
