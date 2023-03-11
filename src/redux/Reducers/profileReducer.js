const ADD_POST = 'ADD-POST';
const UPDATE_POST_MESSAGE = 'UPDATE-POST-MESSAGE';

const initialState = {
    myPosts: {
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

    let stateCopy = {...state}

    switch (action.type) {
        case ADD_POST:
            stateCopy.myPosts.posts = [...state.myPosts.posts]
            stateCopy.myPosts.posts.push({text: state.myPosts.newPostMessage});
            break;
        case UPDATE_POST_MESSAGE:
            stateCopy.myPosts.newPostMessage = action.newMessage;
            break;
    }
    return stateCopy;
}

export const addPostActionCreator = () =>{
    return {type: ADD_POST};
}
export const updatePostMessageActionCreator = (newMessage) =>{
    return {type: UPDATE_POST_MESSAGE, newMessage: newMessage};
}

export default profileReducer;