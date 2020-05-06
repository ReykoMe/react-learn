import React from "react";
import classes from './Messenger.module.css';
import Users from "./Chats/users";
import Messages from "./Messages/messages";


const Messenger = (props) => {

    return (
        <div className={classes.dialogs}>
            <Users usersData={props.usersData}/>
            <Messages messagesData={props.messagesData}/>
        </div>
    )
}

export default Messenger;