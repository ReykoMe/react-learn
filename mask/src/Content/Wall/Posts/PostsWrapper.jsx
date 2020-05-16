import React from "react";
import classes from './PostsWrapper.module.css';
import Post from "./Posts/Post";

const PostsWrapper = (props) => {

    let Posts = props.wallPosts.map(post => {
          return <Post userName={post.author}
                       message={post.message}
                       id={post.id}
                       likes={post.likes}
                       key={post.id}
          />
    })
    return (
        <div className={classes.messageWrapper + " col d-flex flex-column flex-column-reverse"}>
                {Posts}
        </div>
    )
}

export default PostsWrapper;