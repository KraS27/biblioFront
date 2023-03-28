const ADD_POST = 'ADD-POST';
const UPDATE_POST_MESSAGE = 'UPDATE-POST-MESSAGE';
const SET_PROFILE_IMG = 'SET_PROFILE_IMG';
const SET_PROFILE_DESCRIPTION = 'SET_PROFILE_DESCRIPTION';

const initialState = {
    myPosts: {
        posts: [
            {id: 1, text: 'Hello'},
            {id: 2, text: 'World'},
            {id: 3, text: 'Lux Aterna'},
            {id: 4, text: 'Yu beter lose yoself inthe musik, the moment you own it'}],
        newPostMessage: ''
    },
    face: {
        profileImg: '',
        description: ''
    }
};

const profileReducer = (state = initialState, action) => {
    debugger;
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
            return {
                ...state,
                myPosts: {
                    ...state.myPosts,
                    newPostMessage: action.newMessage
                }
            };
        case SET_PROFILE_IMG:
            debugger;
            return {
                ...state,
                face: {
                    ...state.face,
                    profileImg: action.profileImg
                }
            };
        case SET_PROFILE_DESCRIPTION:
            return {
                ...state,
                face: {
                    ...state.face,
                    description: action.description
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
export const setProfileImg = (profileImg) => {
    return {type: SET_PROFILE_IMG, profileImg: profileImg}
}
export const setProfileDescription = (description) => {
    return {type: SET_PROFILE_DESCRIPTION, description: description}
}


export default profileReducer;