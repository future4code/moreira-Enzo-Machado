import styled from "styled-components"

const Barr = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 12px 6rem;

    h1 {
        color: #D6FAF9;
        font-weight: bold;
        font-size: 32px;
    }

    span {
        color: #320380;
    }
`

const Navv = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    a {
        cursor: pointer;
        color: #D6FAF9;
        font-size: 22px;
    }
`

const InputBarr = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    input {
        height: 44px;
        width: 250px;
        border: 2px solid #D6FAF9;
        background: none;
        margin-left: 1rem;
        border-radius: 5px;
        color: #D6FAF9;

        ::-webkit-input-placeholder {
            padding: 1rem;
            color: #D6FAF9;
        }

        :focus {
            outline: none;
        }
    }

    button {
        background-color: #D6FAF9;
        border: none;
        height: 50px;
        width: 125px;
        font-size: 18px;
        border-radius: 5px;
    }
`



export function NavBar() {
    return(
        <Barr>
            <h1><span>ASTRO</span>DEV</h1>
            <Navv>
                <a>Home</a>
                <a>Discover</a>
                <a>Contact Us</a>
            </Navv>
            <InputBarr>
                <input placeholder="search"></input>
                <button>Log in</button>
            </InputBarr>
        </Barr>
    )
}