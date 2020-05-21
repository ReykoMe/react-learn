import React from "react";
import classes from './NavigationBar.module.css';
import {NavLink} from "react-router-dom";

const NavigationBar = () => {
    return (
        <div className={" d-flex p-2"}>
                <NavLink to="/" className = {"p-2 rounded text-light"} activeClassName={classes.underline}>Main</NavLink>
                <NavLink to="/messenger" className = {"p-2 rounded text-light"} activeClassName={classes.underline}>Dialogs</NavLink>
        </div>
    )
}

export default NavigationBar;