const ADD_POST = 'ADD-POST';
const UPDATE_POST_MESSAGE = 'UPDATE-POST-MESSAGE'

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
    updatePostMessage(newMassage) {
        this.state.profile.myPost.newPostMessage = newMassage;
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
            this.updatePostMessage(action.newMessage)
        }
    }
}

export const addPostActionCreator = () =>{
    return {type: ADD_POST}
}

export const updatePostMessageActionCreator = (newMessage) =>{
    return {type: UPDATE_POST_MESSAGE, newMessage: newMessage}
}
export default store;