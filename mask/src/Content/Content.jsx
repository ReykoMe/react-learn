import React from "react";
import classes from './Content.module.css';
import Profile from "./Profile/profile";

import WallContainer from "../containers/WallContainer";

const Content = (props) => {

    return (
        <div className={classes.content + " row"}>
            <div className="col">
                <Profile />
                <WallContainer store = {props.store}/>
            </div>

        </div>
    )
}

export default Content;