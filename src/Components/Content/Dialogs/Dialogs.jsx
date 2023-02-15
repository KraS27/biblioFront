import React from 'react';
import style from "./Dialogs.module.css";
import Chat from "./Chat/Chat";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const refactChats = props.chats.map(chat => <Chat caption={chat.caption} id={chat.id} />);
    const refactMessages = props.messages.map(m => <Message text={m.text} />)

    return (
        <div className={style.dialogs}>
            <div className={style.chats}>
                <h2>Chat</h2>
                {refactChats}
            </div>
            <div className={style.messages}>
                <h2>Messages</h2>
                {refactMessages}
            </div>
        </div>
    );
};

export default Dialogs;