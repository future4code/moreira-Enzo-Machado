import React from "react";
import styled from "styled-components";

const BoxItem = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;

    :hover {
        background-color: rgba(0,0,0,0.3)
    }
`

const Avatar = styled.img`
    margin-right: 8px;
    border-radius: 50%;
    width: 25%;
`

function ListItem(props) {
    const profile = props.profile

    return(
        <BoxItem>
            <Avatar src={profile.photo} />
            <p>{profile.name}, {profile.age}</p>
        </BoxItem>
    )
}

export default ListItem;