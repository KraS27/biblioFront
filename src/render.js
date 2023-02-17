import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";


const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree  = (state, addPost, updatePostMessage) =>{

    root.render(
        <App
            dialogs={state.dialogs}
            profile={state.profile}
            addPost={addPost}
            updatePostMessage={updatePostMessage}
        />
    );
};

export default rerenderEntireTree;