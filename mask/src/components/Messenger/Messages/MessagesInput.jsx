import React from "react";

const MessagesInput = (props) => {
    let textInput = React.createRef();
    let changeInput = () => props.changeInputValue(textInput.current.value);
    let sendMessage = () => props.sendMessage();
    let keyHandler = (e) => (e.key === 'Enter') ? sendMessage() : null;

    return (
        <div className="input-group">
            <input type="text"
                   ref={textInput}
                   onChange={changeInput}
                   onKeyPress={keyHandler}
                   className="form-control"
                   value={props.messenger.newMessageText} 

            />
            <div className="input-group-append">
                <button className='btn btn-primary' onClick={sendMessage}>Add Message</button>
            </div>
        </div>
    )
}

export default MessagesInput;