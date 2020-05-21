import React from "react";
let FriendItem = (props) => {
    return(
        <div className="shadow-sm mb-3">
            <div className={"card-body p-2"}>
                <h6 className={"mb-0"}> {props.firstName} </h6>
                <div>Цитата дня: </div>
                <div>{props.status}</div>
            </div>
        </div>
    )
}
const Sidebar = (props) => {
    //При каждой итерации возвращать возвращать следующий элемент с данными
    let lastFriends = props.sidebar.friends.map (
        (friend) => <FriendItem firstName={friend.firstName}
                                    status={friend.status}
                                    key = {friend.id}
        />);


    return (
        <div className={"col-3 wrapper"}>
            <h2>Last friends online</h2>
            {lastFriends}
        </div>
    )
}

export default Sidebar;