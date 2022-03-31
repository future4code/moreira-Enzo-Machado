import { Container, Header, Interact, Banner } from "../styles/Home"
import Astronaut from "../assets/astronaut.png"

export function HomePage() {
    return (
        <Container>
            <Header>
                <span>A small click for man, a big click for humanity</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio lectus purus, accumsan malesuada ut cursus interdum nulla eget. </p>
                <Interact>
                    <a>Discover How</a>
                    <button>➥</button>
                </Interact>
            </Header>
            <Banner>
                <img src={Astronaut} />
            </Banner>
        </Container>
    )
}