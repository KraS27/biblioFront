import React from 'react';
import style from "./Dialogs.module.css";
import Chat from "./Chat/Chat";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const newMessage = React.createRef();
    const chats = props.chats.map(chat => <Chat caption={chat.caption} id={chat.id} />)
    const messages = props.messages.map(m => <Message text={m.text} />)


    return (
        <div className={style.dialogs}>
            <div className={style.chats}>
                <h2>Chat</h2>
                {chats}
            </div>
            <div className={style.messages}>
                <h2>Messages</h2>
                {messages}
                <h2>New Message</h2>
                <textarea
                    ref={newMessage}
                    onChange={() => {props.updateNewDialogMessage(newMessage.current.value)}}
                    value={props.newDialogMessage}
                />
                <button onClick={props.addDialogMessage}>Send</button>
            </div>
        </div>
    );
};

export default Dialogs;