import React from 'react';
import style from "./Dialogs.module.css";
import Chat from "./Chat/Chat";
import Message from "./Message/Message";

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.chats}>
                <h2>Chat</h2>
                <Chat text={"Vlad"} id={"1"} />
                <Chat text={"Yarik"} id={"2"}/>
                <Chat text={"Artem"} id={"3"}/>
            </div>
            <div className={style.messages}>
                <h2>Messages</h2>
                <Message text={"Hello"}/>
                <Message text={"Yo-yo Nigga"}/>
                <Message text={"Slava Ukraini"}/>
            </div>
        </div>
    );
};

export default Dialogs;