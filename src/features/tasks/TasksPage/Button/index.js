import styled from "styled-components";

export default styled.button`
    background: transparent;
    color: rgb(0, 130, 130);
    border: none;
    margin: 0 0 0 20px;
    transition: filter 0.3s;

    @media(max-width: max-width(767px)) {
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover {
        filter: brightness(115%);
        cursor: pointer; 
    }

    &:active {
        filter: brightness(130%);
    }
`;