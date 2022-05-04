import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --green:#BED9D3;
        --grey: #92BCC2;
        --blue: #6798A0;
        --blueMedium: #4F7A82;
        --blueDark:#31626C;
        --pastel: #FFE49B ;
        --beach: #E3AD56 ;
        --baby: #FCFDFD;
        --cream: #1A1713;
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
    body{
        background-color: var(--blue);
    }
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    button {
        cursor: pointer;
        border: none;
    }

    p {
        margin-top: 0;
        margin-bottom: 0;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    textarea:focus, input:focus, select:focus, input:active, select:active {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    } 
    a{
        text-decoration: none;
    }
`;
