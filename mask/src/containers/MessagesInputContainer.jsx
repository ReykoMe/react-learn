import React from "react";
import { sendMessageAC, updateInputTextAC } from "../redux/reducers/messenger-reducer";
import MessagesInput from "../Messenger/Messages/MessagesInput";

const MessagesInputContainer = (props) => {
  let state = props.store.getState();
  let changeInputValue = (text) => props.store.dispatch(updateInputTextAC(text));
  let sendMessage = () => props.store.dispatch(sendMessageAC());

  let keyHandler = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  }

  return (
    <MessagesInput messenger = {state.messenger} 
                   changeInputValue={changeInputValue}
                   sendMessage={sendMessage}
                   keyHandler={keyHandler}
    />
  )
}

export default MessagesInputContainer;