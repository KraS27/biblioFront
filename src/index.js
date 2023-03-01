import React from 'react';
import store from "./redux/store-redux";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = (state) =>{
    debugger;
    root.render(
        <App
            state={state}
            dispatch={store.dispatch.bind(store)}
        />
    );
};

rerenderEntireTree (store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
});

