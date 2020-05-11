import React from "react";
import classes from './Header.module.css'
import NavigationBar from './NavigationBar/NavigationBar';
const Header = () => {
   return (
       <div className={classes.header + " row p-2"}>
            <NavigationBar />
       </div>
    )
};

export default Header;