import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.form `
    width: 40%;
    margin: auto;
    height: 90%;
    background: #0f0c29;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    position: relative;
    color: var(--white);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 5px white;

    .closeModal {
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;
        width: 30px;
        height: 30px;
        color: white;
        background: var(--red);
        border-radius: 50%;
        font-size: 18px;
        transition: opacity 0.2s;

        &:hover {
            opacity: 0.9
        }
    }

    h2 {
        text-align: right;
        margin-bottom: 20px;
    };

    p {
        text-align: center;
    }

    input,
    textarea,
    button {
        width: 100%;
        margin-bottom: 10px;
    };

    input,
    textarea {
        font-size: 1rem;
        line-height: 1.125rem;
        font-weight: 400;
    };

    input {
        padding: 10px 0 10px 5px;
        margin-bottom: 5px;
        outline: none;
        border: solid 1px white;
    };

    textarea {
        margin-bottom: 5px;
        padding: 5px 0 5px 5px;
        outline: none;
        height: 150px;
    }

    button[type="submit"] {
        height: 2rem;
        font-size: 18px;
        text-transform: uppercase;
        background: white;
        transition: background 0.2s;
        font-weight: bold;

        &:hover {
            background: ${darken( 0.1, 'white' )};
        }
    }

    div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 5px;
        margin-bottom: 5px;
    }

`


// somente para uma cor
//const colorBackground = '#FF4F4F'

/*background: ${ (props) => props.isActive
        
    ? darken(0.2, colorBackground )
    : '#034F84'
};*/

interface ButtonAreaSelectedProps {
    isActive: boolean;
    activeColor: 'red' | 'blue' | 'violet';
}

const colorBackground = {
    red: '#FF4F4F',
    blue: '#0000FF',
    violet: '#8A2BE2',
}

export const AreaDev = styled.button<ButtonAreaSelectedProps> `

    color: white;
    padding: 10px 0px;
    font-weight: 600;
    transition: 0.2s;

    background: ${ (props) => props.isActive
        
        ? darken(0.2, colorBackground[props.activeColor] )
        : '#034F84'
    };


`
