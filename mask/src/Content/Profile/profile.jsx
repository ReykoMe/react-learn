import React from "react";
import classes from'./profile.module.css'

const Profile = () => {
    return (
        <div className={classes.profile + " row"}>
            <div className="col">
                <img src={require("../../media/avatar_template.png")} className="w-25 rounded" alt="kek"/>
                <h3>Albert Kremov</h3>
                <p>16 years old</p>
                <p>From: hell</p>
                <p>Status: Reactive Rektal</p>
            </div>

        </div>
    )
}

export default Profile;