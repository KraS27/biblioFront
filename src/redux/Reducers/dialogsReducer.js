const ADD_DIALOG_MESSAGE = 'ADD_DIALOG_MESSAGE';
const UPDATE_NEW_DIALOG_MESSAGE = 'UPDATE_NEW_DIALOG_MESSAGE';

const dialogsReducer = (state, action) => {

    switch (action.type){
        case ADD_DIALOG_MESSAGE:
            state.messages.push({text: state.newDialogMessage});
            break;
        case UPDATE_NEW_DIALOG_MESSAGE:
            state.newDialogMessage = action.newMessage;
            break;
    }

    return state;
}

export const addDialogMessageActionCreator = () =>{
    return {type: ADD_DIALOG_MESSAGE};
}

export const updateNewDialogMessageActionCreator = (newMessage) =>{
    return {type: UPDATE_NEW_DIALOG_MESSAGE, newMessage: newMessage};
}

export default dialogsReducer;