import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}
:root{
    --white: #f5f5f5;
    --vanilla: #f1ede0;
    --black: #0c0d0d;
    --orange: #c85311;
    --red: #c53030;
}

body {
    background: var(--vanilla);
    color: var(--black);
}
body input button { 
    font-family: 'PT Serif', serif;
    font-size: 1rem;
}

h1 h2 h3 h4 {
    font-family: 'Roboto Mono', monospace;
    font-weight: 700;
}

button {
    cursor: pointer;
    background-color: var(--black);
    color: var(--orange);
    border-radius: 8px;
    border: 2px solid var(--orange);
    font-family: 'Roboto Mono', monospace;
    font-weight: bold;
    margin-top: 16px;
    padding: 1rem;
    width: 100%;
}

:hover {
        background-color: var(--vanilla);
    }

a {
    text-decoration: none;
}
;


`