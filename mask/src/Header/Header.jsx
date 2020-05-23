import React from "react";
import NavigationBar from './NavigationBar/NavigationBar';

const Header = () => {
    return (
        <div className="row bg-primary mt-2 mb-3 rounded">
            <div className={"col"}>
                <NavigationBar/>
            </div>
        </div>
    )
};

export default Header;