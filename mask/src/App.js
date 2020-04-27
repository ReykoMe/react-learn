import React from 'react';
import './App.css';
import Header from './header/Header';
import Content from "./content/content";
import Footer from './footer/footer';
import Sidebar from "./sidebar/sidebar";
const App = () => {
  return (
    <div className='main-wrapper'>
        <Header />
        <Sidebar />
        <Content />
        <Footer />
    </div>
  );
}

export default App;
