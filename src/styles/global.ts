import { createGlobalStyle } from 'styled-components';
import { transparentize } from 'polished'

export const GlobalStyle = createGlobalStyle `
    :root {
        --background: #1C1C1C;
        --white: #EDF7F6;
        --red: #FF4F4F;
        --text: #001;
    }

    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 96.75%;
        };

        @media (max-width: 1080px) {
            font-size: 96.75%;
        };

        font-family: 'Poppins', sans-serif;

    }

    body {
        background: var(--white);
    }

    body,
    input,
    textarea,
    button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    textarea {
        resize: none
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    button {
        cursor: pointer;
        outline: none;
    }

    a {
        text-decoration: none;
    }


    .react-modal-content {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        background: ${transparentize(0.4, 'black' )};
        padding: 3rem;
        position: absolute;
        border-radius: 0.25rem; // == 4px

        
    }


`