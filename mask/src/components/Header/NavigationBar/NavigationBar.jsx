import React from "react";
import classes from "./NavigationBar.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogOut } from "../../../redux/reducers/auth-reducer";

const NavigationBar = (props) => {
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(userLogOut());
    };
    return (
        <div className={" d-flex p-2"}>
            {!props.authorised ? (
                <>
                    <NavLink to='/login' className={"p-2 rounded text-light"} activeClassName={classes.underline}>
                        Login
                    </NavLink>
                </>
            ) : (
                <>
                    <NavLink
                        to='/profile/'
                        className={"p-2 rounded text-light"}
                        activeClassName={classes.underline}
                        onClick={() => {
                            props.getMyProfile(props.userId);
                        }}>
                        My Profile
                    </NavLink>
                   
                    <NavLink to='/friends' className={"p-2 rounded text-light"} activeClassName={classes.underline}>
                        Friends
                    </NavLink>
                    
                    <NavLink
                        to='/login'
                        className={"p-2 rounded text-light"}
                        activeClassName={classes.underline}
                        onClick={() => logout()}>
                        Logout
                    </NavLink>
                </>
            )}
        </div>
    );
};

export default NavigationBar;
