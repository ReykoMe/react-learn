import './index.css';
import * as serviceWorker from './serviceWorker';
import Store from "./state";
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let renderEntireTree = (state) => {
    ReactDOM.render (
        <React.StrictMode>
            <BrowserRouter>
                <App Data={state}
                     dispatch={Store.dispatch.bind(Store)}
                     />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(Store.getState())
Store.subscribe(renderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
