import React from "react";
import FriendItem from "./FriendItem";
import * as axios from "axios"

let Friends = (props) => {
    let getUsers = () => {
        if (props.friends.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.loadUsers (response.data.items)
            }) 
        }
    }
   

    let recommended = props.friends.users.map(
        (user) => <FriendItem name={user.name}
                            //   location={user.location}
                            //   status={user.status}
                              followed={user.followed}
                              id={user.id}
                              key={user.id}
                              changeSubscribeStatus={props.changeSubscribeStatus}
                              hideUser={props.hideUser}
        />
    )
    let inputValue = React.createRef()
    let changeInput = () => props.updateInput(inputValue.current.value);
    return (
        <div className="row">
            <div className="col p-0 mb-2 input-group">
                <input type="text"
                       className="form-control"
                       placeholder="Press the button to load user list =>>>"
                       ref={inputValue}
                       value={props.friends.searchInputText}
                       onChange={changeInput}
                />

                <div className="input-group-append">
                    <button className='btn btn-primary'
                            onClick={getUsers}
                    >Get Users</button>
                </div>
            </div>
            <div className="col-md-12">
                {recommended}
            </div>
        </div>
    )
}

export default Friends