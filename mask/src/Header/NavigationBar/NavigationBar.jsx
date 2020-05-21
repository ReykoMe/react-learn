import React from "react";
import classes from './NavigationBar.module.css';
import {NavLink} from "react-router-dom"; //вместо classes можно использовать любое другое имя, при работе глобальные стили перестают работать, поэтому стили необходимо выносить в отдельные модули

const NavigationBar = () => {
    return (
        <div className={classes.navmenu + " col d-flex p-3"}>
                <NavLink to="/" className = {"p-2 rounded"}>Main</NavLink>
                <NavLink to="/messenger" className = {"p-2 rounded"} activeClassName={classes.selected + " border border-danger"}>Dialogs</NavLink>
        </div>
    )
}

export default NavigationBar;