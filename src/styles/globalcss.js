import { createGlobalStyle } from "styled-components";

const GlobalCSS = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
  font-family: 'Oleo Script', cursive;
  list-style: none;
  -webkit-tap-highlight-color: transparent;
}

::-webkit-scrollbar{
    background-color: transparent;
    width: 0px;
}

html,
body {
  background-color: #000;
  color: #fff;
  
  width: 100vw;
  
  overflow-x: hidden;
}

img{
  width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

::selection{
  color: #ffa900;
}
`;

export default GlobalCSS;
