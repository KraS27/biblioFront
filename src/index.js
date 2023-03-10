import React from 'react';
import store from "./redux/store-redux";
import ReactDOM from "react-dom/client";
import App from "./App";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = () => {
    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    )
};

rerenderEntireTree ();
store.subscribe(() => {
    rerenderEntireTree()
});

