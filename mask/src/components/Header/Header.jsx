import React from "react";
import NavigationBar from "./NavigationBar/NavigationBar";

const Header = (props) => {
    return (
        <div className='row bg-primary mt-2  mb-3 rounded shadow'>
            <div className='col'>
                <NavigationBar
                    authorised={props.authorised}
                    login={props.login}
                    userId={props.userId}
                    setUserData={props.setUserData}
                    getMyProfile={props.getMyProfile}
                />
            </div>
        </div>
    );
};

export default Header;
