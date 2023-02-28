const ADD_POST = 'ADD-POST';
const UPDATE_POST_MESSAGE = 'UPDATE-POST-MESSAGE';
const ADD_DIALOG_MESSAGE = 'ADD_DIALOG_MESSAGE';
const UPDATE_NEW_DIALOG_MESSAGE = 'UPDATE_NEW_DIALOG_MESSAGE';

const store = {
    state: {
        dialogs: {
            chats: [
                {caption: 'Vlad', id: '1'},
                {caption: 'Yarik', id: '2'},
                {caption: 'Artem', id: '3'},
                {caption: 'Alina', id: '4'}],
            messages:[
                {text: 'Hello'},
                {text: 'Yo-yo Nigga'},
                {text: 'Slava Ukraini'},
                {text: 'I like be like'},
                {text: 'TEST TSEST STAGT TSSAT'}],
            newDialogMessage: ''
        },
        profile:{
            myPost: {
                posts:[
                    {text: 'Hello'},
                    {text: 'World'},
                    {text: 'Lux Aterna'},
                    {text: 'Yu beter lose yoself inthe musik, the moment you own it'}],
                newPostMessage: ''
            },
            face:{

            }
        }
    },
    rerenderEntireTree() { },
    addPost(){
        debugger;
        this.state.profile.myPost.posts.push({text: this.state.profile.myPost.newPostMessage});
        this.rerenderEntireTree();
    },
    addDialogMessage(){
        this.state.dialogs.messages.push({text: this.state.dialogs.newDialogMessage});
        this.rerenderEntireTree();
    } ,
    updatePostMessage(newMessage) {
        this.state.profile.myPost.newPostMessage = newMessage;
        this.rerenderEntireTree();
    },
    updateNewDialogMessage(newMessage){
        this.state.dialogs.newDialogMessage = newMessage;
        this.rerenderEntireTree();
    },
    setRerender(rerender){
        this.rerenderEntireTree = rerender;
    },
    dispatch(action){
        if(action.type === ADD_POST){
            this.addPost();
        }
        else if(action.type === UPDATE_POST_MESSAGE){
            this.updatePostMessage(action.newMessage);
        }
        else if(action.type == ADD_DIALOG_MESSAGE){
            this.addDialogMessage();
        }
        else if(action.type == UPDATE_NEW_DIALOG_MESSAGE){
            this.updateNewDialogMessage(action.newMessage);
        }
    }
}

export const addPostActionCreator = () =>{
    return {type: ADD_POST};
}
export const updatePostMessageActionCreator = (newMessage) =>{
    return {type: UPDATE_POST_MESSAGE, newMessage: newMessage};
}
export const addDialogMessageActionCreator = () =>{
    return {type: ADD_DIALOG_MESSAGE};
}

export const updateNewDialogMessageActionCreator = (newMessage) =>{
    return {type: UPDATE_NEW_DIALOG_MESSAGE, newMessage: newMessage};
}
export default store;