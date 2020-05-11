import React from "react";
import classes from './PostMessage.module.css';

    const Post = (props) => {
        return (
            <div className={classes.item}>
                <p className="font-weight-bold mb-0">{props.userName} <span className="badge badge-pill badge-success">Message id: {props.id}</span></p>
                <p>{props.message}</p>
            </div>
        )
    }
export default Post;