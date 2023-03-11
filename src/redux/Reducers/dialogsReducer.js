const ADD_DIALOG_MESSAGE = 'ADD_DIALOG_MESSAGE';
const UPDATE_NEW_DIALOG_MESSAGE = 'UPDATE_NEW_DIALOG_MESSAGE';

let initialState = {
    chats: [
        {caption: 'Vlad', id: '1'},
        {caption: 'Yarik', id: '2'},
        {caption: 'Artem', id: '3'},
        {caption: 'Alina', id: '4'}],
    messages:[
        {text: 'Hello'},
        {text: 'Yo-yo'},
        {text: 'Slava Ukraini'},
        {text: 'I like be like'},
        {text: 'TEST TSEST STAGT TSSAT'}],
    newDialogMessage: ''
};

const dialogsReducer = (state = initialState, action) => {

    let stateCopy = {...state}

    switch (action.type){
        case ADD_DIALOG_MESSAGE:
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push({text: state.newDialogMessage});
            break;
        case UPDATE_NEW_DIALOG_MESSAGE:
            stateCopy.newDialogMessage = action.newMessage;
            break;
    }

    return stateCopy;
}

export const addDialogMessageActionCreator = () =>{
    return {type: ADD_DIALOG_MESSAGE};
}

export const updateNewDialogMessageActionCreator = (newMessage) =>{
    return {type: UPDATE_NEW_DIALOG_MESSAGE, newMessage: newMessage};
}

export default dialogsReducer;