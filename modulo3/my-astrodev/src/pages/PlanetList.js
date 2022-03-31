import { Content, Filter, CardList } from "../styles/PlanetList"
import { Card } from "../components/Card"

export function PlanetList() {
    return(
        <Content>
            <Filter>
                <span>Filters: </span>
                <input placeholder="Minimo"></input>
                <input placeholder="Maximo"></input>
                <select placeholder="Tipo">
                    <option>Todos</option>
                    <option>Landing Tour</option>
                    <option>Fly Tour</option>
                </select>
            </Filter>

            <CardList>
                <Card />
            </CardList>
        </Content>
    )
}