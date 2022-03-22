import ProfileIcon from "../../assets/profile.png"
import { Barra } from "./style"

export function NavBar() {
    return (
        <Barra>
                <h1>ASTRODEV</h1>
            <div>
                <a>Categorias</a>
                <a>Ofertas</a>
                <a>Sobre nós</a>
            </div>
            <input placeholder="Pesquisar"></input>
            <div>
                <a>Wishtlist</a>
                <a>Cart</a>
                <a><img src={ProfileIcon}/></a>
            </div>
        </Barra>
    )
}