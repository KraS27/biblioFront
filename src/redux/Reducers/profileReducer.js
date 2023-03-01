const ADD_POST = 'ADD-POST';
const UPDATE_POST_MESSAGE = 'UPDATE-POST-MESSAGE';

const initialState = {
    myPost: {
        posts: [
            {text: 'Hello'},
            {text: 'World'},
            {text: 'Lux Aterna'},
            {text: 'Yu beter lose yoself inthe musik, the moment you own it'}],
        newPostMessage: ''
    },
    face: {

    }
};

const profileReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case ADD_POST:
            state.myPost.posts.push({text: state.myPost.newPostMessage});
            break;
        case UPDATE_POST_MESSAGE:
            state.myPost.newPostMessage = action.newMessage;
            break;
    }
    return state;
}

export const addPostActionCreator = () =>{
    return {type: ADD_POST};
}
export const updatePostMessageActionCreator = (newMessage) =>{
    return {type: UPDATE_POST_MESSAGE, newMessage: newMessage};
}

export default profileReducer;