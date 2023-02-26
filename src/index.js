import React from 'react';
import store from "./redux/store";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = () =>{
    root.render(
        <App
            state={store.state}
            dispatch={store.dispatch.bind(store)}
        />
    );
};

rerenderEntireTree ();
store.setRerender(rerenderEntireTree);

