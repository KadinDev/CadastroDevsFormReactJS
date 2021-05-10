import styled from 'styled-components'

export const Container = styled.div `
    max-width: 67.5rem;
    min-height: 18.75rem;
    margin: 2rem auto;
    border-radius: 0.1rem;
    background: #EB5757;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #000000, #EB5757);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #000000, #EB5757); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


    box-shadow: 0 0 0.2rem var(--white);
    padding: 1.2rem;
    display: grid;
    grid-template-columns: 1fr 3.5fr;

`

export const BoxDeveloper = styled.div `
    background: url('https://miro.medium.com/max/680/1*VON9gHTrzeHZbHfXsqfzEA.gif') no-repeat center center / cover;
    min-height: 400px;
`