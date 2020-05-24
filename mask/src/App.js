import React from 'react';
import './App.css';
import Header from './Header/Header';
import Content from "./Content/Content";
import Footer from './Footer/Footer';
import SidebarContainer from "./containers/SidebarContainer";
import Messenger from "./Messenger/Messenger";
import {Route} from "react-router-dom";
import FriendsContainer from "./containers/FriendsContainer";

const App = (props) => {
    return (
        <div className='container'>
            <Header/>

            <div className="row">
                <SidebarContainer store={props.store}/>
                <div className="col-md-9 content">
                    {/*Добавляем Route (необходимо установить из npm react-router-dom), с помощью которого реализуется логика "Если в строке браузера отображается /путь условный => отображать компоненту*/}
                    <Route exact path="/messenger" render={() => <Messenger/>}/>
                    <Route exact path="/" render={() => <Content/>}/>
                    <Route exact path="/friends" render={() => <FriendsContainer/>}/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
