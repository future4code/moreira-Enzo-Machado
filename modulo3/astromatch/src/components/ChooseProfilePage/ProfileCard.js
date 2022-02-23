import React from "react";
import styled from "styled-components";

const ProfileCardContainer = styled.div`
    margin: 16px;
    border: 1px solid cyan;
`

const ProfilePicture = styled.img`
    width: 100%;
    max-height: 420px;
`

const ProfileInfo = styled.div`
    border: 1px solid black;
    padding: 0 16px; 
    
    h4 {
        font-size: 20px;
    }
    
    h6 {
        color: gray;
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