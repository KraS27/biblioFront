import React from 'react';
import {
    addDialogMessage,
    updateNewDialogMessage
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
    updateNewDialogMessage,
    addDialogMessage
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;