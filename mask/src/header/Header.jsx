import React from "react";
import './header.module.css'
import Navmenu from './navmenu/navmenu';
const Header = () => {
   return (
       <div className='header'>
            <Navmenu />
       </div>
    )
};

export default Header;