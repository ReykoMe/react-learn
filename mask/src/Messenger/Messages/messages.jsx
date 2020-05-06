import React from "react";
import classes from'./messages.module.css';


//Если подкомпонента нигде не используется, ее можно оставить вместе с основной, но делать так нужно в том случае, если такой подход не будет создавать нагромождения
const MessageItem =(props) => {
    return(
        <div className={classes.item}>
            {props.text}
            <br/>
            {props.likesCount}
        </div>
    )
}

const Messages = (props) => {
    let messagesText = props.messagesData.map((element) => <MessageItem text ={element.message}
                                                                        likesCount ={element.likesCount}
                                                                        key ={element.id}
    />)
    return (
        <div className="messages">
            {messagesText}
        </div>
    )
}

export default Messages;