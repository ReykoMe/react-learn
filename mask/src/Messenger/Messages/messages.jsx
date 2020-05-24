import React from "react";
import classes from './messages.module.css';
import MessagesInputContainer from "../../containers/MessagesInputContainer"
//Подкомпонента, отвечающая за отображение 1 единицы сообщения
const Message = (props) => {
  return (
    <div className={classes.item}>
      {props.text}
      <br />
      {props.likesCount}
    </div>
  )
}

const Messages = (props) => {

  let messagesText = props.messenger.messages.map((message) => <Message text={message.message}
    likesCount={message.likesCount}
    key={message.id}
  />)


  return (
    <div className="messages col-md-10">
      <MessagesInputContainer store={props.store}/>
      {messagesText}
    </div>
  )
}

export default Messages;