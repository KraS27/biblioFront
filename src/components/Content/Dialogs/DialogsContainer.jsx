import React from 'react';
import {
    addDialogMessageActionCreator,
    updateNewDialogMessageActionCreator
} from "../../../redux/Reducers/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return{
        chats: state.dialogsPage.chats,
        messages: state.dialogsPage.messages,
        newDialogMessage: state.dialogsPage.newDialogMessage
    };
}
const mapDispatchToProps =  {
    newMessageTextChange: updateNewDialogMessageActionCreator,
    sendMessage: addDialogMessageActionCreator
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;