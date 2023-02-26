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
        if(action.type === 'ADD-POST'){
            this.addPost();
        }
        else if(action.type === 'UPDATE-POST-MESSAGE'){
            this.updatePostMessage(action.newMessage)
        }
    }
}
export default store;