import React from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
    height: 485px;
    width: 350px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 10px;
    margin-left: 30px;
    margin-right: 30px;
`

const ProfilePicture = styled.img`
    min-height: 370px;
    max-height: 370px;
    min-width: 325px;
    max-width: 325px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    margin-left: 12px;
`

const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 12px;

    h4 {
        font-size: 28px;
        margin-top: 15px;
        margin-bottom: 5px;
    }

    h6 {
        margin-top: 10px;
        color: gray;
    }
`


function ProfileCard(props) {
    const profile = props.profile
    return(
        <ProfileContainer>
            <ProfilePicture src={profile.photo} />
            <ProfileInfo>
                <h4>{profile.name}, {profile.age}</h4>
                <h6>{profile.bio}</h6>
            </ProfileInfo>
        </ProfileContainer>
    )
}

export default ProfileCard;