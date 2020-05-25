import React from "react";


let FriendItem = (props) => {

    let changeSubscribeStatus = (userId) => props.changeSubscribeStatus(userId)
    let hideUser = (userId) => props.hideUser(userId);

    return (
        <div className="row shadow-sm rounded p-2">
            <div className="col-md-2 p-0">
                <img src={require("../media/users_avatar.jpg")} alt="user" className="w-100"/>
            </div>
            <div className="col-md-7">
                <h6><span className="mr-2 badge badge-secondary">id: {props.id}</span>{props.name} </h6>
                {/* <p className="m-0">{props.location}</p>
                <p>{props.status}</p> */}
                 <p className="m-0">Country, city</p>
                <p>Looking for job</p>
            </div>
            <div className="col-md-3 d-flex align-items-center justify-content-end"> {
                !props.followed ?
                    (<div className="d-flex">
                            <button className="btn btn-primary mr-1"
                                    onClick={() => {changeSubscribeStatus(props.id)}}>Follow</button>
                            <button className="btn btn-outline-danger"
                            onClick={() => {hideUser(props.id)}}>Hide</button>
                        </div>
                    ) : (<div className="d-flex">
                            <button className="btn btn-success mr-1">Message</button>
                            <button className="btn btn-outline-warning mr-1"  onClick={() => {changeSubscribeStatus(props.id)}}>Unfollow</button>
                        </div>)

                }


            </div>
        </div>
    )
}

export default FriendItem