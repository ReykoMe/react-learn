import React from "react";
import classes from './wall-message-wrapper.module.css';
import WallMessage from "./message/wall-message";

const WallMessageWrapper = () => {
    return (
        <div className={classes.messageWrapper}>
            <WallMessage userName="Василий Чичкалкин" message="Бородульку тебе"/>
        </div>
    )
}

export default WallMessageWrapper;