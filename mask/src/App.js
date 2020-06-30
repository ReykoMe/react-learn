import React from "react";
import { Route} from "react-router-dom";
import "./App.css";
import Friends from "./components/Content/FriendList/Friends";
import LoginPage from "./components/Content/LoginPage/LoginPage";
import Footer from "./components/Footer/Footer";
import ContentContainer from "./containers/ContentContainer";
import HeaderContainer from "./containers/HeaderContainer";
import SidebarContainer from "./containers/SidebarContainer";


const App = (props) => {
   
    return (
        <div className='container'>
            <HeaderContainer />
            <div className='row'>
                <SidebarContainer/>
                <div className='col-md-9 content'>
                    {/*Добавляем Route (необходимо установить из npm react-router-dom), с помощью которого реализуется логика "Если в строке браузера отображается /путь условный => отображать компоненту*/}
                    <Route path='/login' render={() => <LoginPage />} />
                    <Route path='/profile/:userId?' render={() => <ContentContainer />} />
                    <Route path='/friends' render={() => <Friends />} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;
