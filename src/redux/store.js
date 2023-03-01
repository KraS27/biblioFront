import profileReducer from "./Reducers/profileReducer";
import dialogsReducer from "./Reducers/dialogsReducer";

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
                {text: 'Yo-yo'},
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

    setRerender(rerender){
        this.rerenderEntireTree = rerender;
    },

    dispatch(action){
        this.state.profile.myPost =  profileReducer(this.state.profile.myPost, action);
        this.state.dialogs = dialogsReducer(this.state.dialogs, action);
        this.rerenderEntireTree();
    }
}
export default store;