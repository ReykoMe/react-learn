import React from 'react';
import './App.css';
import Header from './header/Header';
import Content from "./Content/content";
import Footer from './footer/footer';
import Sidebar from "./sidebar/sidebar";
import Dialogs from "./dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className='main-wrapper'>
                <Header/>
                <Sidebar/>
                <div className="content">
                    <Route exact path ="/dialogs" component={Dialogs}/>
                    <Route path ="/main" component={Content}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
