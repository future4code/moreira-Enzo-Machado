import React from "react"
import react from "react"
import styled from "styled-components"


import LogoIcon from "../assets/Disco.png"
import ProfileIcon from "../assets/profile.png"
import GridIcon from "../assets/grid.png"
import HomeIcon from "../assets/lar.png"
import SocialIcon from "../assets/Social.png"


const NavBar = styled.div`
    height: 800px;
    width: 144px;
    border-top-left-radius: 35px;
    border-bottom-left-radius: 35px;
    background-color: #f2f2f2;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const Atalhos = styled.div`
    display: flex;
    flex-direction: column;

    img {
        width: 50px;
        height: 50px;
        margin: 20px;
    }
`

const Logo = styled.img`
    width: 50px;
    height: 50px;
    margin: 20px;
`

const Perfil = styled.img`
    width: 50px;
    height: 50px;
    margin: 20px;
    border-radius: 50%;
`

class Aside extends React.Component {
    render() {
        return(
            <NavBar>
                <Logo src={LogoIcon} />
                <Atalhos>
                    <img src={GridIcon}/>
                    <img src={HomeIcon} />
                    <img src={SocialIcon}/>
                </Atalhos>
                <Perfil src={ProfileIcon} />
            </NavBar>
        )
    }
}

export default Aside;