import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import state from './redux/state'
import {addPost} from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App dialogs={state.dialogs} Posts={state.posts} addPost={addPost}/>
);

