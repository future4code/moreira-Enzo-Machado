import axios from "axios";
import React, { useEffect, useState } from "react";
import ChooseButtons from "./ChooseButtons";
import ProfileCard from "./ProfileCard";


function ProfilePage() {
    
    const [profile, setProfile] = useState([]);

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

    return(
        <div>
            <ProfileCard profile={profile}/>
            <ChooseButtons/>
        </div>
    )
}

export default ProfilePage;