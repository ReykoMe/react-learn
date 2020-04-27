import React from "react";
import './profile.modules.css'

const Profile = () => {
    return (
        <div className="profile">
            <img src={require("../../media/avatar_template.png")} className="ava-template" alt="kek"/>
            <h3>Albert Kremov</h3>
            <p>16 years old</p>
            <p>From: hell</p>
            <p>Status: Reactive Rektal</p>
        </div>
    )
}

export default Profile;