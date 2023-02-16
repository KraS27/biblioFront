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
    posts:[
        {text: 'Hello'},
        {text: 'World'},
        {text: 'Lux Aterna'},
        {text: 'Yu beter lose yoself inthe musik, the moment you own it'}]
};

export const addPost = (message) => {
    debugger;
    let newPost = {
        text: message
    };
    state.posts.push(newPost);
};

export default state;