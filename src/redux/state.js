import rerenderEntireTree  from "../render";

const state = {
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
};

export const addPost = () => {
    debugger;
    let newPost = {
        text: state.profile.myPost.newPostMessage
    };
    state.profile.myPost.posts.push(newPost);
    rerenderEntireTree(state, addPost, updatePostMessage);
};
export const updatePostMessage = (newMassage) => {
    state.profile.myPost.newPostMessage = newMassage;
    rerenderEntireTree(state, addPost, updatePostMessage);
}
export default state;