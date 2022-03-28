import { HomeHead, Buttons, Box } from "./Style"
import Astronauta from "../../assets/astronauta.png"

export default function Home() {
    return (
        <HomeHead>
            <div>
            <h1>A small click for man, a big click for humanity</h1>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio lectus purus, accumsan malesuada ut cursus interdum nulla eget. </h4>
            <Buttons>
            <a>Discover More</a>
            <button>❯</button>
            </Buttons>
            </div>
            <div>
            <Box />
            <img src={Astronauta} />
            </div>
        </HomeHead>
    )
}