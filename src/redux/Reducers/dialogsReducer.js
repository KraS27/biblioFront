const ADD_DIALOG_MESSAGE = 'ADD_DIALOG_MESSAGE';
const UPDATE_NEW_DIALOG_MESSAGE = 'UPDATE_NEW_DIALOG_MESSAGE';

let initialState = {
    chats: [
        {id: 1, caption: 'Vlad',},
        {id: 2, caption: 'Yarik' },
        {id: 3, caption: 'Artem' },
        {id: 4, caption: 'Alina'}],
    messages:[
        {id: 1, text: 'Hello'},
        {id: 2, text: 'Yo-yo'},
        {id: 3, text: 'Slava Ukraini'},
        {id: 4, text: 'I like be like'},
        {id: 5, text: 'TEST TSEST STAGT TSSAT'}],
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