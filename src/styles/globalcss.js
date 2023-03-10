import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
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
  color: #fff;
  max-width: 100vw;
  overflow-x: hidden;
  background-color: black;
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
`