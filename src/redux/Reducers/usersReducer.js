const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';

let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 6,
    usersCount: 41
};

const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case FOLLOW:
            return{
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId)
                        return {...user, followed: true};
                    return user;
                })
            }
        case UNFOLLOW:
            return{
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId)
                        return {...user, followed: false};
                    return user;
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}
        case SET_USERS_COUNT:
            return {...state, usersCount: action.count}
        default:
            return state;
    }
}

export const setUsersAC = (users) =>{
    return {type: SET_USERS, users: users};
}
export const setCurrentPageAC = (page) =>{
    return {type: SET_CURRENT_PAGE, page}
}
export const setUsersCountAC = (count) =>{
    return {type: SET_USERS_COUNT, count}
}
export const followAC = (userId) =>{
    return {type: FOLLOW, userId: userId};
}
export const unFollowAC = (userId) =>{
    return {type: UNFOLLOW, userId: userId};
}

export default usersReducer;