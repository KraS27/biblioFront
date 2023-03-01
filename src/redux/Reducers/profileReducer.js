const ADD_POST = 'ADD-POST';
const UPDATE_POST_MESSAGE = 'UPDATE-POST-MESSAGE';

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            state.posts.push({text: state.newPostMessage});
            break;
        case UPDATE_POST_MESSAGE:
            state.newPostMessage = action.newMessage;
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