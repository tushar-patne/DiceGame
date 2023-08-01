import { styled } from "styled-components"

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
border: 1px solid transparent;
transition: 0.2s all ease-in;
&:hover{
    color: #000;
    background-color: #fff;
    border: 1px solid #000;
}
`

export const SecondaryButton = styled(PrimaryButton)`
    color: #000;
    background-color: #fff;
    border: 1px solid #000;
    &:hover{
        color: #fff;
        background-color: #000;
}
`