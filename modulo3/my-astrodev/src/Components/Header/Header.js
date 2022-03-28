import { NavBar } from "./Style"

export default function Header() {
    return(
        <NavBar>
            <h1>ASTRODEV</h1>
            <div>
                <a>Home</a>
                <a>Discover</a>
                <a>Contact Us</a>
                <div>
                    <input placeholder="Search"></input>
                    <button>Login</button>
                </div>
            </div>
        </NavBar>
    )
}