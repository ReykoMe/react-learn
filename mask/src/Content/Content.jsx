import React from "react";
import classes from './Content.module.css';
import Profile from "./Profile/profile";
import Wall from "./Wall/Wall";

const Content = (props) => {

    return (
        <div className={classes.content}>
            <Profile />
            <Wall wallPosts={props.profileData.wallPosts}
                  areaText ={props.profileData.newText}
                  dispatch={props.dispatch}
                  newPostText={props.newPostText}
            />
        </div>
    )
}

export default Content;