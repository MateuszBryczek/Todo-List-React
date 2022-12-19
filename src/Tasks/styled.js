import styled, { css } from "styled-components";

export const TasksList = styled.ul`
    list-style: none;
    font-size: 125%;
    display: flex;
    padding: 10px;
    flex-direction: column;
    gap: 10px;
`;

export const TasksItem = styled.li`
    border-bottom: 1px solid lightgrey;
    padding: 5px;

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
    color: white;
    text-align: center;
    transition: 0.5s;

    ${({toggleDone}) => toggleDone && css`
        background-color: green;

        &:hover{
            background-color: rgb(0, 140, 0);
        }

        &:active{
            background-color: rgb(0, 160, 0);
        }
    `}

    ${({remove}) => remove && css`
        background-color: red;
        float: right;

        &:hover{
            background-color: rgb(255, 40, 40);
        }

        &:active{
            background-color: rgb(255, 70, 70);
        }
    `}
`;