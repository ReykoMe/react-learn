import React from "react";
import classes from "./NavigationBar.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadUserProfile, setStatus } from "../../../redux/reducers/profile-reducer";
import { profileApi } from "../../../service/api/axiosQueries";

const NavigationBar = (props) => {
    //FIXME: необходимо, чтобы при клике на кнопку MyProfile отображались данные моего профиля. Костыль есть, но необходимо исправить
    const dispatch = useDispatch();
    const getMyProfile = (userId) => {
        profileApi.getProfileInfo(userId).then((response) => {
            dispatch(loadUserProfile(response));
        })
        profileApi.getStatus(userId).then((response) => {
            dispatch(setStatus(response))
        })
    }
       
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
                            getMyProfile(props.userId);
                        }}>
                        My Profile
                    </NavLink>
                    <NavLink to='/messenger' className={"p-2 rounded text-light"} activeClassName={classes.underline}>
                        Dialogs
                    </NavLink>
                    <NavLink to='/friends' className={"p-2 rounded text-light"} activeClassName={classes.underline}>
                        Friends
                    </NavLink>
                </>
            )}
        </div>
    );
};

export default NavigationBar;
