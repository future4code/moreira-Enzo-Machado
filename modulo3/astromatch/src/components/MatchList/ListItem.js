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

function ListItem() {

    return(
        <BoxItem>
            <Avatar src="https://cdn.allthings.how/wp-content/uploads/2020/10/allthings.how-how-to-change-your-profile-picture-on-google-meet-profile-photo-759x427.png?width=800" />
            <p>Nome da pessoa, idade</p>
        </BoxItem>
    )
}

export default ListItem;