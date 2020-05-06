import React from "react";
import classes from './NavigationBar.module.css';
import {NavLink} from "react-router-dom"; //вместо classes можно использовать любое другое имя, при работе глобальные стили перестают работать, поэтому стили необходимо выносить в отдельные модули

const NavigationBar = () => {
    return (
        <div className={classes.navmenu}>
            <div className={classes.item}>
                <NavLink to="/" activeClassName={classes.selected}>Main</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/messenger" activeClassName={classes.selected}>Dialogs</NavLink>
            </div>

        </div>
    )
}

export default NavigationBar;