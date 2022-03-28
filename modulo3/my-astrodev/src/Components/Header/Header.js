import { NavBar, NavInput } from "./Style"

export default function Header() {
    return(
        <NavBar>
            <h1>ASTRODEV</h1>
            <div>
                <a>Home</a>
                <a>Discover</a>
                <a>Contact Us</a>
                <NavInput>
                    <input placeholder="Search"></input>
                    <button>Login</button>
                </NavInput>
            </div>
        </NavBar>
    )
}