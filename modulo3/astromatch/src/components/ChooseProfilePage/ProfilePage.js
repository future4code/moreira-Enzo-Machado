import axios from "axios";
import React, { useEffect, useState } from "react";
import ChooseButtons from "./ChooseButtons";
import ProfileCard from "./ProfileCard";
import styled from "styled-components";

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`


function ProfilePage() {
    
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
        <ProfileContainer>
            { profile ?
                ( <>
                    <ProfileCard profile={profile}/>
                    <ChooseButtons onClickNo={onClickNo} onClickYes={onClickYes}/>
                </>) : <p>Carregando...</p>
            }

        </ProfileContainer>
    )
}

export default ProfilePage;