import React, {useEffect } from "react";
import FriendItem from "../FriendList/FriendItem";
import {useDispatch, useSelector} from "react-redux";
import {changeSubscribeStatusAC, hideUserAC, loadUsersAC} from "../redux/reducers/friends-reducer";
import * as axios from "axios";

const FriendListHooks = () => {
        const friends = useSelector(state => state.friends)
        const dispatch = useDispatch()
        useEffect(() => {
            axios.get (`https://social-network.samuraijs.com/api/1.0/users?count=${friends.count}`)
                .then(response => {
                    dispatch(loadUsersAC(response.data.items))
                    console.log(response)
                })
        }, [])

        return (
            <div className="row">
                <div className="col-md-12">
                    {friends.users.map((user) => <FriendItem name={user.name}
                                                                followed={user.followed}
                                                                id={user.id}
                                                                key={user.id}
                                                                changeSubscribeStatus={() =>{dispatch(changeSubscribeStatusAC(user.id))}}
                                                                hideUser={()=> {
                                                                    dispatch(hideUserAC(user.id))}
                                                                }
                        />
                    )}
                </div>
                <div className="col-md-12 mt-3">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item "><a className="page-link bg-primary text-light" href="#">Previous</a></li>
                            <li className="page-item"><a href="#" className="page-link" >1</a></li>
                            <li className="page-item"><a className="page-link" href="">2</a></li>
                            <li className="page-item"><a className="page-link" href="">3</a></li>
                            <li className="page-item"><a className="page-link bg-primary text-light" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
}

export default FriendListHooks