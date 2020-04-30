import React from "react";
import classes from './wall.module.css';
import WallMessageWrapper from "./message-wrapper/wall-message-wrapper";

const Wall = () => {
    return(
        <div className={classes.wall}>
            <div className={classes.messageArea}>
                <textarea name="" id="" cols="30" rows="2" placeholder="Please input your message"/>
                <input type="button" value="Submit"/>
            </div>
            <WallMessageWrapper />
        </div>
    )
}

export default Wall;