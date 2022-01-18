import styled, { createGlobalStyle } from "styled-components";

export const Bigcardcontainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`;

export const Title = styled.h4`
    margin-bottom: 5px;
    text-decoration: underline;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`;

export const Img = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`;