import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const chats = [
    {caption: "Vlad", id: "1"},
    {caption: "Yarik", id: "2"},
    {caption: "Artem", id: "3"},
    {caption: "Alina", id: "4"}];

const messages = [
    {text: "Hello"},
    {text: "Yo-yo Nigga"},
    {text: "Slava Ukraini"},
    {text: "I like be like"},
    {text: "TEST TSEST STAGT TSSAT"}];


root.render(
    <App dialogs={[chats, messages]}/>
);

