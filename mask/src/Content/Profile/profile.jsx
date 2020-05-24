import React from "react";

const Profile = () => {
    return (
        <div className={"row mb-3"}>
            <div className="col-md-3">
                <img src={require("../../media/avatar_template.png")} className="w-100 rounded mb-2" alt="kek"/>
            </div>
            <div className="col-md-9">
                <h3>Albert Kremov</h3>
                <p>16 years old</p>
                <p>From: hell</p>
                <p>Status: Reactive Rektal</p>
            </div>
        </div>
    )
}

export default Profile;