import React from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import SidebarContainer from "./containers/SidebarContainer";
import Messenger from "./Messenger/Messenger";
import {Route} from "react-router-dom";
import Friends from "./FriendList/Friends";
import ContentContainer from './containers/ContentContainer'
const App = (props) => {
    return (
        <div className='container'>
            <Header/>
            <div className="row">
                <SidebarContainer store={props.store}/>
                <div className="col-md-9 content">
                    {/*Добавляем Route (необходимо установить из npm react-router-dom), с помощью которого реализуется логика "Если в строке браузера отображается /путь условный => отображать компоненту*/}
                    <Route path="/profile" render={() => <ContentContainer/>}/>
                    
                    <Route path="/messenger" render={() => <Messenger/>}/>
                    <Route path="/friends" render={() => <Friends/>}/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
