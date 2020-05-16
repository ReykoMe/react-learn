import React from "react";
import classes from './Messenger.module.css';
import Users from "./Chats/users";
import Messages from "./Messages/messages";


const Messenger = (props) => {
    return (
        <div className={classes.dialogs}>
            <Users users={props.messenger.users}/>
            <Messages messenger={props.messenger}
                      dispatch={props.dispatch}                     
            />
        </div>
    )
}

export default Messenger;