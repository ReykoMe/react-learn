import React from 'react';
import './App.css';
import Header from './Header/Header';
import Content from "./Content/Content";
import Footer from './Footer/Footer';
import Sidebar from "./sidebar/sidebar";
import Messenger from "./Messenger/Messenger";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='main-wrapper'>
                <Header/>
                <Sidebar friends={props.Data.sidebar.friends}/>
                <div className="content">
                    {/*Добавляем Route (необходимо установить из npm react-router-dom), с помощью которого реализуется логика "Если в строке браузера отображается /путь условный => отображать компоненту*/}
                    <Route exact
                           path="/messenger"
                           render={() => <Messenger messagesData={props.Data.messenger.messagesData}
                                                    usersData={props.Data.messenger.usersData}
                           />}/>
                    <Route exact
                           path="/"
                           render={() => <Content wallPosts={props.Data.profile.wallPosts}/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
