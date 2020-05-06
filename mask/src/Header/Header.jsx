import React from "react";
import './Header.module.css'
import NavigationBar from './NavigationBar/NavigationBar';
const Header = () => {
   return (
       <div className='header'>
            <NavigationBar />
       </div>
    )
};

export default Header;