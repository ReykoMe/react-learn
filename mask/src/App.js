import React from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import "./App.css";
import Friends from "./components/Content/FriendList/Friends";
import LoginPage from "./components/Content/LoginPage/LoginPage";
import Footer from "./components/Footer/Footer";
import Messenger from "./components/Messenger/Messenger";
import ContentContainer from "./containers/ContentContainer";
import HeaderContainer from "./containers/HeaderContainer";
import SidebarContainer from "./containers/SidebarContainer";
import { loadUserProfile, setStatus } from "./redux/reducers/profile-reducer";
import { profileApi } from "./service/api/axiosQueries";

const App = (props) => {
    const dispatch = useDispatch();

    const getMyProfile = (userId) => {
        profileApi.getProfileInfo(userId).then((response) => {
            dispatch(loadUserProfile(response));
        });
        profileApi.getStatus(userId).then((response) => {
            dispatch(setStatus(response));
        });
    };
    
    return (
        <div className='container'>
            <HeaderContainer getMyProfile={getMyProfile} />
            <div className='row'>
                <SidebarContainer store={props.store} />
                <div className='col-md-9 content'>
                    {/*Добавляем Route (необходимо установить из npm react-router-dom), с помощью которого реализуется логика "Если в строке браузера отображается /путь условный => отображать компоненту*/}
                    <Route path='/profile/:userId?' render={() => <ContentContainer />} />
                    <Route path='/login' render={() => <LoginPage />} />
                    <Route path='/messenger' render={() => <Messenger />} />
                    <Route path='/friends' render={() => <Friends />} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;
