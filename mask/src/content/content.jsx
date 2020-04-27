import React from "react";
import './content.modules.css';

const Content = () => {
    return (
        <div className='content'>
            <div className="profile">
                <img src={require("../media/avatar_template.png")} className="ava-template" alt="kek"/>
                <h3>Albert Kremov</h3>
                <p>16 years old</p>
                <p>From: hell</p>
                <p>Status: Reactive Rektal</p>
            </div>
            <div className="wall">
                <div className="message-area">
                    <textarea name="" id="" cols="30" rows="2" placeholder="Please input your message"/>
                </div>
                <div className="messages">
                    <div className="message">
                        <hr/>
                        <h5>Zinaida Wunderdirten</h5>
                       <p>Hello, i'm Chibakka</p>
                        <hr/>
                    </div>
                    <div className="message">
                        <hr/>
                        <h5>Zinaida Wunderdirten</h5>
                        <p>Hello, i'm Chibakka</p>
                        <hr/>
                    </div>
                    <div className="message">
                        <hr/>
                        <h5>Zinaida Wunderdirten</h5>
                        <p>Hello, i'm Chibakka</p>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;