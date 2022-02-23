import React from "react";
import styled from "styled-components";

const ProfileCardContainer = styled.div`
    margin-top: 0px;
    margin: 0px 24px;
    margin-bottom: 0px;
    display: flex;
    flex-direction: column;
    height: 75%;
`

const ProfilePicture = styled.img`
    width: 100%;
    max-height: 420px;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
`

const ProfileInfo = styled.div`
    background-color: white;
    padding: 5px 16px 5px 16px;
    height: 100px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    h4 {
        font-size: 20px;
        margin: 5px 0px;
    }
    
    h6 {
        color: gray;
        margin: 5px 0px; 
    }
`

function ProfileCard(props) {
    const profile = props.profile
    return(
        <ProfileCardContainer>
            <ProfilePicture src={profile.photo} />
            <ProfileInfo>
                <h4>{profile.name},{profile.age}</h4>
                <h6>{profile.bio}</h6>
            </ProfileInfo>
        </ProfileCardContainer>
    )
}

export default ProfileCard;