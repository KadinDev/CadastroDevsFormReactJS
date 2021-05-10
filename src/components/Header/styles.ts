import styled from 'styled-components'

export const Container = styled.header `
    background: #111;
    box-shadow: 0 0 0.2rem var(--white);
    text-align: center;
`

export const BoxHeader = styled.div `
    max-width: 950px;
    margin: 0 auto;
    padding: 25px;

    h1 {
        color: var(--white);
        text-transform: uppercase;
        letter-spacing: 0.2rem
    }

    button {
        padding: 2px;
        color: red;
        opacity: 0.8;
        transition: opacity 0.2s;

        &:hover {
            opacity: 1
        }
    }
`