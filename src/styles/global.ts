import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --primary-color: #F2F2F2;
        --purple: #582be7;
        --light-purple: #ccc7e2;
        --dark:  #0D0D0D
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        @media (max-width: 1080px) {
        font-size : 93.75%;
        }
        @media (max-width: 720px) {
        font-size : 85.5%;
        }
    }
    body, input, button, textarea {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }
    button {
        cursor: pointer;
        border: none;
    }
`