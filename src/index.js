import React from 'react';
import state, {addPost, updatePostMessage, setRerender} from "./redux/state";
import ReactDOM from "react-dom/client";
import App from "./App";

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

setRerender(rerenderEntireTree);
rerenderEntireTree (state, addPost, updatePostMessage);

