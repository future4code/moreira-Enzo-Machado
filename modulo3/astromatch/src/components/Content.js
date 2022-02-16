import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ProfileCard = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 300px;
    height: 380px;
    border-radius: 20px;

    img {
        border-radius: 20px 20px 0 0;
        width: 300px;
        height: 380px;
    }
`
const ProfileInfo = styled.div`
    padding: 1px 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h6 {
        color: grey;
    }
`

const Buttons = styled.div`

`

const DislikeButton = styled.button`

`

const LikeButton = styled.button`

`

function Content() {

    const [profile, setProfile] = useState({});
    const [userChoose, setUserChoose] = useState(null);

    const getProfile = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/enzoMachado/person")
        .then((response) => {
            setProfile(response.data.profile);
        })
        .catch((err) => {
            console.log(err);
        })        
    };

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

    useEffect(() => {
        getProfile();
    }, []);

    return(
        <Container>
            <ProfileCard>
                <img src={profile.photo} />
                <ProfileInfo>
                    <h4>
                        {profile.name}, {profile.age}
                        <h6>{profile.bio}</h6>
                    </h4>
                </ProfileInfo>
            </ProfileCard>

            <Buttons> 
                <DislikeButton onClick={() => choosePerson(false)}>Dislike</DislikeButton>
                <LikeButton onClick={() => choosePerson(true)}>Like</LikeButton>
            </Buttons>
        </Container>
    )
}

export default Content;