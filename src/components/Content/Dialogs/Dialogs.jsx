import React from 'react';
import style from "./Dialogs.module.css";
import Chat from "./Chat/Chat";
import Message from "./Message/Message";
import {addDialogMessageActionCreator, updateNewDialogMessageActionCreator} from "../../../redux/store";

const Dialogs = (props) => {

    const refactChats = props.chats.map(chat => <Chat caption={chat.caption} id={chat.id} />);
    const refactMessages = props.messages.map(m => <Message text={m.text} />)

    const newMessage = React.createRef();

    const newMessageTextChange = () => {
        props.dispatch(updateNewDialogMessageActionCreator(newMessage.current.value));
    }

    const sendMessage = () => {
        props.dispatch(addDialogMessageActionCreator());
    }

    return (
        <div className={style.dialogs}>
            <div className={style.chats}>
                <h2>Chat</h2>
                {refactChats}
            </div>
            <div className={style.messages}>
                <h2>Messages</h2>
                {refactMessages}
                <h2>New Message</h2>
                <textarea
                    ref={newMessage}
                    onChange={newMessageTextChange}
                    value={props.newDialogMessage}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Dialogs;