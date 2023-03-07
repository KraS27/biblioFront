import React from 'react';
import store from "./redux/store-redux";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = () =>{
    root.render( <App store={store}/>);
};

rerenderEntireTree ();
store.subscribe(() => {
    rerenderEntireTree()
});

