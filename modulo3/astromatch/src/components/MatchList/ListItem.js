import React from "react";
import styled from "styled-components";

const BoxItem = styled.div`
    display: flex;
    align-items: center;
    border-radius: 10px;
    width: 95%;
    margin: 2px 10px;
    cursor: pointer;

    p {
        font-size: 20px;
        font-weight: bold;
    }

    :hover {
        background-color: rgba(0,0,0,0.3);
        transition: 0.3s;
    }
`

const Avatar = styled.img`
    border-radius: 50px;
    margin: 5px 10px;
    width: 60px;
    height: 60px;
    overflow: hidden;
    
    img{
        width: 110px;
        transform: translateX(-25%);
    }
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