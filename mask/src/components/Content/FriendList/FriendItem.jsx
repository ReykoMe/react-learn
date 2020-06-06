import React from "react";
import { NavLink } from "react-router-dom";
import { friendsApi } from "../../../service/api/axiosQueries";

let FriendItem = (props) => {
    let changeSubscribeStatus = (userId, followed) => {
        props.toggleFollowing(true, userId);
        console.log(props.following);
        switch (followed) {
            case false:
                friendsApi.userSubscribe(userId).then((response) => {
                    response.resultCode === 0 && props.changeSubscribeStatus(userId);
                    props.toggleFollowing(false);
                });
                break;
            case true: {
                friendsApi.userUnsubscribe(userId).then((response) => {
                    response.resultCode === 0 && props.changeSubscribeStatus(userId);
                    props.toggleFollowing(false, userId);
                });
                break;
            }
            default:
                break;
        }
    };
    let hideUser = (userId) => props.hideUser(userId);

    return (
        <div className='row shadow-sm rounded p-2'>
            <div className='col-2 p-0'>
                <img src={props.userPhoto} alt='user' className='w-100 rounded-lg' />
            </div>
            <div className='col-7'>
                <h6>
                    <NavLink to={`/profile/${props.id}`}>
                        <span className='mr-2 badge badge-secondary'>id: {props.id} </span>
                    </NavLink>
                    {props.name}
                </h6>

                <p className='m-0'>Country, city</p>
                <p>Looking for job</p>
            </div>
            <div className='col-3 d-flex align-items-center justify-content-end'>
                {" "}
                {!props.followed ? (
                    <div className='d-flex'>
                        <button
                            disabled={props.following.some((id) => id === props.id)}
                            className='btn btn-primary mr-1'
                            onClick={() => {
                                changeSubscribeStatus(props.id, props.followed);
                            }}>
                            Follow
                        </button>
                        <button
                            className='btn btn-outline-danger'
                            onClick={() => {
                                hideUser(props.id);
                            }}>
                            Hide
                        </button>
                    </div>
                ) : (
                    <div className='d-flex'>
                        <button className='btn btn-success mr-1'>Message</button>
                        <button
                            disabled={props.following.some((id) => id === props.id)}
                            className='btn btn-outline-warning mr-1'
                            onClick={() => {
                                changeSubscribeStatus(props.id, props.followed);
                            }}>
                            Unfollow
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FriendItem;
