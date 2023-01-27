import styled from "styled-components";

export const Button = styled.button`
    color: rgb(0, 130, 130);
    border: none;
    margin: 0px;
    margin-left: 20px;
    background-color: transparent;
    transition: 0.5s;

    &:disabled{
        color: lightgray;
    }

    &:hover{
        filter: brightness(115%);
        cursor: pointer; 
    }

    &:active{
        filter: brightness(130%)
    }
`;