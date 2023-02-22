import React from 'react';
import store from "./redux/store";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = () =>{
    root.render(
        <App
            dialogs={store.state.dialogs}
            profile={store.state.profile}
            addPost={store.addPost.bind(store)}
            updatePostMessage={store.updatePostMessage.bind(store)}
        />
    );
};

rerenderEntireTree ();
store.setRerender(rerenderEntireTree);

