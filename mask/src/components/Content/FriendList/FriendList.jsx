import FriendItem from "./FriendItem";
import avatarImg from "../../../media/users_avatar.jpg";
import React from "react";
import Pagination from "./FriendListPagination";

let FriendList = (props) => {
    return (
        <div className='row'>
            <Pagination
                totalUsers={ props.totalUsers }
                countUsers={ props.countUsers }
                currentPage={props.currentPage}
                setCurrentPage={props.setCurrentPage}
            />
            <div className='col-md-12'>
                {props.users.map((user) => (
                    <FriendItem
                        name={user.name}
                        followed={user.followed}
                        id={user.id}
                        key={user.id}
                        changeSubscribeStatus={props.changeSubscribeStatus}
                        following={props.following}
                        hideUser={props.hideUser}
                        userPhoto={user.photos.small !== null ? user.photos.small : avatarImg}
                        toggleFollowing={props.toggleFollowing}
                        changeSubscribeStatusTh={props.changeSubscribeStatusTh}
                    />
                ))}
            </div>
            <Pagination
                totalUsers={props.totalUsers}
                countUsers={props.countUsers}
                currentPage={props.currentPage}
                setCurrentPage={props.setCurrentPage}
            />
        </div>
    );
};

export default FriendList;
