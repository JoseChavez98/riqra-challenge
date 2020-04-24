import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html{
    
    font-family :  Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', -apple-system, verdana;
}

body{
    background: #f7f7f9;
    height: 100vh;
    margin: 0 auto;
    overscroll-behavior: none;
    width: 100%;
}

button{
    background: transparent;
    border: 0;
    outline: 0;
}

#app {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px
  }




`;