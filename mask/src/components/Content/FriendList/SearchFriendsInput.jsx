import React, { createRef } from "react";
import { profileApi } from "../../../service/api/axiosQueries";

//Вместо простых props можно юзать деструктуризацию. Так удобней, так как видно, что нам реально необходимо
let SearchFriendsInput = ({ textInput, updateInput, loadAllUsers }) => {
    const inputValue = createRef()
    const changeInput = () => updateInput(inputValue.current.value);
    
    return (
        <div className="row">
            <div className="col-12 p-0 mb-2 input-group">
                <input type="text"
                    className="form-control"
                    placeholder="Press the button to load user list =>>>"
                    ref={inputValue}
                    value={textInput}
                    onChange={changeInput}
                />
                <div className="input-group-append">
                    <button className='btn btn-primary'>Search</button>
                </div>
            </div>
        </div>
    )
}

export default SearchFriendsInput