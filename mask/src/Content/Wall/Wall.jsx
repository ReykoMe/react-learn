import React from "react";
import classes from './Wall.module.css';
import PostsWrapper from "./Posts/PostsWrapper";

const Wall = (props) => {
    return(
        <div className={classes.wall}>
            <div className={classes.messageArea}>
                <textarea name="" id="" cols="30" rows="2" placeholder="Please input your message"/>
                <input type="button" value="Submit"/>
            </div>
            <PostsWrapper wallPosts={props.wallPosts}/>
        </div>
    )
}

export default Wall;