import React from "react";
import classes from './PostsWrapper.module.css';
import Post from "./Posts/Post";

const PostsWrapper = (props) => {

    let Posts = props.wallPosts.map(post => {
          return <Post userName={post.author}
                       message={post.message}
                       key={post.id}
          />
    })
    return (
        <div className={classes.messageWrapper}>
            {Posts}
        </div>
    )
}

export default PostsWrapper;