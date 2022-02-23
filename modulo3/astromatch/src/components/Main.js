import React from "react";
import ProfilePage from "./ChooseProfilePage/ProfilePage";
import AppBar from "./Header/AppBar";
import MatchList from "./MatchList/MatchList";

function Main() {
    return(
        <div>
            <AppBar />
            <ProfilePage />
            <MatchList />
        </div>
    )
}

export default Main;