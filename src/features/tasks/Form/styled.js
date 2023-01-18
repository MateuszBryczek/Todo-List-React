import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    width: 100%;
    gap:20px;

    @media (max-width:767px){
        flex-direction: column;
        align-items: center;
    }
`;

export const FormInput = styled.input`
    padding:10px;
    border: 1px solid lightgray; 
    width: 100%;
`;

export const FormButton = styled.button`
    padding: 10px;
    background-color: rgb(0, 130, 130);
    color: white;
    border: none;
    min-width: 20%;
    transition: 0.5s;

    @media(max-width:767px){
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    &:hover{
        filter: brightness(115%);
        scale: 110%;
        cursor: pointer; 
    }

    &:active{
        filter: brightness(130%);
    }
`;