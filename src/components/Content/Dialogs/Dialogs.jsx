import React from 'react';
import style from "./Dialogs.module.css";
import Chat from "./Chat/Chat";
import Message from "./Message/Message";
import {
    addDialogMessageActionCreator,
    updateNewDialogMessageActionCreator
} from "../../../redux/Reducers/dialogsReducer";


const Dialogs = (props) => {
    debugger;
    const newMessage = React.createRef();

    return (
        <div className={style.dialogs}>
            <div className={style.chats}>
                <h2>Chat</h2>
                {props.chats}
            </div>
            <div className={style.messages}>
                <h2>Messages</h2>
                {props.messages}
                <h2>New Message</h2>
                <textarea
                    ref={newMessage}
                    onChange={() => {props.newMessageTextChange(newMessage.current.value)}}
                    value={props.newDialogMessage}
                />
                <button onClick={props.sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Dialogs;