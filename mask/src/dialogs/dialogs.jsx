import React from "react";
import classes from'./dialogs.module.css';
import Users from "./usertree/users";
import Messages from "./messages/messages";


const Dialogs = (props) => {
    return (

        <div className={classes.dialogs}>
            <Users />
            <Messages />
        </div>

    )
}

export default Dialogs;