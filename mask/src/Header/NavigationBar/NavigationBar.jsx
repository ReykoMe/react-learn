import React from "react";
import classes from './NavigationBar.module.css';
import {NavLink} from "react-router-dom";

const NavigationBar = () => {
    return (
        <div className={" d-flex p-2"}>
                <NavLink to="/profile" className = {"p-2 rounded text-light"} activeClassName={classes.underline}>Main</NavLink>
                <NavLink to="/messenger" className = {"p-2 rounded text-light"} activeClassName={classes.underline}>Dialogs</NavLink>
                <NavLink to="/friends" className = {"p-2 rounded text-light"} activeClassName={classes.underline}>Friends</NavLink>
        </div>
    )
}

export default NavigationBar;