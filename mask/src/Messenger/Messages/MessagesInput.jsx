import React from "react";
import {sendMessageAC, updateInputTextAC} from "../../state";

const MessagesInput = (props) => {
    let textInput = React.createRef();
    let changeInputValue = () => {
        let text = textInput.current.value;
        props.dispatch(updateInputTextAC(text));
    }
    let sendMessage = () => {
        props.dispatch(sendMessageAC());
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
                   placeholder="hello"
                   value={props.inputText}
            />
            <div className="input-group-append">
                <button className='btn btn-primary' onClick={sendMessage}>Add Message</button>
            </div>
        </div>
    )
}

export default MessagesInput;