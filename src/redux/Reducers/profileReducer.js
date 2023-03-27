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

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                myPosts: {
                    ...state.myPosts,
                    posts: [...state.myPosts.posts, {text: state.myPosts.newPostMessage}],
                    newPostMessage: ''
                }
            };
        case UPDATE_POST_MESSAGE:
            debugger;
            return {
                ...state,
                myPosts: {
                    ...state.myPosts,
                    newPostMessage: action.newMessage
                }
            };
        default:
            return state;
    }

}

export const addPost = () =>{
    return {type: ADD_POST};
}
export const updatePostMessage = (newMessage) =>{
    return {type: UPDATE_POST_MESSAGE, newMessage: newMessage};
}

export default profileReducer;