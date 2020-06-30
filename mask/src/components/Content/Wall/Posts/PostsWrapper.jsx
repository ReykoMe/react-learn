import React from "react";
import Post from "./Posts/Post";

const PostsWrapper = ({wallPosts}) => {
    let Posts = wallPosts.map((post) => {
        return <Post userName={post.author} message={post.message} id={post.id} likes={post.likes} key={post.id} />;
    });
    return <div className={"col d-flex flex-column flex-column-reverse"}>{Posts}</div>;
};

export default PostsWrapper;
