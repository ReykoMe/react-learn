import React from "react";
import './content.modules.css';
import Profile from "./profile/profile";
import Wall from "./wall/wall";

const Content = () => {
    return (
        <div className='content'>
            <Profile />
            <Wall />
        </div>
    )
}

export default Content;