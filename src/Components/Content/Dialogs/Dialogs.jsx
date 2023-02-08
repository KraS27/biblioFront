import React from 'react';
import  style from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import Chat from "./Chat/Chat";
import Message from "./Message/Message";

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.chats}>
                <Chat text={"Vlad"} id={"1"} />
                <Chat text={"Yarik"} id={"2"}/>
                <Chat text={"Artem"} id={"3"}/>
            </div>
            <div className={style.messages}>
                <Message text={"Hello"}/>
                <Message text={"Yo-yo Nigga"}/>
                <Message text={"Slava Ukraini"}/>
            </div>
        </div>
    );
};

export default Dialogs;