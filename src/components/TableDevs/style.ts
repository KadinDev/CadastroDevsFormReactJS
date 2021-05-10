import styled from "styled-components";
import { transparentize } from 'polished'

export const Container = styled.div `
    width: 100%;
    height: 100%;
    background: var(--white);
    position: relative;

    h1 {
        text-align: right;
        margin-right: 1rem;
        font-size: 1.5rem;
        color: ${transparentize(0.3, 'black')};

    }

    table {
        width: 100%;
        border-spacing: 0 0.5rem;
        padding: 1rem;

        th {
            color: var(--background);
            font-weight: 400;
            text-align: left;
            line-height: 1.5rem;

            &:nth-child(4){
                text-align: center;
            };

            &:last-child {
                text-align: center;
            }
        }

        td {
            margin: 0 5px;
            border-bottom: solid 2px #ddd;
            padding-bottom: 2px;


            background: var(--white);

            &.front {
                background: #FF4F4F;
                width: 120px;
                text-align: center;
                color: white;
                text-transform: uppercase;
            }

            &.back {
                background: #0000FF;
                width: 120px;
                text-align: center;
                color: white;
                text-transform: uppercase;
            }

            &.full {
                background: #8A2BE2;
                width: 120px;
                text-align: center;
                color: white;
                text-transform: uppercase;
            }

            &:last-child {
                text-align: center;
            }

            button {
                width: 80%;
                background: var(--background);
                margin-left: 5px;
                height: 1.5rem;
                color: var(--white);
                font-size: 1rem;
                font-weight: 400;
                letter-spacing: 1px;
                transition: opacity 0.2s;

                &:hover {
                    opacity: 0.8;
                }
            }
        }


    }
`

