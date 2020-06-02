import React from "react";
import classes from './NavigationBar.module.css';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loadUserProfile} from "../../../redux/reducers/profile-reducer";
import {getProfileInfo} from "../../../service/api/axiosQueries";

const NavigationBar = (props) => {
    //Решение костыльное, но все же работает (пока что)
    const dispatch = useDispatch();
    const getMyProfile = (userId) => getProfileInfo(userId).then((response) => {
        dispatch(loadUserProfile(response))
    })
    return (
        <div className={" d-flex p-2"}>
            {!props.authorised ? (<>
                <NavLink to="/login" className = {"p-2 rounded text-light"} activeClassName={classes.underline}>Login</NavLink>
            </>) : (<>
                <NavLink to={"/profile/"} className = {"p-2 rounded text-light"} activeClassName={classes.underline} onClick={()=> {getMyProfile(props.userId)}}>My Profile</NavLink>
                <NavLink to="/messenger" className = {"p-2 rounded text-light"} activeClassName={classes.underline}>Dialogs</NavLink>
                <NavLink to="/friends" className = {"p-2 rounded text-light"} activeClassName={classes.underline}>Friends</NavLink>
            </>)}
                
        </div>
    )

}

export default NavigationBar;