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

    switch (action.type){
        case ADD_DIALOG_MESSAGE:
            return{
                ...state,
                messages: [...state.messages, {text: state.newDialogMessage}],
                newDialogMessage: ''
            }
        case UPDATE_NEW_DIALOG_MESSAGE:
            return {
                ...state,
                newDialogMessage: action.newMessage
            }
        default:
            return state;
    }
}

export const addDialogMessage = () =>{
    return {type: ADD_DIALOG_MESSAGE};
}

export const updateNewDialogMessage = (newMessage) =>{
    return {type: UPDATE_NEW_DIALOG_MESSAGE, newMessage: newMessage};
}

export default dialogsReducer;