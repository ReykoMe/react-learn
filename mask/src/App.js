import React from 'react';
import './App.css';
import Header from './Header/Header';
import Content from "./Content/Content";
import Footer from './Footer/Footer';
import Sidebar from "./Sidebar/sidebar";
import Messenger from "./Messenger/Messenger";
import {Route} from "react-router-dom";


const App = (props) => {
    return (
            <div className='container'>
                <div className="row">
                    <Header/>
                </div>
                <div className="row">
                    <Sidebar friends={props.Data.sidebar.friends}/>
                    <div className="col-8 content">
                        {/*Добавляем Route (необходимо установить из npm react-router-dom), с помощью которого реализуется логика "Если в строке браузера отображается /путь условный => отображать компоненту*/}
                        <Route exact
                               path="/messenger"
                               render={() => <Messenger messagesData={props.Data.messenger.messagesData}
                                                        usersData={props.Data.messenger.usersData}
                                                        dispatch={props.dispatch}
                                                        inputText={props.Data.messenger.newMessageText}
                               />}/>
                        <Route exact
                               path="/"
                               render={() => <Content profileData={props.Data.profile}
                                                      dispatch={props.dispatch}
                               />}/>
                    </div>
                </div>
                <div className="row">
                    <Footer/>
                </div>
            </div>
    );
}

export default App;
