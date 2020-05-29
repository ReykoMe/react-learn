import React from "react";

let SearchFriendsInput = (props) => {

    let inputValue = React.createRef()
    let changeInput = () => props.updateInput(inputValue.current.value);
    return (
        <div className="row">
            <div className="col p-0 mb-2 input-group">
                <input type="text"
                       className="form-control"
                       placeholder="Press the button to load user list =>>>"
                       ref={inputValue}
                       value={props.textInput}
                       onChange={changeInput}
                />

                <div className="input-group-append">
                    <button className='btn btn-primary'

                    >Search</button>
                </div>
            </div>
        </div>
    )
}

export default SearchFriendsInput