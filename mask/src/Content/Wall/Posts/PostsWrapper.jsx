import React from "react";
import classes from './PostsWrapper.module.css';
import Post from "./Posts/Post";

const PostsWrapper = (props) => {

    let Posts = props.wallPosts.map(post => {
          return <Post userName={post.author}
                       message={post.message}
                       id={post.id}
                       key={post.id}
          />
    })
    return (
        <div className={classes.messageWrapper + " col d-flex flex-column"}>
                {Posts}
        </div>
    )
}

export default PostsWrapper;