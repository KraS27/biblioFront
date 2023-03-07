import React from 'react';
import Chat from "./Chat/Chat";
import Message from "./Message/Message";
import {
    addDialogMessageActionCreator,
    updateNewDialogMessageActionCreator
} from "../../../redux/Reducers/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    const state = props.store.getState().dialogs;

    const refactChats = state.chats.map(chat => <Chat caption={chat.caption} id={chat.id} />);
    const refactMessages = state.messages.map(m => <Message text={m.text} />)

    const newMessageTextChange = (newText) => {
        props.store.dispatch(updateNewDialogMessageActionCreator(newText));
    }
    const sendMessage = () => {
        props.store.dispatch(addDialogMessageActionCreator());
    }

    return (<Dialogs chats={refactChats}
                     messages={refactMessages}
                     newMessageTextChange={newMessageTextChange}
                     sendMessage={sendMessage}
                     newDialogMessage={state.newDialogMessage}
    />);
};

export default DialogsContainer;