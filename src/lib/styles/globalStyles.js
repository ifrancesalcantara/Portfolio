import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin:0;
    font-family: 'Expletus Sans', -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  }
  /*supress browser default*/
  p {
    margin-block-start:0; 
    margin-block-end:0; 
    margin-inline-start:0; 
    margin-inline-end:0;
    padding-block-start:0; 
    padding-block-end:0; 
    padding-inline-start:0; 
    padding-inline-end:0;
  }
  ul{
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
  }
  h1{
    margin:0;
  }
`