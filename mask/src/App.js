import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import SidebarContainer from "./containers/SidebarContainer";
import Messenger from "./components/Messenger/Messenger";
import { Route } from "react-router-dom";
import Friends from "./components/Content/FriendList/Friends";
import ContentContainer from "./containers/ContentContainer";
import HeaderContainer from "./containers/HeaderContainer";
import LoginPage from "./components/Content/LoginPage/LoginPage";
const App = (props) => {
    return (
        <div className='container'>
            <HeaderContainer />
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
