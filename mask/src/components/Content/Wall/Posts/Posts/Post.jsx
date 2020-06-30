import React from "react";
const Post = ({ userName, message, likes, id }) => {
    return (
        <div className='shadow p-3 rounded mb-2'>
            <p className='font-weight-bold mb-2'>
                <span className='badge badge-pill badge-secondary mr-2'> id: {id}</span>
                {userName}
            </p>
            <p className='m-0 mb-2'>{message}</p>
            <p className='m-0'>Likes: {likes}</p>
        </div>
    );
};
export default Post;
