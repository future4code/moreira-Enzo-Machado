import { Container, Filter, Cabecalho, BannerStyle } from "./style"
import Banner from "../../assets/Banner.jpg"


export function Content() {
    return(
        <Container>
            <BannerStyle src={Banner} />
            <Cabecalho>
                <p>Space</p>
                <h1>Camisas</h1>
            </Cabecalho>
            <Filter>
                <h3>Filtros</h3>
                <p></p>
                <p>Minimo</p>
                <input></input>
                <p>Maximo</p>
                <input></input>
            </Filter>
        </Container>
    )
}