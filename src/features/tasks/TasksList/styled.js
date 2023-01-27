import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    font-size: 125%;
    padding: 10px;
    gap: 10px;
`;

export const TasksItem = styled.li`
    border-bottom: 1px solid lightgrey;
    padding: 5px;
    display: grid;
    grid-template-columns: auto 1fr auto;

    ${({hidden}) => hidden && css`
        display: none;
    `}
`;

export const TasksContent =  styled.span`
    ${({done}) => done && css`
        text-decoration: line-through;
    `}
`;

export const TasksButton = styled.button`
    width: 25px;
    height: 25px;
    margin-left: 10px;
    margin-right: 10px;
    border: none;
    text-align: center;
    color: white;
    transition: 0.5s;
    
    &:hover{
            filter: brightness(115%);
            cursor: pointer;
        }

        &:active{
            filter: brightness(130%);
        }

    ${({toggleDone}) => toggleDone && css`
        background-color: green;
    `}

    ${({remove}) => remove && css`
        background-color: red;
    `}
`;