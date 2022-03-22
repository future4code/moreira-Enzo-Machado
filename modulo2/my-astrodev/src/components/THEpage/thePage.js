import { NavBar } from "../Header/Header";
import { Content } from "../Cabeçalho/Main";
import { Store } from "../Catalogo/CatalogoView";

export function Page() {
    return(
        <div>
            <NavBar />
            <Content />
            <Store />
        </div>
    )
}