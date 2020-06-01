import React from "react";
import classes from './NavigationBar.module.css';
import {NavLink} from "react-router-dom";

const NavigationBar = (props) => {
    return (
        <div className={" d-flex p-2"}>
            {!props.authorised ? (<>
                <NavLink to="/login" className = {"p-2 rounded text-light"} activeClassName={classes.underline}>Login</NavLink>
            </>) : (<>
                {/**TODO:Сделать подгрузку данных своего аккаунта с сервера при нажатии на кнопку my profile */}
                <NavLink to={"/profile/" + props.userId} className = {"p-2 rounded text-light"} activeClassName={classes.underline}>My Profile</NavLink>               
                <NavLink to="/messenger" className = {"p-2 rounded text-light"} activeClassName={classes.underline}>Dialogs</NavLink>
                <NavLink to="/friends" className = {"p-2 rounded text-light"} activeClassName={classes.underline}>Friends</NavLink>
            </>)}
                
        </div>
    )
}

export default NavigationBar;