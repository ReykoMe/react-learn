import React from "react";
import classes from './sidebar.module.css';
import Prev from './preview/prev';

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <h3>Last Posts</h3>
            <Prev />

        </div>
    )
}

export default Sidebar;