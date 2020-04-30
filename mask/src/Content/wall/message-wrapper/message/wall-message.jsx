import React from "react";
import classes from'./wall-message.module.css';

    const WallMessage = (props) => {
        return (
            <div className={classes.item}>
                <h4>{props.userName}</h4>
                <p>{props.message}</p>
            </div>
        )
    }

export default WallMessage;