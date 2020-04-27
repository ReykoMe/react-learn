import React from "react";
import './wall.modules.css';
import MessageWrapper from "./message-wrapper/message-wrapper";

const Wall = () => {
    return(
        <div className="wall">
            <div className="message-area">
                <textarea name="" id="" cols="30" rows="2" placeholder="Please input your message"/>
                <input type="button" value="Submit"/>
            </div>
            <MessageWrapper />
        </div>
    )
}

export default Wall;