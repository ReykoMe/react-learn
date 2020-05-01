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
    let  messagesData = [
        {id: 1, message: "It's message from: %username", likesCount: 23},
        {id: 2, message: "Message from another %username", likesCount: 11},
        {id: 3, message: "Shmyga", likesCount: 3},
        {id: 4, message: "Ololol", likesCount: 118},
        {id: 5, message: "Bingo", likesCount: 0}
    ];

    let messagesText = messagesData.map((element) => <MessageItem text ={element.message} likesCount ={element.likesCount} key ={element.id}/>)
    return (
        <div className="messages">
            {messagesText}

        </div>
    )
}

export default Messages;