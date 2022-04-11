import styled from "styled-components";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";



const Profile = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    align-content: center;
    justify-content: space-between;

    img {
        border-radius: 24px;
        width: 496px;
        height: 559px;
    }
`

const ProfileInfo = styled.div`
    width: 414px;
    height: 115px;
    background-color: rgba(255,255,255, 0.70);
    border-radius: 14px;
    position: absolute;
    left: 40px;
    top: 550px;

    h4 {
        font-size: 20px;
    }
`

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const DislikeButton = styled.button`
    background-color: red;
    border: none;
    font-size: 24px;
    border-radius: 24px;
`

const LikeButton = styled.button`
    background-color: green;
    border: none;
    font-size: 24px;
    border-radius: 24px;
`

function Content() {

    const [profile, setProfile] = useState([]);
    const [userChoose, setUserChoose] = useState(null);
    const [gotMatchs, setGotMatchs] = useState(false);
    const [matchs, setMatchs] = useState([])

    const getMatchs = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/enzoMachado/matches")
        .then((res) => {
            setMatchs(res.data.matches)
            setGotMatchs(true)
        })
        .catch((err) => console.log(err.response))
    }

    const getProfile = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/enzoMachado/person")
        .then((response) => {
            setProfile(response.data.profile);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const choosePerson = (value) => {
        const body = {
            id: profile.id,
            choice: value,
        };
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/enzoMachado/choose-person", body)
        .then((response) => {
            getProfile();
            if(response.data.isMatch === true) {
                alert("OPA. Deu Match!");
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(getMatchs, [profile])
    useEffect(() => {
        getProfile();
    }, [])

    return(
        <div>
            <Profile>
                <img src={profile.photo} />
                <ProfileInfo>
                    <h4>{profile.name}, {profile.age}</h4>
                    <h6>{profile.bio}</h6>  
                </ProfileInfo>
            </Profile>

            <Buttons>
                    <DislikeButton onClick={() => choosePerson(false)}>Dislike</DislikeButton>
                    <LikeButton onClick={() => choosePerson(true)}>Like</LikeButton>
            </Buttons>
        </div>
    )
}

export default Content;