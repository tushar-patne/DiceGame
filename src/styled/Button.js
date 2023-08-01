import {styled} from "styled-components"

export const PrimaryButton = styled.button`

    all: unset;
    cursor: pointer;
    color: #fff;
    background-color: #000;
    padding: 10px 18px;
    border-radius: 5px;
    min-width: 12rem;
    text-align: center;
    float: right;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    transition: 0.3s all ease-in;
    border: 1px solid transparent;
    &:hover{
        color: #000;
        background-color: #fff;
        border: 1px solid black;
    }

`

export const SecondaryButton = styled(PrimaryButton)`
    color: #000;
    background-color: #fff;
    border: 1px solid black;
    &:hover{
        color: #fff;
        background-color: #000;
    }
`