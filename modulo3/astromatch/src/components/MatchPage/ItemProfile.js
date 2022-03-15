import React from "react"
import styled from "styled-components"

const BoxItem = styled.div`
    height: 100px;
    width: 355px;
    background-color: #fff;
    border-radius: 10px;
    margin-top: 10px;
`

const Avatar = styled.img`
    height: 75px;
    width: 75px;
    margin: 15px;
`

function ItemProfile(props) {
    const profile = props.profile

    return(
        <BoxItem>
            <Avatar src={profile.photo}/>
            <p>{profile.name}, {profile.age}</p>
        </BoxItem>
    )
}

export default ItemProfile;