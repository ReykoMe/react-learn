import React from "react";
import classes from './content.module.css';
import Profile from "./profile/profile";
import Wall from "./wall/wall";

const Content = () => {
    return (
        <div className={classes.content}>
            <Profile />
            <Wall />
        </div>
    )
}

export default Content;