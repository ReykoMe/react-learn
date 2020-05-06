import React from "react";
import classes from './PostMessage.module.css';

    const Post = (props) => {
        return (
            <div className={classes.item}>
                <h4>{props.userName}</h4>
                <p>{props.message}</p>
            </div>
        )
    }

export default Post;