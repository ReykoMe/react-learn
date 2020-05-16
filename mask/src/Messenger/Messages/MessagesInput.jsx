import React from "react";
import {sendMessageAC, updateInputTextAC} from "../../messenger-reducer";

const MessagesInput = (props) => {
    const placeHolder = 'Please, input your message'

    let textInput = React.createRef();
    let changeInputValue = () => {
        let text = textInput.current.value;
        props.dispatch(updateInputTextAC(text));
    }
    let sendMessage = () => {
        let text = textInput.current.value;
        if (text !== ' ' && text !== '') {
            props.dispatch(sendMessageAC());
        } else alert('Please, enter text of message')

    }

    let keyHandler = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    }

    return (
        <div className="input-group">
            <input type="text"
                   ref={textInput}
                   onChange={changeInputValue}
                   onKeyPress={keyHandler}
                   className="form-control"
                   placeholder={placeHolder}
                   value={props.inputText}
            />
            <div className="input-group-append">
                <button className='btn btn-primary' onClick={sendMessage}>Add Message</button>
            </div>
        </div>
    )
}

export default MessagesInput;