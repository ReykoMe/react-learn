import './index.css';
import * as serviceWorker from './serviceWorker';
import Store from './redux/store';
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import App from "./App";

let renderEntireTree = (state) => {
    ReactDOM.render (
        <React.StrictMode>
            <BrowserRouter>
            <Provider store = {Store}>
                <App />
            </Provider>
                
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(Store.getState())
Store.subscribe(() => {
    renderEntireTree(Store.getState()
    )
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

window.store = Store;