import React from "react";
import classes from './navmenu.module.css';
import {NavLink} from "react-router-dom"; //вместо classes можно использовать любое другое имя, при работе глобальные стили перестают работать, поэтому стили необходимо выносить в отдельные модули

const Navmenu = () => {
    return (
        <div className={classes.navmenu}>
            <div className={classes.item}>
                <NavLink to="/main" activeClassName={classes.selected}>Main</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.selected}>Dialogs</NavLink>
            </div>

        </div>
    )
}

export default Navmenu;