const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    userId: null,
    login: null,
    password: null
}

const authReducer = (state = initialState, action) => {

    switch (action.type){
        case SET_USER_DATA:
            return{
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

export const setUserData = (userId, email, login) => {
    return { type: SET_USER_DATA, data: {userId, email, login} }
}

export default authReducer;