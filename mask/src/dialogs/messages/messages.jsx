import React from "react";
import classes from'./messages.module.css';

//Если подкомпонента нигде не используется, ее можно оставить вместе с основной, но делать так нужно в том случае, если такой подход не будет создавать нагромождения
const MessageItem =(props) => {
    return(
        <div className={classes.item}>
            {props.text}
        </div>
    )
}

const Messages = (props) => {
    return (
        <div className="messages">
            <MessageItem text = "This is message text"/>
            <MessageItem text = "One more"/>
            <MessageItem text = "Ну да, разобрался немного :)"/>
            <MessageItem text = "Удобненько в принципе"/>
        </div>
    )
}

export default Messages;