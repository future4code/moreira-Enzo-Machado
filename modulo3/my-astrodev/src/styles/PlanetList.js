import styled from "styled-components"

export const Content = styled.div`
    border-top: 1px solid #D6FAF9;
    margin: 2rem 6rem;
`

export const Filter = styled.div`
    margin: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1rem;

    span {
        font-weight: bold;
        color: #D6FAF9;
    }

    input {
        border: 2px solid #D6FAF9;
        background: none;
        margin-left: 1rem;
        color: #D6FAF9;
        border-radius: 5px;
        padding: 5px;

        ::-webkit-input-placeholder {
            padding: 1rem;
            color: #D6FAF9;
        }

        :focus {
            outline: none;

        }
    }

    select {
        background-color: #D6FAF9;
        border: none;
        padding: 5px;
        border-radius: 5px;
    }
`

export const CardList = styled.div`
    
`