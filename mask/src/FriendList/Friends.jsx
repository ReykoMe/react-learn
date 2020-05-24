import React from "react";
import FriendItem from "./FriendItem";


let Friends = (props) => {
    props.loadUsers()
    let recommended = props.friends.users.map(
        (user) => <FriendItem name={user.name}
                              location={user.location}
                              status={user.status}
                              isFriend={user.isFriend}
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
                       placeholder="Please, enter Name, City or other search info"
                       ref={inputValue}
                       value={props.friends.searchInputText}
                       onChange={changeInput}
                />

                <div className="input-group-append">
                    <button className='btn btn-primary'>Search</button>
                </div>
            </div>
            <div className="col-md-12">
                {recommended}
            </div>
        </div>
    )
}

export default Friends