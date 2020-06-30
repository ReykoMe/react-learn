import React from "react";
import style from "./Sidebar.module.css";
const FriendItem = (props) => {
    return (
        <div className='shadow-sm mb-3'>
            <div className='card-body p-2'>
                <h6 className='mb-0'>
                    <span className={"badge badge-pill badge-info"}>{props.userId}</span>
                    {'  ' + props.firstName}
                </h6>
            </div>
        </div>
    );
};
const Sidebar = (props) => {

    //При каждой итерации возвращать возвращать следующий элемент с данными
    let lastFriends = props.sidebar.friends.map((friend) => (
        <FriendItem firstName={friend.name} userId={friend.id} key={friend.id} />
    ));

    return (
        <div className={"col-md-3 " + style.wrapper}>
            <h5 className='text-center'>Last samurais</h5>
            {lastFriends}
        </div>
    );
};

export default Sidebar;
