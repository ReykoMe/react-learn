import React from "react";
import './sidebar.modules.css';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <h3>Last Posts</h3>
            <div className="item">
                <img src={require("../media/last_post_img_prev.jpg")} alt=""/>
                <h4>Apple not save the world</h4>
                <p>Apple was founded by Steve Jobs, Steve Wozniak, and Ronald Wayne in April 1976 to develop and sell Wozniak's Apple I personal computer, though Wayne sold his share back within 12 days.</p>
            </div>
            <div className="item">
                <img src={require("../media/last_post_img_prev.jpg")} alt=""/>
                <h4>Apple not save the world</h4>
                <p>Apple was founded by Steve Jobs, Steve Wozniak, and Ronald Wayne in April 1976 to develop and sell Wozniak's Apple I personal computer, though Wayne sold his share back within 12 days.</p>
            </div>
        </div>
    )
}

export default Sidebar;