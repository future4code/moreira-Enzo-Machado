import styled from "styled-components";

const Container = styled.div`
    background-color: #2D0C5E;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
    color: white;
    margin-bottom: 2rem;
`

const Filtros = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 760px;

    button {
        border-radius: 5px;
        margin: 2px;
        padding: 5px;
        font-size: 18px;

        :hover {
            opacity: 0.5;
        }
    }
`

function Header() {
    return(
        <Container>
            <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
            <p>Filtrar por:</p>
            <Filtros>
                <button>Ação</button>
                <button>Aventura</button>
                <button>Animação</button>
                <button>Comédia</button>
                <button>Crime</button>
                <button>Documentario</button>
                <button>Drama</button>
                <button>Familia</button>
                <button>Fantasia</button>
                <button>História</button>
                <button>Terror</button>
                <button>Música</button>
                <button>Mistério</button>
                <button>Romance</button>
                <button>Ficção Cientifica</button>
                <button>Cinema Tv</button>
                <button>Thriller</button>
                <button>Guerra</button>
                <button>Faroeste</button>
            </Filtros>
        </Container>
    )
}

export default Header;