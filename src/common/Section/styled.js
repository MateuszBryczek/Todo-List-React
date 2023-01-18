import styled from "styled-components";

export const StyledSection = styled.section`
     margin: 10px 0px;
    padding: 20px;
    background-color: white;
    box-shadow: 1px 1px 5px grey;
`;

export const SectionHeader = styled.header`
    padding:10px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid lightgrey;

    @media(max-width:767px){
            flex-direction: column;
    }
`;