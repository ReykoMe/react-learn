import React from 'react';
import './App.css';
import Header from './Header/Header';
import Content from "./Content/Content";
import Footer from './Footer/Footer';
import Sidebar from "./Sidebar/Sidebar";
import Messenger from "./Messenger/Messenger";
import { Route } from "react-router-dom";


const App = (props) => {
  return (
    <div className='container'>
      <div className="row bg-primary mt-2 mb-3 rounded">
        <Header />
      </div>
      <div className="row">
        <Sidebar sidebar={props.state.sidebar} />
        <div className="col-9 content">
          {/*Добавляем Route (необходимо установить из npm react-router-dom), с помощью которого реализуется логика "Если в строке браузера отображается /путь условный => отображать компоненту*/}
          <Route exact path="/messenger" render={() => <Messenger store={props.store} />} />
          <Route exact path="/" render={() => <Content store={props.store}
            />} />

        </div>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
}

export default App;
