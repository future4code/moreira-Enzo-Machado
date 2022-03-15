import axios from "axios";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import ProfilePic from "../../assets/profile.jpg"

import ProfileCard from "./ProfileCard"
import Buttons from "./Buttons"

const AppScreen = styled.div`
    background-color: #FED8DD;
    width: 399px;
    height: 844px;
    border-radius: 35px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;

    h1 {
        margin-left: 15px;
        font-size: 40px;
    }

    img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        margin-right: 15px;
    }
`

const ProfileContainer = styled.div`
    p{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

function DiscoverPage() {

    const [profile, setProfile] = useState(undefined);
    
    const getProfile = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/enzoMachado/person")
        .then((res) => {
            setProfile(res.data.profile);
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {getProfile()
    }, [])

    const chooseProfile = (choice) => {
        const body = {
            choice: choice,
            id: profile.id
        }
        setProfile(undefined)
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/enzoMachado/choose-person", body)
        .then(() => {
            getProfile()
        })
    }

    const onClickNo = () => {
        chooseProfile(false)
    }

    const onClickYes = () => {
        chooseProfile(true)
    }

    return(
        <AppScreen>
            <Header>
                <h1>Discover</h1>
                <img src={ProfilePic} />
            </Header>
            <ProfileContainer>
                {profile ?
                ( <>
                    <ProfileCard profile={profile} />
                </>): <p>Carregando...</p>}
            </ProfileContainer>

            <Buttons onClickNo={onClickNo} onClickYes={onClickYes}/>
        </AppScreen>
    )
}

export default DiscoverPage;